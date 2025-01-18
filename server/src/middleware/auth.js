import jwt from 'jsonwebtoken';
import { ApiError } from '../utils/ApiError.js';

export const authenticate = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
      throw new ApiError('Authentication required', 401);
    }
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    
    next();
  } catch (error) {
    next(new ApiError('Invalid token', 401));
  }
}; 