import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { Calendar, DollarSign, Shield, Info } from 'lucide-react';

interface Vehicle {
  id: string;
  name: string;
  brand: string;
  model: string;
  year: number;
  color: string;
  daily_rate: number;
  description: string;
  features: string[];
  images: string[];
  status: 'available' | 'maintenance' | 'rented';
}

const VehicleDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [vehicle, setVehicle] = useState<Vehicle | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedStartDate, setSelectedStartDate] = useState('');
  const [selectedEndDate, setSelectedEndDate] = useState('');

  useEffect(() => {
    fetchVehicleDetails();
  }, [id]);

  const fetchVehicleDetails = async () => {
    try {
      const { data, error } = await supabase
        .from('vehicles')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      setVehicle(data);
    } catch (error) {
      console.error('Error fetching vehicle details:', error);
      navigate('/vehicles');
    } finally {
      setLoading(false);
    }
  };

  const handleBooking = async () => {
    if (!vehicle || !selectedStartDate || !selectedEndDate) return;

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        // Handle not authenticated
        return;
      }

      const days = Math.ceil(
        (new Date(selectedEndDate).getTime() - new Date(selectedStartDate).getTime()) 
        / (1000 * 60 * 60 * 24)
      );

      const totalAmount = days * vehicle.daily_rate;

      const { error } = await supabase
        .from('bookings')
        .insert([
          {
            vehicle_id: vehicle.id,
            start_date: selectedStartDate,
            end_date: selectedEndDate,
            total_amount: totalAmount
          }
        ]);

      if (error) throw error;
      navigate('/bookings');
    } catch (error) {
      console.error('Error creating booking:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!vehicle) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Vehicle not found</h2>
          <p className="mt-2 text-gray-600">The vehicle you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-w-16 aspect-h-9">
            <img
              src={vehicle.images[0] || 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80'}
              alt={vehicle.name}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {vehicle.images.slice(1).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${vehicle.name} view ${index + 2}`}
                className="w-full h-24 object-cover rounded-lg cursor-pointer"
              />
            ))}
          </div>
        </div>

        {/* Vehicle Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              {vehicle.brand} {vehicle.model}
            </h1>
            <p className="mt-2 text-xl text-gray-600">{vehicle.year} • {vehicle.color}</p>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center text-gray-700">
              <DollarSign className="h-6 w-6 text-indigo-600" />
              <span className="ml-1 text-2xl font-bold">${vehicle.daily_rate}/day</span>
            </div>
            <span className={`px-4 py-2 rounded-full text-sm font-medium ${
              vehicle.status === 'available' 
                ? 'bg-green-100 text-green-800'
                : vehicle.status === 'maintenance'
                ? 'bg-yellow-100 text-yellow-800'
                : 'bg-red-100 text-red-800'
            }`}>
              {vehicle.status.charAt(0).toUpperCase() + vehicle.status.slice(1)}
            </span>
          </div>

          <p className="text-gray-600">{vehicle.description}</p>

          {/* Booking Form */}
          {vehicle.status === 'available' && (
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Book This Vehicle</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="start-date" className="block text-sm font-medium text-gray-700">
                    Start Date
                  </label>
                  <input
                    type="date"
                    id="start-date"
                    value={selectedStartDate}
                    onChange={(e) => setSelectedStartDate(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="end-date" className="block text-sm font-medium text-gray-700">
                    End Date
                  </label>
                  <input
                    type="date"
                    id="end-date"
                    value={selectedEndDate}
                    onChange={(e) => setSelectedEndDate(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
                <button
                  onClick={handleBooking}
                  disabled={!selectedStartDate || !selectedEndDate}
                  className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Book Now
                </button>
              </div>
            </div>
          )}

          {/* Features */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Features</h3>
            <div className="grid grid-cols-2 gap-4">
              {vehicle.features.map((feature, index) => (
                <div key={index} className="flex items-center text-gray-600">
                  <Info className="h-5 w-5 text-indigo-600 mr-2" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetails;