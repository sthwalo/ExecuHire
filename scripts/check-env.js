const fs = require('fs');
const path = require('path');

// Check if .env file exists
const envPath = path.join(__dirname, '..', '.env');
if (!fs.existsSync(envPath)) {
  console.log('Creating .env file from .env.example...');
  try {
    const exampleEnvPath = path.join(__dirname, '..', '.env.example');
    if (fs.existsSync(exampleEnvPath)) {
      fs.copyFileSync(exampleEnvPath, envPath);
      console.log('.env file created successfully!');
    } else {
      console.log('No .env.example file found. Creating empty .env file...');
      fs.writeFileSync(envPath, '');
    }
  } catch (error) {
    console.error('Error creating .env file:', error);
    process.exit(1);
  }
}

console.log('Environment check completed successfully!');
