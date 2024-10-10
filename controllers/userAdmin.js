const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const Assignment = require('../models/assignmentModel');

// Admin registration
exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const admin = new User({ name, email, password: hashedPassword, role: 'admin' });
        await admin.save();
        res.status(201).json({ message: 'Admin registered successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Error registering admin' });
    }
};

// Admin login
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const admin = await User.findOne({ email, role: 'admin' });
        if (!admin) return res.status(400).json({ error: 'Admin not found' });

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

        const token = jwt.sign({ userId: admin._id, role: admin.role }, 'secret', { expiresIn: '1h' });
        res.json({ token });
    } catch (err) {
        res.status(500).json({ error: 'Login failed' });
    }
};

// View assignments as admin
exports.viewAssignments = async (req, res) => {
    try {
        const assignments = await Assignment.find({ admin: req.user.userId }).populate('userId');
        res.json(assignments);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch assignments' });
    }
};

// Accept assignment
exports.acceptAssignment = async (req, res) => {
    try {
        const assignmentId = req.params.id;
        await Assignment.findByIdAndUpdate(assignmentId, { status: 'accepted' });
        res.json({ message: 'Assignment accepted' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to accept assignment' });
    }
};

// Reject assignment
exports.rejectAssignment = async (req, res) => {
    try {
        const assignmentId = req.params.id;
        await Assignment.findByIdAndUpdate(assignmentId, { status: 'rejected' });
        res.json({ message: 'Assignment rejected' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to reject assignment' });
    }
};
