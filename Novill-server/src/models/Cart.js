
const ProductSchema = require('./Product');
const UserSchema=require('./User')
const PharmSchema=require('./Pharm')
const mongoose = require('mongoose');
const CartSchema = new mongoose.Schema({
    user:{
        type:UserSchema,
    },
  products:{
    type:[ProductSchema]
  },
  Pharm:{
    type:PharmSchema
  },
  Pname:{
    type:String,
  }
  
});
  mongoose.model('Cart', CartSchema);

  