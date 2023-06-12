
const ProductSchema = require('./Product');
const UserSchema=require('./User')
const PharmSchema=require('./Pharm')
const DeliverySchema=require('./Delivery')
const AddressSchema=require('./Address')
const mongoose = require('mongoose');
const OrderSchema = new mongoose.Schema({
    user:{
        type:UserSchema,
        //unique: true,
    },
  products:{
    type:[ProductSchema]
  },
  pharm:{
    type:PharmSchema
  },
  payMethod:{
    type:String,
  },
  address:{
    type:AddressSchema,
  },
  prise:{
    type:Number,
  },
  amount:{
    type:Number,
  },
  status:{
    type:String,
  },
  pname:{
    type:String,
  },
  comment:{
    type:String,
  },
  vproducts:{
    type:[ProductSchema],
    default:[]
  },
  xproducts:{
    type:[String],
  },
  del:{
    type:DeliverySchema,
  },
  desc:{
    type:String,
  },
  images: {
    //type: [String], // Define the field as an array of strings
    // required: true // You can modify this validation as per your requirements
    type: Map,
    of: String,
    default: new Map()
  },
  pers:{
    type:[String]
  },
  city:{
    type:String
  }

});
  mongoose.model('Order', OrderSchema);

  