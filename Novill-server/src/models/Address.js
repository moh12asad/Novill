
const ProductSchema = require('./Product');
const UserSchema=require('./User')
const PharmSchema=require('./Pharm')
const mongoose = require('mongoose');
const AddressSchema = new mongoose.Schema({
    user:{
        type:UserSchema,
        //unique: true,
    },
  city:{
    type:String,
  },
  street:{
    type:String,
  },
  apartnum:{
    type:String,
  },
  floor:{
    type:String,
  },
  building:{
    type:String,
  },
  phone:{
    type:String,
  },
  remarks:{
    type:String,
  }

});
  mongoose.model('Address', AddressSchema);

