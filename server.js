const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
require('dotenv').config();

const app = express();

// Middleware

// Security Middleware
app.use(helmet());

// CORS Middleware
app.use(cors());

// Logging Middleware
app.use(morgan('combined'));

// Body Parsing Middleware
app.use(express.json()); // Since Express 4.16+, body-parser is included in Express
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

// MongoDB Connection
const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.error('MongoDB connection error:', err));

// Routes
const dustbinRoutes = require('./routers/Dustbin.router');
const userRoutes = require('./routers/User.router');

app.use('/dustbins', dustbinRoutes);
app.use('/users', userRoutes);

app.get('/',(req,res)=>{
    res.send('Welcome to the Dustbin API!');
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
