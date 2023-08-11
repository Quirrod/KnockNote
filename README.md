# Repository Setup for ENSOLVERS Challenge

This repository contains the code for the ENSOLVERS Challenge, consisting of both a frontend and a backend application.

## Table of Contents
- [Repository Setup for ENSOLVERS Challenge](#repository-setup-for-ensolvers-challenge)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [FrontEnd dependencies](#frontend-dependencies)
    - [Dependencies:](#dependencies)
    - [Dev Dependencies:](#dev-dependencies)
  - [Backend Dependencies](#backend-dependencies)
    - [Dependencies:](#dependencies-1)
    - [Dev Dependencies:](#dev-dependencies-1)
  - [Getting Started](#getting-started)
  - [Notes](#notes)

## Prerequisites

Before you begin, make sure you have the following tools and resources installed and set up:

1. **Git**: Ensure you have [Git](https://git-scm.com/) installed on your machine.

2. **Node.js and npm**: The backend and frontend are built using Node.js. Install [Node.js and npm](https://nodejs.org/).

3. **PostgreSQL**: The backend uses PostgreSQL as the database. Install and set up [PostgreSQL](https://www.postgresql.org/). Ensure you have the necessary database and user credentials ready.

## FrontEnd dependencies
### Dependencies:

- **@formkit/auto-animate**: Version 0.7.0
- **@tanstack/react-query**: Version 4.32.6
- **axios**: Version 1.4.0
- **framer-motion**: Version 10.15.1
- **iconoir-react**: Version 6.11.0
- **rc-pagination**: Version 3.5.0
- **react**: Version 18.2.0
- **react-dom**: Version 18.2.0
- **react-hook-form**: Version 7.45.4
- **react-router**: Version 6.14.2
- **react-router-dom**: Version 6.14.2
- **sonner**: Version 0.6.2

### Dev Dependencies:

- **@testing-library/react**: Version 14.0.0
- **@types/react**: Version 18.2.15
- **@types/react-dom**: Version 18.2.7
- **@typescript-eslint/eslint-plugin**: Version 6.0.0
- **@typescript-eslint/parser**: Version 6.0.0
- **@vitejs/plugin-react-swc**: Version 3.3.2
- **autoprefixer**: Version 10.4.14
- **eslint**: Version 8.45.0
- **eslint-plugin-react-hooks**: Version 4.6.0
- **eslint-plugin-react-refresh**: Version 0.4.3
- **happy-dom**: Version 10.9.0
- **postcss**: Version 8.4.27
- **tailwindcss**: Version 3.3.3
- **typescript**: Version 5.0.2
- **vite**: Version 4.4.5
- **vitest**: Version 0.34.1

These libraries and dependencies are used to build and develop your frontend application. 

## Backend Dependencies
### Dependencies:

- **@nestjs/common**: Version 10.0.0
- **@nestjs/config**: Version 3.0.0
- **@nestjs/core**: Version 10.0.0
- **@nestjs/platform-express**: Version 10.0.0
- **@nestjs/typeorm**: Version 10.0.0
- **class-transformer**: Version 0.5.1
- **class-validator**: Version 0.14.0
- **pg**: Version 8.11.2
- **reflect-metadata**: Version 0.1.13
- **rxjs**: Version 7.8.1
- **typeorm**: Version 0.3.17

### Dev Dependencies:

- **@nestjs/cli**: Version 10.0.0
- **@nestjs/schematics**: Version 10.0.0
- **@nestjs/testing**: Version 10.0.0
- **@types/express**: Version 4.17.17
- **@types/jest**: Version 29.5.2
- **@types/node**: Version 20.3.1
- **@types/supertest**: Version 2.0.12
- **@typescript-eslint/eslint-plugin**: Version 6.0.0
- **@typescript-eslint/parser**: Version 6.0.0
- **eslint**: Version 8.42.0
- **eslint-config-prettier**: Version 9.0.0
- **eslint-plugin-prettier**: Version 5.0.0
- **jest**: Version 29.5.0
- **prettier**: Version 3.0.0
- **source-map-support**: Version 0.5.21
- **supertest**: Version 6.3.3
- **ts-jest**: Version 29.1.0
- **ts-loader**: Version 9.4.3
- **ts-node**: Version 10.9.1
- **tsconfig-paths**: Version 4.2.0
- **typescript**: Version 5.1.3


These libraries and dependencies are used to build, and develop your backend application.
## Getting Started

Follow these steps to set up and run the application:

1. **Clone the Repository**: Clone this repository to your local machine:

   ```bash
   git clone https://github.com/ElianaPranzetti/githubQuirrod-ensolvers-challenge
   cd githubQuirrod-ensolvers-challenge
   ```

2. **Set Up the Backend**:
  - Create a Database in Postgress with the name `ENSOLVER_DB`

   ```bash
   cd Back-End
   npm install
   ```

   - Create a `.env` file in the `Back-End` directory and add the following information:

     ```plaintext
     DB_HOST=localhost
     DB_PORT=5432
     DB_NAME=ENSOLVER_DB
     DB_USER=postgres # Change this to your PostgreSQL username
     DB_PASSWORD=postgres # Change this to your PostgreSQL password
     ```

4. **Set Up the Frontend**:

   ```bash
   cd ..
   cd Frontend
   npm install
   ```

   - Create a `.env` file in the `Frontend` directory and add the following information:

     ```plaintext
     VITE_API_URL=http://localhost:3000/api
     ```

5. **Running the Application**:

   Open two terminal windows and run the following commands in separate terminals:

   - In the Frontend terminal:

     ```bash
     npm run dev
     ```

   - In the Backend terminal:

     ```bash
     cd ..
     cd Back-End
     npm run start
     ```

   The frontend will be accessible at `http://localhost:5173`, and the backend will be accessible at `http://localhost:3000/api`.

## Notes

- Make sure to replace `DB_USER` and `DB_PASSWORD` in the `.env` file with your actual PostgreSQL credentials.
- Script for running in linux environment is in the root of the project, it is called `run.sh` and it is executable. (Make sure to give it execution permissions)

---
