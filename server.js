require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 5000;
const mongoURI = process.env.MONGO_URI;

if (!mongoURI) {
    console.error('MongoDB URI is not defined in environment variables');
    process.exit(1); // Exit process with failure
}

// Middleware
app.use(cors()); // CORS Middleware
app.use(bodyParser.json()); // Body Parsing Middleware
app.use(express.json()); // Additional JSON Parsing Middleware
app.use(express.urlencoded({ extended: true })); // URL-encoded Body Parsing Middleware
app.use(helmet()); // Security Middleware
app.use(morgan('combined')); // Logging Middleware

// Routes
const dustbinRoutes = require('./routers/Dustbin.router');
const userRoutes = require('./routers/User.router');

app.use('/dustbins', dustbinRoutes);
app.use('/users', userRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the Dustbin API!');
});

// MongoDB Connection
mongoose.connect(mongoURI)
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch((error) => {
        console.error('MongoDB connection error:', error);
    });
