const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    prodname: {
    type: String,
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
    type: Boolean,
    required: true
  },
  salePrice:{
    type: Number,
    required: false
  },
  pname:{
    type:String,
  },
  status:{
    type:String,
  },
  desc:{
    type:String,
  },
  image: {
    type: String, // Assuming you want to store the image URL as a string
    //required: true // You can modify this validation as per your requirements
  },
  prescription:{
    type:Boolean,
    required:true,
  }

});
 mongoose.model('Product',ProductSchema);
   /*const mongoose = require('mongoose');

  const ProductSchema = new mongoose.Schema({
    prodname: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    amount: {
      type: Number,
      required: true
    },
    sale: {
      type: String,
      required: true
    },
    salePrice: {
      type: Number,
      required: false
    },
    pname: {
      type: String,
      required: true
    },
    status: {
      type: String
    }
  });
  
  mongoose.model('Product', ProductSchema);*/