const mongoose = require('mongoose');

const Testing1Schema = new mongoose.Schema({
  doc: {
    type:String,
  }
});

mongoose.model('Testing1', Testing1Schema);