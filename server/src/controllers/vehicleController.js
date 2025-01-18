import { prisma } from '../index.js';
import { ApiError } from '../utils/ApiError.js';

export const getVehicles = async (req, res, next) => {
  try {
    const vehicles = await prisma.vehicle.findMany({
      include: {
        bookings: true,
        images: true
      }
    });
    
    res.json(vehicles);
  } catch (error) {
    next(new ApiError(error.message, 500));
  }
};

export const getVehicleById = async (req, res, next) => {
  try {
    const { id } = req.params;
    
    const vehicle = await prisma.vehicle.findUnique({
      where: { id },
      include: {
        bookings: true,
        images: true
      }
    });
    
    if (!vehicle) {
      throw new ApiError('Vehicle not found', 404);
    }
    
    res.json(vehicle);
  } catch (error) {
    next(error);
  }
};

export const createVehicle = async (req, res, next) => {
  try {
    const vehicleData = req.body;
    
    const vehicle = await prisma.vehicle.create({
      data: vehicleData,
      include: {
        images: true
      }
    });
    
    res.status(201).json(vehicle);
  } catch (error) {
    next(new ApiError(error.message, 500));
  }
}; 