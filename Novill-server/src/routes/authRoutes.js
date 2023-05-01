const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = mongoose.model('User');
const Pharm = mongoose.model('Pharm');
const Delivery=mongoose.model('Delivery');
const Product=mongoose.model('Product');
const Cart=mongoose.model('Cart');
const Address=mongoose.model('Address');
const Order=mongoose.model('Order');
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
  const { email, password,Confirmpassword,Fname,Lname,AdminAccept,location,pname,phone,utype,desc } = req.body;
  console.log(email, password,Confirmpassword,Fname,Lname,AdminAccept,location,pname,phone,utype,desc);
  try {
    if(Confirmpassword!=password)
    {
      throw('Passwords does not match');
    }
    console.log(AdminAccept);
    const pharm = new Pharm({ email, password,Confirmpassword,Fname,Lname,AdminAccept,location,pname,phone,utype,desc });
    console.log('SignUpPharm');
    console.log(pharm);
    await pharm.save();

    const token = jwt.sign({ pharmId: pharm._id }, 'MY_SECRET_KEY');
    res.status(200).send({message:'pharms extracted successfully',pharms1:pharm});
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
      //const token = jwt.sign({ userId: user._id }, 'MY_SECRET_KEY');
      //res.send({token});
      res.status(200).send({message:'User Logged in successfully',user:user});
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
      //console.log("Fotet 3end al pharm");
      await pharm.comparePassword(password);
      const token = jwt.sign({ pharmId: pharm._id }, 'MY_SECRET_KEY');
      //console.log(pharm);
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
    if(pharm.AdminAccept){
      pharmsArray.push(pharm);
}})
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

router.get('/getAllPharms', async (req, res) => {
  const pharms = await Pharm.find();
  const pharmsArray=[];
  pharms.forEach(pharm=>{
      pharmsArray.push(pharm);
    }
  )
  //console.log(pharms);
  res.status(200).send({message:'pharms extracted successfully',pharms1:pharmsArray});
});

router.get('/getAllDels', async (req, res) => {
  const dels = await Delivery.find();
  const delsArray=[];
  dels.forEach(del=>{
      delsArray.push(del);
    }
  )
  //console.log(pharms);
  res.status(200).send({message:'pharms extracted successfully',dels1:delsArray});
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
});

router.post('/AcceptPharm', async (req, res) => {
  const  {pname} = req.body;
  console.log(pname);
  const pharm = await Pharm.findOne({pname});
  if(pharm && pharm.AdminAccept==false){
    try {
      console.log(pharm);
      await Pharm.updateOne({pname:pharm.pname},{AdminAccept:true});
      console.log(pharm);
      res.status(200).send({message:'pharm updated successfully',pharms1:pharm});
    } catch (err) {
      return res.status(422).send({ error: 'Invalid Pharm name' });
    }
  }
  if(!pharm)
  return res.status(422).send({ error: 'Invalid Pharm name' });
});


router.post('/AcceptDel', async (req, res) => {
  const  {email,location} = req.body;
  console.log(email,location);
  const del = await Delivery.findOne({email});
  if(del && del.AdminAccept==false){
    try {
      console.log(del);
      await Delivery.updateOne({email:del.email},{AdminAccept:true});
      console.log(del);
      res.status(200).send({message:'Delivery changed successfully',del1:del});
    } catch (err) {
      return res.status(422).send({ error: 'Invalid Delivery name' });
    }
  }/*
  if(pharm.AdminAccept==true)
    return res.status(200).send({message:'Pharm already accepted'});*/
  if(!del)
  return res.status(422).send({ error: 'Invalid Delivery name' });
});


router.get('/getUsers', async (req, res) => {
  const users = await User.find();
  const usersArray=[];
  users.forEach(user=>{
    if(user.utype!='admin'){
      usersArray.push(user);
    }
  })
  res.status(200).send({message:'Users extracted successfully',users1:usersArray});
});


router.get('/Products', async (req, res) => {
  console.log(req.query);
  const pharm = await Pharm.find({ pname: req.query.pname });//.select('products');
  const products=await Pharm.find({ pname: req.query.pname }).select('products');
  console.log(pharm);
  let prods1=[];
  products.forEach(product=>prods1.push(product));
  console.log(prods1[0].products);
  let prodArray=[];
  prods1[0].products.forEach((prod) => {
    prodArray.push(prod);
});
  console.log(prodArray);
  res.status(200).send({message:'pharm updated successfully',fpharm:pharm,prods:prodArray});
});
router.get('/ProductDetailsForUser', async (req, res) => {
  console.log(req.query);
  const pharm = await Pharm.find({ pname: req.query.pname });
  const products=await Pharm.find({ pname: req.query.pname }).select('products');
  console.log(pharm);
  let prods1=[];
  products.forEach(product=>prods1.push(product));
  console.log(prods1[0].products);
  let prodArray=[];
  prods1[0].products.forEach((prod) => {
    prodArray.push(prod);
});
  console.log(prodArray);
  res.status(200).send({message:'pharm updated successfully',fpharm:pharm,prods:prodArray});
});



