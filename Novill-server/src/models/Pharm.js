
const ProductSchema = require('./Product');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const PharmSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  Confirmpassword:{
    type: String,
    required: true
  },
  Fname:{
    type: String,
    required: true
  },
  Lname:{
    type: String,
    required: true
  },
  AdminAccept:{
    type:Boolean,
    required:false
  },
  location:{
    type:String,
    required:true
  },
  pname:{
    type:String,
    unique: true,
    required:true
  },
  phone:{
    type:String,
  },
 
  utype:{
    type:String,
    required:false
  },
  products:{
    type:[ProductSchema]
  },
  desc:{
    type:String,
  },
  image: {
    type: String, // or any other type that is suitable for your use case
    //required: false // change to true if the file upload is required during registration
  }
  
});

PharmSchema.methods.comparePassword = function(candidatePassword) {
  const pharm = this;

  return new Promise((resolve, reject) => {
    bcrypt.compare(candidatePassword, pharm.password, (err, isMatch) => {
      if (err) {
        return reject(err);
      }

      if (!isMatch) {
        return reject(false);
      }

      resolve(true);
    });
  });
};
PharmSchema.pre('save', function(next) {
    const pharm = this;
    if (!pharm.isModified('password')) {
      return next();
    }
  
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        return next(err);
      }
  
      bcrypt.hash(pharm.password, salt, (err, hash) => {
        if (err) {
          return next(err);
        }
        pharm.password = hash;
        next();
      });
    });
  });

  mongoose.model('Pharm', PharmSchema);

  