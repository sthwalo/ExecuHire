# ExecuHire - Premium Vehicle Rental Platform

A modern vehicle rental platform built with React, TypeScript, PHP, and PostgreSQL. It offers a seamless experience for renting luxury vehicles.

## 🚀 Features

- **Authentication & Authorization**
  - JWT-based authentication with PHP backend
  - Role-based access control (Admin/User)
  - Protected API routes and admin dashboard

- **Frontend (React + TypeScript)**
  - Modern React components with TypeScript
  - Redux Toolkit for state management
  - React Router for navigation
  - Tailwind CSS for styling
  - Component-based architecture

- **Backend (PHP)**
  - RESTful API endpoints
  - PostgreSQL database integration
  - Secure session management
  - File upload handling
  - Email notifications

- **Vehicle Management**
  - Real-time vehicle availability tracking
  - Dynamic pricing based on duration
  - Comprehensive vehicle details
  - Image galleries and video showcases

- **Booking System**
  - Interactive booking calendar
  - Real-time availability checks
  - PHP-powered email confirmations
  - Booking history tracking

## 📋 Prerequisites

- Node.js 18.x or higher
- PHP 8.0 or higher
- PostgreSQL 14.x or higher
- Composer for PHP dependencies
- npm for JavaScript dependencies

## 🛠 Installation

1. Clone the repository:
```bash
git clone https://github.com/sthwalo/execuhire.git
cd execuhire
```

2. Install dependencies for both client and server:
```bash
cd client && npm install
cd ../server && composer install
```

3. Set up environment variables:
```bash
cp .env.example .env # Do this in both client and server directories
```

4. Set up the database:
```bash
cd server
php artisan migrate
php artisan db:seed
```

5. Start the development servers:
```bash
# In server directory
php artisan serve

# In client directory (new terminal)
npm start
```

## 🔐 Environment Variables

### Server (.env)
```env
# Database
DATABASE_URL="postgresql://sthwalonyoni:Exec10Luxury@localhost:5432/execuhire"
DATABASE_URL="postgresql://sthwalonyoni:Exec10Luxury@localhost:5432/execuhire_test"
DB_HOST=localhost
DB_PORT=5432
DB_NAME=execuhire
DB_USER=sthwalonyoni
DB_PASS=Exec10Luxury

# JWT
JWT_SECRET="your-jwt-secret-key"
JWT_EXPIRES_IN="24h"
JWT_SECRET=your-secret-key

```

### Client (.env)
```env
REACT_APP_API_URL="http://localhost:8000/api"
REACT_APP_STRIPE_PUBLISHABLE_KEY="pk_test_..."
```

## 🚀 Deployment

### Production Deployment

1. Build both applications:
```bash
# Build client
cd client && npm run build

# Build server (if using TypeScript)
cd ../server && npm run build
```

2. Start the production server:
```bash
cd server && npm start
```

### Deployment Platforms

- **Digital Ocean/AWS/GCP**:
  - Set up a Ubuntu 20.04 LTS server
  - Install Node.js and PostgreSQL
  - Use PM2 for process management
  - Configure Nginx as reverse proxy

- **Netlify**:
  - Deploy server as main app
  - Deploy client build as static files
  - Configure environment variables
  - Add PostgreSQL addon

## 🔄 Caching Strategy

1. **Browser Caching**:
   - Static assets cached with appropriate headers
   - API responses cached based on Cache-Control headers

2. **Server Caching**:
   - Database query results cached using Redis
   - Session data cached in Redis

## 📚 API Documentation

### Authentication

```javascript
POST /api/auth/register
POST /api/auth/login
POST /api/auth/logout
```

### Vehicles

```javascript
GET /api/vehicles
GET /api/vehicles/:id
POST /api/vehicles (Admin)
PUT /api/vehicles/:id (Admin)
DELETE /api/vehicles/:id (Admin)
```

### Bookings

```javascript
GET /api/bookings
POST /api/bookings
GET /api/bookings/:id
PUT /api/bookings/:id
DELETE /api/bookings/:id
```

## 🔍 Performance Optimization

1. **Image Optimization**:
   - Sharp for image processing
   - WebP format support
   - Responsive sizes
   - Lazy loading

2. **Code Optimization**:
   - Gzip compression
   - Code splitting
   - Minification
   - Tree shaking

3. **Data Fetching**:
   - Efficient database queries
   - Connection pooling
   - Query caching
   - Rate limiting

## 📈 Monitoring

1. **Error Tracking**:
   - Winston for logging
   - Sentry integration
   - Custom error handling
   - API error logging

2. **Performance Monitoring**:
   - PM2 monitoring
   - Custom performance metrics
   - Real user monitoring

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📚 Documentation

- [API Documentation](docs/api.md)
- [Contributing Guide](CONTRIBUTING.md)
- [Troubleshooting](TROUBLESHOOTING.md)

## 🧪 Testing

Run the test suite:
```bash
npm test
```

Run e2e tests:
```bash
npm run test:e2e
```

## 👥 Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 🐛 Bug Reports

If you discover any bugs, please create an issue in the [issue tracker](https://github.com/yourusername/execuhire/issues).

## 📞 Support

For support, email support@execuhire.com or join our Slack channel.

## 📂 Project Structure

```markdown
execuhire/
├── client/                # React frontend
│   ├── public/           # Static files
│   └── src/
│       ├── components/   # React components
│       ├── pages/        # Route components
│       ├── services/     # API services
│       ├── store/        # Redux store
│       └── types/        # TypeScript types
├── server/               # PHP backend
│   ├── public/          # Public entry point
│   │   └── index.php
│   ├── src/             # PHP source code
│   │   ├── Controllers/ # API controllers
│   │   │   ├── AuthController.php
│   │   │   ├── BookingController.php
│   │   │   └── VehicleController.php
│   │   ├── Models/      # Database models
│   │   │   ├── User.php
│   │   │   ├── Vehicle.php
│   │   │   └── Booking.php
│   │   ├── Config/      # Configuration
│   │   │   ├── Database.php
│   │   │   └── Mail.php
│   │   ├── Middleware/  # Middleware
│   │   │   ├── Auth.php
│   │   │   └── ErrorHandler.php
│   │   └── Services/    # Services
│   │       ├── EmailService.php
│   │       └── FileUploadService.php
│   └── composer.json    # PHP dependencies
├── uploads/              # Uploads directory
└── .env                  # Environment variables
```