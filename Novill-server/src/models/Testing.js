const mongoose = require('mongoose');

const TestingSchema = new mongoose.Schema({
  image: {
    type: String, // Assuming you want to store the image URL as a string
    required: true // You can modify this validation as per your requirements
  }
});

mongoose.model('Testing', TestingSchema);