import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { Car, Calendar, DollarSign } from 'lucide-react';

interface Vehicle {
  id: string;
  name: string;
  brand: string;
  model: string;
  year: number;
  color: string;
  daily_rate: number;
  description: string;
  images: string[];
  status: 'available' | 'maintenance' | 'rented';
}

const Vehicles = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchVehicles();
  }, []);

  const fetchVehicles = async () => {
    try {
      const { data, error } = await supabase
        .from('vehicles')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setVehicles(data || []);
    } catch (error) {
      console.error('Error fetching vehicles:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Available Vehicles</h1>
        <div className="flex space-x-4">
          <select className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
            <option value="">All Brands</option>
            {/* Add brand options dynamically */}
          </select>
          <select className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
            <option value="">Price Range</option>
            <option value="0-100">$0 - $100/day</option>
            <option value="101-200">$101 - $200/day</option>
            <option value="201+">$201+/day</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {vehicles.map((vehicle) => (
          <Link
            key={vehicle.id}
            to={`/vehicles/${vehicle.id}`}
            className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={vehicle.images[0] || 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80'}
                alt={vehicle.name}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600">
                {vehicle.brand} {vehicle.model}
              </h3>
              <p className="mt-2 text-gray-500">{vehicle.year} • {vehicle.color}</p>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center text-gray-700">
                  <DollarSign className="h-5 w-5 text-indigo-600" />
                  <span className="ml-1 font-semibold">${vehicle.daily_rate}/day</span>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  vehicle.status === 'available' 
                    ? 'bg-green-100 text-green-800'
                    : vehicle.status === 'maintenance'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-red-100 text-red-800'
                }`}>
                  {vehicle.status.charAt(0).toUpperCase() + vehicle.status.slice(1)}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Vehicles;