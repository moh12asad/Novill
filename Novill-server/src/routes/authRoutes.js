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
const Reports=mongoose.model('Reports');
const Testing=mongoose.model('Testing');
const Testing1=mongoose.model('Testing1');
const router = express.Router();

router.post('/signup', async (req, res) => {1
  const { email, password,Confirmpassword,Fname,Lname,utype,phone } = req.body;
  console.log(email, password,Confirmpassword,Fname,Lname,utype,phone);
  try {
    if(Confirmpassword!=password)
    {
      throw('Passwords does not match');
    }
    const cart= new Cart({email});
    await cart.save();
    const user = new User({ email, password,Confirmpassword,Fname,Lname,utype,phone,cart });
    console.log(user);
    
    await user.save();

    const token = jwt.sign({ userId: user._id }, 'MY_SECRET_KEY');
    res.send({ token:token,user:user });
  } catch (err) {
    return res.status(422).send(err.message);
  }
});

router.post('/signupPharm', async (req, res) => {
  const { email, password,Confirmpassword,Fname,Lname,AdminAccept,location,pname,phone,utype,desc,image } = req.body;
  console.log(email, password,Confirmpassword,Fname,Lname,AdminAccept,location,pname,phone,utype,desc,image);
  try {
    if(Confirmpassword!=password)
    {
      throw('Passwords does not match');
    }
    console.log(AdminAccept);
    const pharm = new Pharm({ email, password,Confirmpassword,Fname,Lname,AdminAccept,location,pname,phone,utype,desc,image });
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
  const { email, password,Confirmpassword,Fname,Lname,AdminAccept,location,pname,utype,phone } = req.body;
  console.log(email, password,Confirmpassword,Fname,Lname,AdminAccept,location,pname,utype,phone);
  try {
    if(Confirmpassword!=password)
    {
      throw('Passwords does not match');
    }
    console.log(AdminAccept);
    const del = new Delivery({ email, password,Confirmpassword,Fname,Lname,AdminAccept,location,pname,utype,phone });
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
      res.status(200).send({message:'pharms extracted successfully',del:del});
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

router.get('/getReports', async (req, res) => {
  const reports = await Reports.find();
  const reportsArray=[];
  reports.forEach(report=>{
      reportsArray.push(report);
});
  //console.log(pharms);
  res.status(200).send({message:'pharms extracted successfully',reports:reportsArray});
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

router.post('/EditPharm', async (req, res) => {
  const  {email,Fname,Lname,location,pname,phone,desc,pharm} = req.body;
  console.log(email,Fname,Lname,location,pname,phone,desc,pharm);
  let id=pharm._id;

  await Pharm.updateOne({_id:id},{email:email,Fname:Fname,Lname:Lname,location:location,pname:pname,phone:phone,desc:desc});
  const p = await Pharm.findOne({_id:id});
  console.log(p);
  res.status(200).send({message:'pharm updated successfully',pharms1:p});
  //await p.save();
  //console.log(p);

  /*if(pharm && pharm.AdminAccept==false){
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
  return res.status(422).send({ error: 'Invalid Pharm name' });*/
});
router.post('/EditUser', async (req, res) => {
  const  {email,Fname,Lname,phone,user} = req.body;
  console.log(email,Fname,Lname,phone,user);
  let id=user._id;

  await User.updateOne({_id:id},{email:email,Fname:Fname,Lname:Lname,phone:phone});
  const u = await User.findOne({_id:id});
  console.log(u);
  res.status(200).send({message:'User updated successfully',user:u});
});

router.post('/EditDel', async (req, res) => {
  const  {email,Fname,Lname,phone,del} = req.body;
  console.log(email,Fname,Lname,phone,del);
  let id=del._id;

  await Delivery.updateOne({_id:id},{email:email,Fname:Fname,Lname:Lname,phone:phone});
  const d = await Delivery.findOne({_id:id});
  console.log(d);
  res.status(200).send({message:'Delivery updated successfully',del:d});
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

router.post('/ReportUser',async(req,res)=>{
  const {title,text,user} = req.body;
  console.log(title,text,user);
  const r = new Reports({title,text,user});
  r.save();
  console.log(r);
  res.status(200).send({message:'Report has been saved successfully',user:user,r:r});
  //await User.deleteOne({email:req.body.email});
  //res.status(200).send({message:'User deleted successfully'});
});
router.post('/ReportPharm',async(req,res)=>{
  const {title,text,pharm} = req.body;
  console.log(title,text,pharm);
  const r = new Reports({title,text,pharm});
  r.save();
  console.log(r);
  res.status(200).send({message:'Report has been saved successfully',pharm:pharm,r:r});
  //await User.deleteOne({email:req.body.email});
  //res.status(200).send({message:'User deleted successfully'});
});

router.post('/ReportDelivery',async(req,res)=>{
  const {title,text,del} = req.body;
  console.log(title,text,del);
  const r = new Reports({title,text,del});
  r.save();
  console.log(r);
  res.status(200).send({message:'Report has been saved successfully',del:del,r:r});
  //await User.deleteOne({email:req.body.email});
  //res.status(200).send({message:'User deleted successfully'});
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
  const { prodname,desc,salePrice,sale,price,amount,pname,status,image,prescription } = req.body;
  console.log(prodname,desc,salePrice,sale,price,amount,pname,image,prescription);
  try {
    const prod = new Product({ prodname,desc,salePrice,sale,price,amount,pname,status,image,prescription });
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
    console.log('The error is in the create cart function');
    res.status(200).send({message:'Cart created successfully',cart:cart});
  }
  else{
    cart=cart1;
    res.status(200).send({message:'Cart created successfully',cart:cart});
}

});
router.post('/AddToCart',async(req,res)=>{
    const prod = req.body.prod;
    //const cart = req.body.cart;
    const pharm = req.body.pharm;
    const user=req.body.user;
    const id=user.id;
    const cart = user.cart;
    const imageUri=req.body.imageUri;
    const per=prod.prodname;
    console.log("\n------------\n",cart);
  //console.log(cart);
  console.log("\n------------\nThe imageuri is: \n------------\n",imageUri,"\n------------\n");
    await Cart.updateOne({_id: cart._id}, { $push: { products: prod }, $set: { Pharm: pharm }});
    await Cart.updateOne({_id: cart._id},{pname:pharm.pname});
    const c1 = await Cart.findOne({_id:cart._id});
    if(prod.prescription){
    c1.images.set(per,imageUri);
    }
    c1.save();
    const updatedCart = await Cart.findOne({_id: cart._id});

    const u = await User.findOne({_id:user._id});
    u.cart=updatedCart;
    await u.save();
    const u1= await User.findOne({_id:u._id});
    console.log(updatedCart);
    console.log("\n------------\n",u1,"\n------------\n");
  
    res.status(200).send({message:'Added the product to the cart successfully',cart: updatedCart,user:u1,pharm:pharm});
});
router.post('/SetAddress',async(req,res)=>{
  const {city,street,building,floor,apartnum,phone,cart,user} = req.body;
  console.log(city,street,building,floor,apartnum,phone,cart,user);
  //const user=cart.user;
  const pname=cart.pname;
  const pharm = await Pharm.findOne({pname:pname});
  let address = new Address({user,city,street,building,floor,apartnum,phone});
  await address.save();
  res.status(200).send({message:'Added the product to the cart successfully',address:address,cart:cart,user:user,pharm:pharm});

});

router.post('/CreateOrderCash',async(req,res)=>{
  const {cart,address,totalAmount,totalPrice,user,pharm} = req.body;
  //const user = cart.user;
  const products = cart.products;
  const images = cart.images;
  const city = pharm.location;
  //const pharm = cart.Pharm;
  const payMethod='cash';
  const prise=totalPrice;
  const amount=totalAmount;
  const pname=pharm.pname;
  const status='New';
  console.log('---------------CreateOrder------------');
  console.log(cart,address,totalAmount,totalPrice);
  const order = new Order({user,products,pharm,payMethod,address,prise,amount,status,pname,images,city});
  order.save();
  let cart1 = await Cart.findOne({_id:cart._id});
  cart1.products=[];
  cart1.images=[];
  cart1.pname="";
  cart1.save();
  let u = await User.findOne({_id:user._id});
  u.cart.products=[];
  await User.updateOne({_id:u._id},{cart:cart1});
  //await Cart.deleteOne({ _id: cart._id });
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
  const o = await Order.findOne({_id:id});

  //res.status(200).send({message:'The order is in Processing',order:o});
});

router.post('/GetUser',async(req,res)=>{
  const {user}=req.body;
  console.log("===========user in get user is:==========\n",user);
  const id=user._id;
  const u = await User.findOne({_id:user._id});
  console.log("HIHIHIHIHIH");
  console.log(u);
  res.status(200).send({message:'The order is in Processing',user:u});
});

router.post('/GetCart',async(req,res)=>{
  const {cart}=req.body;
  console.log("===========user in get user is:==========\n",user);
  const id=cart._id;
  const cart1 = await Cart.findOne({_id:cart._id});
  console.log("HIHIHIHIHIH");
  console.log(cart1);
  res.status(200).send({message:'The order is in Processing',cart:cart1});
});
router.post('/GetPharm',async(req,res)=>{
  const {user,cart}=req.body;
  const pname = cart.pname;
  const pharm = await Pharm.findOne({pname:pname});
  res.status(200).send({message:'The order is in Processing',pharm:pharm});

});
router.post('/TestingImage', async (req, res) => {
  const {imageUri}=req.body;
  console.log(imageUri);
  const test = new Testing({image:imageUri});
  console.log(test);
  await test.save();
  res.status(200).send({message:'The order is in Processing',image:test});
  //console.log(order.pharm);
  //await Order.updateOne({_id:id},{status:newStatus});
  //const o = await Order.findOne({_id:id});
  //console.log(o);
  //const o = await Order.findOne({_id:id});
  //res.status(200).send({message:'The order is in Processing',order:o});
});

router.post('/TestingDoc', async (req, res) => {
  const {documentUri}=req.body;
  console.log(documentUri);
  const test = new Testing1({doc:documentUri});
  console.log(test);
  await test.save();
  res.status(200).send({message:'The order is in Processing',doc:test});
  //console.log(order.pharm);
  //await Order.updateOne({_id:id},{status:newStatus});
  //const o = await Order.findOne({_id:id});
  //console.log(o);
  //const o = await Order.findOne({_id:id});
  //res.status(200).send({message:'The order is in Processing',order:o});
});
/*
router.post('/DeleteProd', async (req, res) => {
  const {prod,pharm}=req.body;
  console.log(prod,pharm);
  console.log(pharm.pname);
  const pid=pharm._id;
  const prodid = prod._id;
const pharm1 = await Pharm.findOne({_id:pid});
  try {
    console.log("Products is:\n",pharm.products)

    // Delete product from products schema
    await Product.deleteOne({ _id: prodid });

    res.status(200).send({message:'The order created successfully',pharm:pharm1});
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting the product' });
  }
});*/
router.post('/DeleteProd', async (req, res) => {
  const { prod, pharm } = req.body;
  console.log(prod, pharm);
  console.log(pharm.pname);
  const pid = pharm._id;
  const prodid = prod._id;

  const pharm1 = await Pharm.findOne({ _id: pid });

  try {
    console.log("Products is:\n", pharm.products);

    // Delete product from products schema
    await Product.deleteOne({ _id: prodid });

    // Remove the deleted product from the pharm.products array
    pharm1.products = pharm1.products.filter((product) => product._id.toString() !== prodid);
    //setPharm({ ...pharm, products: pharm1.products });
    // Save the updated pharm1 document
    await pharm1.save();

    res.status(200).send({ message: 'The order created successfully', pharm: pharm1 });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting the product' });
  }
});

router.post('/AddToVProducts', async (req, res) => {
  const {prod,pharm,order}=req.body;
  console.log((prod,pharm,order));
  let amount1=prod.amount;
  amount1=amount1-1;
  let p= await Product.findOne({_id:prod._id});
  await Product.updateOne({_id:prod._id},{amount:amount1});
  let ph1= await Pharm.findOne({pname:prod.pname});
  let id = ph1._id;
  let prodname=prod.prodname;
  const updatedPharm = await Pharm.updateOne(
    { _id: id, 'products.prodname': prodname },
    { $inc: { 'products.$.amount': -1 } }
  );
  
  const arr=[];
   p= await Product.findOne({_id:prod._id});
   let o = await Order.findOne({_id:order._id});
  o.vproducts.push(p);
  await o.save();
  res.status(200).send({ message: 'The order created successfully', pharm: updatedPharm,order:o,prod:prod });
});
router.post('/AddToXProducts', async (req, res) => {
  const {prod,pharm,order}=req.body;
  console.log((prod,pharm,order));
  let p= await Product.findOne({_id:prod._id});
  let ph1= await Pharm.findOne({pname:prod.pname});
  let prodname=prod.prodname;
   let o = await Order.findOne({_id:order._id});
  o.xproducts.push(prodname);
  await o.save();
  res.status(200).send({ message: 'The order created successfully', pharm: ph1,order:o,prod:prod });
});

router.post('/OrderIsReady', async (req, res) => {
  const {order,desc}=req.body;
  console.log(desc);
  console.log("==========================InOrderIsReadyFunc===========================");
  const id =order._id;
  let newstatus="Ready,Waiting for delivery";
  const o = await Order.findOne({_id:id});
  o.desc=desc;
  await o.save();
  console.log(o);
  await Order.updateOne({_id:id},{desc:desc});
  await Order.updateOne({_id:id},{status:newstatus});
  console.log("===order is===");
  console.log(order.desc);
  const pname=order.pname;
  const orders = await Order.find({ status: { $in: ["New", "Processing"] },pname:pname});
  orders.forEach(element=>{
    console.log(element._id);
  })
  //const orders=await Order.find({});
  res.status(200).send({ message: 'The order created successfully',orders:orders});
});
router.post('/GetReadyOrders', async (req, res) => {
  const {del}=req.body;
  console.log('-------------------------------------\n',del);
  const location = del.location;
  const orders = await Order.find({city:location,status:"Ready,Waiting for delivery"});
  console.log("\nResponse.data.orders:\n=============================\n",orders,"\n=============================\n")
  res.status(200).send({ message: 'The order created successfully',orders:orders});
});

router.post('/DelIsComing', async (req, res) => {
  const {order,del}=req.body;
  console.log('-------------------------------------\n',del);
  const id=order._id;
  const d = await Delivery.findOne({_id:del._id});
  d.available="false";
  d.oid = id;
  d.save();
  const d1 = await Delivery.findOne({_id:d._id});
  const o = await Order.findOne({_id:id});
  o.del = d;
  o.status = "Delivery is coming";
  o.save();
  const pharm=o.pharm;
  res.status(200).send({ message: 'The order created successfully',order:o,del:d1,pharm:pharm});
});
router.post('/PassOrderToDelivery', async (req, res) => {
  const {order,pharm}=req.body;
  console.log("==========================InPassOrderScreen===========================");
  console.log(pharm);
  console.log("======================================================================");

  const o = await Order.findOne({_id:order._id});
  o.status="Passed To Delivery: "+order.del.Fname;
  o.save();
  const p = await Pharm.findOne({_id:pharm._id});
  const name = p.pname;
  const orders = await Order.find({pname:name});
  res.status(200).send({ message: 'The order passed successfully',orders:orders,pharm:p});
});

router.post('/GetUpdatedDel', async (req, res) => {
  const {del}=req.body;
  const d = await Delivery.findOne({_id:del._id});
  const oid = d.oid;
  const o = await Order.findOne({_id:oid});
  const name = o.pname;
  const pharm = await Pharm.findOne({pname:name});
  res.status(200).send({ message: 'The order passed successfully',pharm:pharm,order:o,del:d});
});

router.post('/OrderPassedToCustomer', async (req, res) => {
  const {del,order}=req.body;
  const d = await Delivery.findOne({_id:del._id});
  d.available=true;
  const oid = d.oid;
  const o = await Order.findOne({_id:oid});
  o.status="Done";
  d.oid="";
  d.oids.push(o._id);
  d.save();
  o.save();
  const d1 = await Delivery.findOne({_id:del._id});
  res.status(200).send({ message: 'The order passed successfully',del:d1});
});
module.exports = router;
