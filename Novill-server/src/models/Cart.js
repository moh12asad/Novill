
const ProductSchema = require('./Product');
const UserSchema=require('./User')
const PharmSchema=require('./Pharm')
const mongoose = require('mongoose');
const CartSchema = new mongoose.Schema({
    user:{
        type:UserSchema,
        //unique: true,
    },
  products:{
    type:[ProductSchema]
  },
  Pharm:{
    type:PharmSchema
  }
  
});
  mongoose.model('Cart', CartSchema);

  