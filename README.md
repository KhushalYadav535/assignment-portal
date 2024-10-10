# Assignment Submission Portal

## Overview

The Assignment Submission Portal is a web application that allows users to upload assignments and enables admins to manage and review those assignments. Users can register, log in, and submit their tasks, while admins can review and accept or reject submissions.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens (JWT)
- bcryptjs

## Features

### User Features

- **User Registration**: Users can register by providing their name, email, and password.
- **User Login**: Users can log in to their accounts.
- **Upload Assignments**: Users can upload their assignments, which will be stored in the database.

### Admin Features

- **Admin Registration**: Admins can register similarly to users.
- **Admin Login**: Admins can log in to their accounts.
- **View Assignments**: Admins can view all assignments submitted to them.
- **Accept/Reject Assignments**: Admins can accept or reject assignments based on their evaluation.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/KhushalYadav535/assignment-portal.git
   cd assignment-portal
2. ** NPM Packeage 
npm install express mongoose body-parser bcryptjs jsonwebtoken dotenv cors nodemon --save-dev
3. ** to run the project
node app.js

OR
nodemon app.js

by Khushal Yadav

