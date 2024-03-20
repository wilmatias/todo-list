## Todo List Application

This application is a simple Todo List built with a PHP Laravel 10 backend API and a Vue 3 frontend using Vite. It allows users to manage their tasks efficiently.

## Prerequisites
Before you begin, ensure you have met the following requirements:

- PHP Laravel 10
- Node.js 18.0
- Setup Instructions
- Backend Setup
- Database Creation:

Create a database named `todo_list` in your MySQL or PostgreSQL.

## Backend Configuration
Setup your .env variable
 - DB_DATABASE= `todo_list`
 - DB_USERNAME= `your username`
 - DB_PASSWORD= `your password`

Dependency Installation:
 - Run composer install to install PHP dependencies.

Database Migration:
 - Migrate the database changes by running: `php artisan migrate`

Database Seeding:
 - Seed the TodosTableSeeder.php to populate your database with initial data by running: `php artisan db:seed --class=TodosTableSeeder`

Run the API:
 - Start the Laravel development server by running: `php artisan serve`

The API will be available at [localhost](http://localhost:8000).

## Frontend Configuration

Install Dependencies:
 -Navigate to the frontend directory and run: `npm install` to install all dependencies.
 
Run the Application:
 - Start the frontend application by running: `npm run dev`

The application will be available at [localhost](http://localhost:3000).

## Usage
Once both the backend and frontend are running, open your web browser and navigate to `http://localhost:3000` to start using the Todo List application.

Contributing
Contributions are welcome! For major changes, please open an issue first to discuss what you would like to change.