router.post('/DeleteUser',async(req,res)=>{
   await User.deleteOne({email:req.body.email});
   res.status(200).send({message:'User deleted successfully'});
});

router.post('/DeletePharm',async(req,res)=>{
   await Pharm.deleteOne({pname:req.body.pname});
   res.status(200).send({message:'User deleted successfully'});
});

router.post('/DeleteDel',async(req,res)=>{
   await Delivery.deleteOne({email:req.body.email});
   res.status(200).send({message:'User deleted successfully'});
});


router.post('/Addproduct', async (req, res) => {
  const { prodname,salePrice,sale,price,amount,pname,status } = req.body;
  console.log(prodname,salePrice,sale,price,amount,pname);
  try {
    const prod = new Product({ prodname,salePrice,sale,price,amount,pname,status });
    console.log('Add product');
    console.log(prod);
    await prod.save();
    const pharm = await Pharm.findOne({pname});
    console.log(pharm.products);
    pharm.products.push(prod);
    await pharm.save();
    console.log(pharm);
    res.status(200).send({message:'pharms extracted successfully',pharms1:pharm});

  } catch (err) {
    return res.status(422).send(err.message);
  }
});

router.get('/getProducts', async (req, res) => {
  //console.log(req.query);
  //const products=await Pharm.find({ pname: req.query.pname }).select('products');
  console.log(req.query.item.products);
  let prods1=[];
  prods=req.query.item.products;
  res.status(200).send({message:'pharm Products extracted  successfully',fpharm:req.query.item,prods:req.query.item.products});
  //console.log(prods);
  /*console.log(pharm);
  let prods1=[];
  products.forEach(product=>prods1.push(product));
  console.log(prods1[0].products);
  let prodArray=[];
  prods1[0].products.forEach((prod) => {
    prodArray.push(prod);
});
  console.log(prodArray);
  res.status(200).send({message:'pharm updated successfully',fpharm:pharm,prods:prodArray});*/
});
router.post('/CreateCart',async(req,res)=>{
  console.log('The passed user to authroutes/CreateCart is: ',req.body.user);
  const user=req.body.user;
  let cart1= await Cart.findOne({user:user});
  let cart;
  if(!cart1)
  {
    let cart2 = new Cart({user});
    await cart2.save();
    cart=cart2;
    res.status(200).send({message:'Cart created successfully',cart:cart});
  }
  else{
    cart=cart1;  
    res.status(200).send({message:'Cart created successfully',cart:cart});
}
  

  /*else{
    res.status(200).send({message:'Found Cart in the db',cart:cart});
  }*/
});
router.post('/AddToCart',async(req,res)=>{
    const prod = req.body.prod;
    const cart = req.body.cart;
    const pharm = req.body.pharm;
  
    await Cart.updateOne({_id: cart._id}, { $push: { products: prod }, $set: { Pharm: pharm }});
  
    const updatedCart = await Cart.findOne({_id: cart._id});
  
    res.status(200).send({message:'Added the product to the cart successfully',cart: updatedCart});
});
router.post('/SetAddress',async(req,res)=>{
  const {city,street,building,floor,apartnum,phone,cart} = req.body;
  console.log(city,street,building,floor,apartnum,phone,cart.user);
  const user=cart.user;
  let address = new Address({user,city,street,building,floor,apartnum,phone});
  await address.save();
  res.status(200).send({message:'Added the product to the cart successfully',address:address,cart:cart});

});

router.post('/CreateOrderCash',async(req,res)=>{
  const {cart,address,totalAmount,totalPrice} = req.body;
  const user = cart.user;
  const products = cart.products;
  const pharm = cart.Pharm;
  const payMethod='cash';
  const prise=totalPrice;
  const amount=totalAmount;
  const pname=pharm.pname;
  const status='New';
  console.log('---------------CreateOrder------------');
  console.log(cart,address,totalAmount,totalPrice);
  const order = new Order({user,products,pharm,payMethod,address,prise,amount,status,pname});
  order.save();
  await Cart.deleteOne({ _id: cart._id });
  res.status(200).send({message:'The order created successfully'});
});

router.get('/GetOrdersForPharm', async (req, res) => {
  const {pharm}=req.query;
  console.log(pharm);
  const name=pharm.pname;
  const orders = await Order.find({pname:name});
  console.log(orders);
  res.status(200).send({message:'The order created successfully',orders:orders});
});
router.get('/ChangeStatus', async (req, res) => {
  const {order,newStatus}=req.query;
  const id =order._id;
  console.log(order);
  await Order.updateOne({_id:id},{status:newStatus});
  const o = await Order.findOne({_id:id});
  console.log(o);
  res.status(200).send({message:'The order is in Processing',order:o});
});
router.post('/ProductInOrder', async (req, res) => {
  const {item,order}=req.body;
  console.log(item,order);
  const id =order._id;
  console.log(order.pharm);
  //await Order.updateOne({_id:id},{status:newStatus});
  //const o = await Order.findOne({_id:id});
  //console.log(o);
  const o = await Order.findOne({_id:id});

  //res.status(200).send({message:'The order is in Processing',order:o});
});


module.exports = router;
