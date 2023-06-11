
const ProductSchema = require('./Product');
const UserSchema=require('./User')
const PharmSchema=require('./Pharm')
const mongoose = require('mongoose');
const CartSchema = new mongoose.Schema({
  products:{
    type:[ProductSchema]
  },
  pname:{
    type:String,
  },
  email:{
    type:String,
  },
  images: {
    //type: [String], // Define the field as an array of strings
    // required: true // You can modify this validation as per your requirements
    type: Map,
    of: String,
    default: new Map()
  },
  
});
  mongoose.model('Cart', CartSchema);

  