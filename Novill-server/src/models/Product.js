const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    prodname: {
    type: String,
    unique: true,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  amount:{
    type: Number,
    required: true
  },
  sale:{
    type: String,
    required: true
  },
  salePrice:{
    type: Number,
    required: false
  },
});
  mongoose.model('Product',ProductSchema);
  