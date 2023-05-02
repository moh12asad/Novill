
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
  pharm:{
    type:PharmSchema
  },
  del:{
    type:DeliverySchema
  },
  text:{
    type:String,
  },
  title:{
    type:String,
  }
  
});
  mongoose.model('Reports', ReportsSchema);