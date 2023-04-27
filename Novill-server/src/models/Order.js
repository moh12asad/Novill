
const ProductSchema = require('./Product');
const UserSchema=require('./User')
const PharmSchema=require('./Pharm')
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
  }

});
  mongoose.model('Order', OrderSchema);

  