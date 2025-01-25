#!/bin/bash

# Check if .env exists
if [ ! -f .env ]; then
    echo "Error: .env file not found!"
    exit 1
fi

# Load environment variables
export $(cat .env | grep -v '^#' | xargs)

# Create test database
PGPASSWORD=$DB_PASS psql -h $DB_HOST -U $DB_USER -d postgres <<EOF
DROP DATABASE IF EXISTS ${DB_NAME}_test;
CREATE DATABASE ${DB_NAME}_test WITH TEMPLATE template0;
GRANT ALL PRIVILEGES ON DATABASE ${DB_NAME}_test TO $DB_USER;
EOF

echo "Test database created successfully!"
