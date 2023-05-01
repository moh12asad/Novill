
const ProductSchema = require('./Product');
const UserSchema=require('./User')
const PharmSchema=require('./Pharm')
const DeliverySchema=require('./Delivery')
const mongoose = require('mongoose');
const ReportsSchema = new mongoose.Schema({
    user:{
        type:UserSchema,
        //unique: true,
    },
  Pharm:{
    type:PharmSchema
  },
  Delivery:{
    type:DeliverySchema
  },
  text:{
    type:String,
  },
  Title:{
    type:String,
  }
  
});
  mongoose.model('Reports', ReportsSchema);