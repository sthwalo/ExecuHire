<?php

require_once __DIR__ . '/../vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/..');
$dotenv->load();

$_ENV['APP_ENV'] = 'test';

// Set up test database
$connection = new \App\Database\Connection('test');

// Create tables if they don't exist
$connection->query("
    DROP TABLE IF EXISTS vehicles;
    CREATE TABLE vehicles (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        model VARCHAR(255),
        price DECIMAL(10,2),
        category VARCHAR(50),
        price_per_hour DECIMAL(10,2),
        featured BOOLEAN DEFAULT false,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
");
