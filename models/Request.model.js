const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const requestSchema = new Schema({
    requestName: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    requestImages: {
        type: [String],  // Array of image URLs or paths
        required: false,
    },
    requestDescription: {
        type: String,
        required: true,
    },
    mobileNo: {
        type: String,
        required: true,
        match: [/^\d{10}$/, 'Please enter a valid 10-digit mobile number'],
    },
    isApproved: {
        type: Boolean,
        default: false,
    },
    dateTime: {
        type: Date,
        default: Date.now,
    },
}, {
    timestamps: true,  // Automatically adds createdAt and updatedAt fields
});

const Request = mongoose.model('Request', requestSchema);

module.exports = Request;
