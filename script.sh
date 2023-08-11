#!/bin/bash

# Step 1: Set Up the Repository
git clone https://github.com/ElianaPranzetti/githubQuirrod-ensolvers-challenge
cd githubQuirrod-ensolvers-challenge

# Step 2: Set Up the Backend
cd Back-End
npm install

# Create .env file for backend
touch .env
echo "DB_HOST=localhost" >> .env
echo "DB_PORT=5432" >> .env
echo "DB_NAME=ENSOLVER_DB" >> .env
echo "DB_USER=postgres" >> .env # Change this to your PostgreSQL username
echo "DB_PASSWORD=postgres" >> .env # Change this to your PostgreSQL password

# Step 3: Set Up the Frontend
cd ..
cd Frontend
npm install

# Create .env file for frontend
touch .env
echo "VITE_API_URL=http://localhost:3000/api" >> .env

# Step 5: Running the Application
# Open two terminal windows and run the following commands in separate terminals.

# Frontend terminal:
npm run dev

# Backend terminal:
cd ..
cd Back-End
npm run start
