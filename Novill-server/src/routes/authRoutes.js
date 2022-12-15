const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = mongoose.model('User');
const Pharm = mongoose.model('Pharm');
const Delivery=mongoose.model('Delivery');

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



router.post('/signupDelivery', async (req, res) => {
  const { email, password,Confirmpassword,Fname,Lname,AdminAccept,location,pname,utype } = req.body;
  console.log(email, password,Confirmpassword,Fname,Lname,AdminAccept,location,pname,utype);
  try {
    if(Confirmpassword!=password)
    {
      throw('Passwords does not match');
    }
    console.log(AdminAccept);
    const del = new Delivery({ email, password,Confirmpassword,Fname,Lname,AdminAccept,location,pname,utype });
    console.log('SignUpPharm');
    console.log(del);
    await del.save();

    const token = jwt.sign({ delId: del._id }, 'MY_SECRET_KEY');
    res.send({ token });
  } catch (err) {
    return res.status(422).send(err.message);
  }
});

router.post('/signinDelivery', async (req, res) => {
  const { email, password } = req.body;
  const del = await Delivery.findOne({email});
  if(del){
    try {
      console.log("Fotet 3end al Delivery");
      await del.comparePassword(password);
      const token = jwt.sign({ delId: del._id }, 'MY_SECRET_KEY');
      console.log(del);
      res.status(200).send({message:'pharms extracted successfully',del1:del});
    } catch (err) {
      return res.status(422).send({ error: 'Invalid password or email' });
    }
  }
  if(!del)
  return res.status(422).send({ error: 'Invalid password or email' });
});



router.post('/signin', async (req, res) => {
  const { email, password } = req.body;
  console.log("AuthRoutes:",email,password);

  if (!email || !password) {
    return res.status(422).send({ error: 'Must provide email and password' });
  }

  const user = await User.findOne({ email });
  console.log(user);
  if(user){
    try {
      await user.comparePassword(password);
      const token = jwt.sign({ userId: user._id }, 'MY_SECRET_KEY');
      res.send({token});
    } catch (err) {
      return res.status(422).send({ error: 'Invalid password or email' });
    }
  }
  if(!user)
  {
    return res.status(422).send({ error: 'Invalid password or email' });
  }
});

router.post('/SigninAdmin', async (req, res) => {
  const { email, password } = req.body;
  console.log("AuthRoutes:",email,password);

  if (!email || !password) {
    return res.status(422).send({ error: 'Must provide email and password' });
  }

  const user = await User.findOne({ email });
  console.log(user);
  if(user && user.utype=='admin'){
    try {
      console.log("fotet el try");
      await user.comparePassword(password);
      const token = jwt.sign({ userId: user._id }, 'MY_SECRET_KEY');
      console.log('mosh moshkelet al route');
      res.send({token});
    } catch (err) {
      return res.status(422).send({ error: 'Invalid password or email' });
    }
  }
  if(!user || user.utype!='admin')
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
      res.status(200).send({message:'pharms extracted successfully',pharms1:pharm});
    } catch (err) {
      return res.status(422).send({ error: 'Invalid password or email' });
    }
  }
  if(!pharm)
  return res.status(422).send({ error: 'Invalid password or email' });
});




router.get('/getPharms', async (req, res) => {
  const pharms = await Pharm.find();
  const pharmsArray=[];
  pharms.forEach(pharm=>{
    pharmsArray.push(pharm);
  })
  //console.log(pharms);
  res.status(200).send({message:'pharms extracted successfully',pharms1:pharmsArray});
});

router.get('/getWaitingPharms', async (req, res) => {
  const pharms = await Pharm.find();
  const pharmsArray=[];
  pharms.forEach(pharm=>{
    if(pharm.AdminAccept===false){
      pharmsArray.push(pharm);
    }
  })
  //console.log(pharms);
  res.status(200).send({message:'pharms extracted successfully',pharms1:pharmsArray});
});


router.get('/getWaitingDeliviries', async (req, res) => {
  const dels = await Delivery.find();
  const delsArray=[];
  dels.forEach(del=>{
    if(del.AdminAccept===false){
      delsArray.push(del);
    }
  })
  res.status(200).send({message:'pharms extracted successfully',dels1:delsArray});
});


router.get('/getPharmStatus', async (req, res) => {
  console.log('Ana fel getPharmStatus');
  const p=req.body.email;
  console.log('req.body Is:',p);
  res.send(false);
})


module.exports = router;
