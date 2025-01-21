import axios, { AxiosInstance } from 'axios';
import { Vehicle, Booking, Payment } from '../types';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

const api: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Vehicle Service
export class VehicleService {
  static async getAll(): Promise<Vehicle[]> {
    try {
      const response = await api.get('/vehicles.php');
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  static async getById(id: string): Promise<Vehicle> {
    try {
      const response = await api.get(`/vehicles.php?id=${id}`);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  static async checkAvailability(id: string, startDate: Date, endDate: Date): Promise<boolean> {
    const response = await api.get(`/vehicles/${id}/availability`, {
      params: { startDate, endDate },
    });
    return response.data.available;
  }

  private static handleError(error: any): Error {
    if (axios.isAxiosError(error)) {
      return new Error(error.response?.data?.message || 'An error occurred');
    }
    return error;
  }
}

// Booking Service
export class BookingService {
  static async create(booking: Partial<Booking>): Promise<Booking> {
    try {
      const response = await api.post('/bookings.php', booking);
      return response.data;
    } catch (error) {
      throw VehicleService.handleError(error);
    }
  }

  static async getByUser(userId: string): Promise<Booking[]> {
    const response = await api.get('/bookings', {
      params: { userId },
    });
    return response.data;
  }

  static async update(id: string, data: Partial<Booking>): Promise<Booking> {
    const response = await api.patch(`/bookings/${id}`, data);
    return response.data;
  }
}

// Payment Service
export class PaymentService {
  static async createPaymentIntent(bookingId: string): Promise<{ clientSecret: string }> {
    const response = await api.post('/payments/create-intent', { bookingId });
    return response.data;
  }

  static async confirmPayment(paymentId: string): Promise<Payment> {
    const response = await api.post(`/payments/${paymentId}/confirm`);
    return response.data;
  }
}

// Add authentication interceptor
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Error handling interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;
