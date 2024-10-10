const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./Routes/userRoutes');
const adminRoutes = require('./Routes/adminRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());  // to parse JSON bodies

// Route handling
app.use('/api/users', userRoutes);     // User routes
app.use('/api/admins', adminRoutes);   // Admin routes

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/assignment_portal', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log('Error connecting to MongoDB:', err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
