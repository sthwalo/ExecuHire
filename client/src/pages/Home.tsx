import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Shield, Clock, Star } from 'lucide-react';

const Home = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80"
            alt="Luxury car"
          />
          <div className="absolute inset-0 bg-gray-900 bg-opacity-70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Premium Vehicle Rental
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            Experience luxury and performance with our premium vehicle rental service. Choose from our exclusive collection of high-end vehicles.
          </p>
          <div className="mt-10">
            <Link
              to="/vehicles"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Browse Vehicles
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose ExecuHire
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We offer the best luxury vehicle rental experience with premium services and exceptional customer care.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="pt-6">
                <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                  <div className="-mt-6">
                    <div className="inline-flex items-center justify-center rounded-md bg-indigo-600 p-3 shadow-lg">
                      <Car className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900">Premium Vehicles</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Access to a wide range of luxury and premium vehicles from top manufacturers.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                  <div className="-mt-6">
                    <div className="inline-flex items-center justify-center rounded-md bg-indigo-600 p-3 shadow-lg">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900">Fully Insured</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Comprehensive insurance coverage for peace of mind during your rental.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                  <div className="-mt-6">
                    <div className="inline-flex items-center justify-center rounded-md bg-indigo-600 p-3 shadow-lg">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900">24/7 Support</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Round-the-clock customer support for assistance whenever you need it.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                  <div className="-mt-6">
                    <div className="inline-flex items-center justify-center rounded-md bg-indigo-600 p-3 shadow-lg">
                      <Star className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900">Premium Service</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Exceptional service with attention to detail for a luxury experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Vehicles */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900">Featured Vehicles</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Sample featured vehicles - these would be dynamically loaded */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                className="w-full h-48 object-cover"
                src="https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80"
                alt="Luxury sedan"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Mercedes-Benz S-Class</h3>
                <p className="mt-2 text-gray-600">Experience ultimate luxury with our flagship sedan.</p>
                <div className="mt-4">
                  <Link
                    to="/vehicles"
                    className="text-indigo-600 hover:text-indigo-500"
                  >
                    Learn more →
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                className="w-full h-48 object-cover"
                src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80"
                alt="Sports car"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Porsche 911</h3>
                <p className="mt-2 text-gray-600">Pure driving pleasure in an iconic sports car.</p>
                <div className="mt-4">
                  <Link
                    to="/vehicles"
                    className="text-indigo-600 hover:text-indigo-500"
                  >
                    Learn more →
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                className="w-full h-48 object-cover"
                src="https://images.unsplash.com/photo-1519245659620-e859806a8d3b?auto=format&fit=crop&q=80"
                alt="SUV"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Range Rover Sport</h3>
                <p className="mt-2 text-gray-600">Luxury and capability in perfect harmony.</p>
                <div className="mt-4">
                  <Link
                    to="/vehicles"
                    className="text-indigo-600 hover:text-indigo-500"
                  >
                    Learn more →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;