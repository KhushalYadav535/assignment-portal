const express = require('express');
const { register, login, uploadAssignment, getAdmins } = require('../controllers/userController');
const router = express.Router();

// User registration and login
router.post('/register', register);    // User registration
router.post('/login', login);          // User login

// User-specific functionality
router.post('/upload', uploadAssignment);  // Upload assignment
router.get('/admins', getAdmins);          // Get list of admins

module.exports = router;
