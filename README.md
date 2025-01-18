# ExecuHire - Premium Vehicle Rental Platform

ExecuHire is a modern, full-stack vehicle rental platform built with Node.js, Express, React, and Prisma. It offers a seamless experience for renting luxury vehicles with features like real-time availability, secure payments, and email notifications.

## 🚀 Features

- **Authentication & Authorization**
  - Secure JWT-based authentication
  - Role-based access control (Admin/User)
  - Protected API routes and admin dashboard

- **Vehicle Management**
  - Real-time vehicle availability tracking
  - Dynamic pricing based on duration
  - Comprehensive vehicle details and specifications
  - Image galleries and video showcases

- **Booking System**
  - Interactive booking calendar
  - Real-time availability checks
  - Automated confirmation emails
  - Booking history and status tracking

- **Payment Integration**
  - Secure payment processing with Stripe
  - Multiple payment methods
  - Automated payment receipts
  - Payment status tracking

- **User Experience**
  - Responsive design for all devices
  - Modern UI with Tailwind CSS
  - Real-time notifications
  - Interactive vehicle gallery

## 📋 Prerequisites

- Node.js 18.x or higher
- PostgreSQL 14.x or higher
- Stripe account for payments
- AWS S3 bucket for image storage (optional)

## 🛠 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/execuhire.git
cd execuhire
```

2. Install dependencies for both client and server:
```bash
cd client && npm install
cd ../server && npm install
```

3. Set up environment variables:
```bash
cp .env.example .env # Do this in both client and server directories
```

4. Set up the database:
```bash
cd server
npx prisma migrate dev
npx prisma db seed
```

5. Start the development servers:
```bash
# In server directory
npm run dev

# In client directory (new terminal)
npm start
```

## 🔐 Environment Variables

### Server (.env)
```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/execuhire"

# JWT
JWT_SECRET="your-jwt-secret-key"
JWT_EXPIRES_IN="24h"

# Stripe
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# AWS S3 (Optional)
AWS_ACCESS_KEY_ID="your-access-key"
AWS_SECRET_ACCESS_KEY="your-secret-key"
AWS_REGION="your-region"
AWS_BUCKET_NAME="your-bucket-name"
```

### Client (.env)
```env
REACT_APP_API_URL="http://localhost:5000/api"
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

- **Heroku**:
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
/ExecuHire/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── utils/
│   ├── package.json
│   └── .env
├── server/                 # Express backend
│   ├── src/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── utils/
│   │   └── index.js
│   ├── prisma/
│   ├── package.json
│   └── .env
├── README.md
└── .gitignore
```