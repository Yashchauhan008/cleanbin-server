// cloudinary.js
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'df7ybfzde', // Replace with your Cloudinary cloud name
  api_key: '147847947946187',       // Replace with your Cloudinary API key
  api_secret: '4qVBSPF_3RF2POeXQQdwwAKfo-0'   // Replace with your Cloudinary API secret
});

module.exports = cloudinary;
