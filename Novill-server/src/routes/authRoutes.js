const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = mongoose.model('User');
const Pharm = mongoose.model('Pharm');

const router = express.Router();

router.post('/signup', async (req, res) => {
  const { email, password,Confirmpassword,Fname,Lname,utype } = req.body;
  console.log(email, password,Confirmpassword,Fname,Lname,utype);
  try {
    if(Confirmpassword!=password)
    {
      throw('Passwords does not match');
    }
    const user = new User({ email, password,Confirmpassword,Fname,Lname,utype });
    console.log(user);
    await user.save();

    const token = jwt.sign({ userId: user._id }, 'MY_SECRET_KEY');
    res.send({ token });
  } catch (err) {
    return res.status(422).send(err.message);
  }
});

router.post('/signupPharm', async (req, res) => {
  const { email, password,Confirmpassword,Fname,Lname,AdminAccept,location,pname,utype } = req.body;
  console.log(email, password,Confirmpassword,Fname,Lname,AdminAccept,location,pname,utype);
  try {
    if(Confirmpassword!=password)
    {
      throw('Passwords does not match');
    }
    console.log(AdminAccept);
    const pharm = new Pharm({ email, password,Confirmpassword,Fname,Lname,AdminAccept,location,pname,utype });
    console.log('SignUpPharm');
    console.log(pharm);
    await pharm.save();

    const token = jwt.sign({ pharmId: pharm._id }, 'MY_SECRET_KEY');
    res.send({ token });
  } catch (err) {
    return res.status(422).send(err.message);
  }
});


router.post('/signin', async (req, res) => {
  const { email, password } = req.body;
  console.log(email,password);

  if (!email || !password) {
    return res.status(422).send({ error: 'Must provide email and password' });
  }

  const user = await User.findOne({ email });
  console.log(user);
  if(user){
    try {
      await user.comparePassword(password);
      const token = jwt.sign({ userId: user._id }, 'MY_SECRET_KEY');
      res.send({ token });
    } catch (err) {
      return res.status(422).send({ error: 'Invalid password or email' });
    }
  }
  if(!user)
  {
    return res.status(422).send({ error: 'Invalid password or email' });
  }


});


router.post('/signinPharm', async (req, res) => {
  const { email, password } = req.body;
  const pharm = await Pharm.findOne({email});
  if(pharm){
    try {
      console.log("Fotet 3end al pharm");
      await pharm.comparePassword(password);
      const token = jwt.sign({ pharmId: pharm._id }, 'MY_SECRET_KEY');
      console.log(pharm);
      res.send({token});
    } catch (err) {
      return res.status(422).send({ error: 'Invalid password or email' });
    }
  }
  if(!pharm)
  return res.status(422).send({ error: 'Invalid password or email' });
});




router.get('/getPharms', async (req, res) => {
  const pharms = await Pharm.find();
  console.log(pharms);
  res.send(pharms);
});

router.get('/getUserType', async (req, res) => {
  const {email,password}=req.body;
  const user = await User.findOne({ email });
  if(user){
    try {
      await user.comparePassword(password);
      //const token = jwt.sign({ userId: user._id }, 'MY_SECRET_KEY');
      res.send(utype);
    } catch (err) {
      return res.status(422).send({ error: 'Invalid password or email' });
    }
  }
  const pharm = await Pharm.findOne({email});
  if(pharm){
    try {
      console.log("Fotet 3end al pharm");
      await pharm.comparePassword(password);
      const token = jwt.sign({ pharmId: pharm._id }, 'MY_SECRET_KEY');
      console.log(pharm);
      res.send({token});
    } catch (err) {
      return res.status(422).send({ error: 'Invalid password or email' });
    }
  }
  
})


module.exports = router;
