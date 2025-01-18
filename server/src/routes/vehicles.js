import express from 'express';
import { getVehicles, getVehicleById, createVehicle } from '../controllers/vehicleController.js';
import { authenticate } from '../middleware/auth.js';
import { isAdmin } from '../middleware/isAdmin.js';

const router = express.Router();

router.get('/', getVehicles);
router.get('/:id', getVehicleById);
router.post('/', authenticate, isAdmin, createVehicle);

export default router; 