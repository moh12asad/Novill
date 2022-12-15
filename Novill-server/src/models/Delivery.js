const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const DeliverySchema = new mongoose.Schema({
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
    required:true
  },
  utype:{
    type:String,
    required:false
  }
  
});

DeliverySchema.methods.comparePassword = function(candidatePassword) {
  const del = this;

  return new Promise((resolve, reject) => {
    bcrypt.compare(candidatePassword, del.password, (err, isMatch) => {
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
DeliverySchema.pre('save', function(next) {
    const del = this;
    if (!del.isModified('password')) {
      return next();
    }
  
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        return next(err);
      }
  
      bcrypt.hash(del.password, salt, (err, hash) => {
        if (err) {
          return next(err);
        }
        del.password = hash;
        next();
      });
    });
  });

  mongoose.model('Delivery', DeliverySchema);
  