# Install required packages
composer require vlucas/phpdotenv "^5.5"
composer require robmorgan/phinx "^0.13.4"

# Install development dependencies
composer require --dev phpunit/phpunit "^9.6"

# Create .env file
cp .env.example .env

# Add required environment variables
echo "DB_HOST=localhost
DB_PORT=5432
DB_NAME=execuhire
DB_USER=sthwalonyoni
DB_PASS=Exec10Luxury
APP_ENV=local" > .env

# Create database config file
mkdir -p config
touch config/database.php

# Login to PostgreSQL
psql -U postgres

# Create database and user
CREATE DATABASE execuhire;
CREATE USER sthwalonyoni WITH PASSWORD 'Exec10Luxury';
GRANT ALL PRIVILEGES ON DATABASE execuhire TO sthwalonyoni;

# Create test database
CREATE DATABASE execuhire_test;
GRANT ALL PRIVILEGES ON DATABASE execuhire_test TO sthwalonyoni;

# Create test database setup script
mkdir -p scripts
touch scripts/setup-test-db.sh
chmod +x scripts/setup-test-db.sh

# Create PHPUnit configuration
cp vendor/phpunit/phpunit/phpunit.xml.dist phpunit.xml

# Create test bootstrap file
touch tests/bootstrap.php

touch app/Models/Vehicle.php
touch tests/Unit/VehicleTest.php

touch app/Database/Connection.php

# Initialize Phinx
vendor/bin/phinx init

# Create first migration
vendor/bin/phinx create CreateVehiclesTable

# Run database setup
bash scripts/setup-test-db.sh

# Run tests
vendor/bin/phpunit

vendor/bin/phpunit tests/Unit/DatabaseTest.php

composer dump-autoload

server/
├── app/
│   ├── Database/
│   │   └── Connection.php
│   └── Models/
│       └── Vehicle.php
├── config/
│   └── database.php
├── database/
│   ├── migrations/
│   └── seeds/
├── scripts/
│   └── setup-test-db.sh
├── tests/
│   ├── Unit/
│   │   └── VehicleTest.php
│   └── bootstrap.php
├── .env
├── .env.example
├── composer.json
├── phpunit.xml
└── phinx.php