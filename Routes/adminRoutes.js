const express = require('express');
const { register, login, viewAssignments, acceptAssignment, rejectAssignment } = require('../controllers/userAdmin');
const router = express.Router();

// Admin registration and login
router.post('/register', register);    // Admin registration
router.post('/login', login);          // Admin login

// Assignment handling by admin
router.get('/assignments', viewAssignments);  // Admin viewing assignments
router.post('/assignments/:id/accept', acceptAssignment);  // Admin accepting assignment
router.post('/assignments/:id/reject', rejectAssignment);  // Admin rejecting assignment

module.exports = router;
