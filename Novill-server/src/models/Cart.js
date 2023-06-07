
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
  }
  
});
  mongoose.model('Cart', CartSchema);

  