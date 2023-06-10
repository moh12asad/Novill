import React,{useContext,useEffect, useState} from 'react';
import { Context as AuthContext} from './context/AuthContext';
import { SafeAreaView } from 'react-navigation';
import {View,Button,StyleSheet,Text,FlatList,TouchableOpacity,ImageBackground,Image} from 'react-native';
import Spacer from './Components/Spacer';
import GlobalContex from './context/CContex';
import Server from './api/Server';
import PharmListComp from './Components/PharmListComp';
import GreenButton from './Components/GreenButton';
import ProductListComp from './Components/ProductListComp';
import NewButton from './Components/NewButton';
const CartScreen=(props)=>{

    //const cart = props.navigation.state.params.cart;
    const user = props.navigation.state.params.user;
    //console.log("===========user in get user is:==========\n",user);
    /*let {user1}=getUser(user);
    console.log("user1 in cart screen is:===========================\n",user1,":===========================\n");*/
    //user=user1;
    //console.log("=====================stamstam========",user1);
    /*const cart1 = user.cart;
    const cart = getCart(cart1);
    console.log("=====================stamstam========",cart);*/
    //getUser(user);
    console.log("=====================stamstam========",user);
    const cart = user.cart;
    const pharm = getPharmName(user,cart);
    //const pharm=props.navigation.state.params.pharm;
    console.log('-----------Cart screen-----------\n the cart is: ',cart);
    console.log('---------\nThe cart belongs to -----\n',user);

    const productsToOrder=cart.products;
    console.log('Products is:' ,productsToOrder);
    let totalPrice=0;
    let totalAmount=0;
    for (let i = 0; i < productsToOrder.length; i++) {
      totalPrice += productsToOrder[i].price;
      totalAmount+=1;
    }
    //console.log(props.navigation.state.params.cart);
    return(
      
<ImageBackground source={require("../Screens/images/img.jpeg")} style={{ width: '100%', height: '100%' }}>
  <SafeAreaView style={{ height: '80%' }}>
    <Text style={{ fontSize: 40, fontWeight: 'bold', marginVertical: 5, left: 10, top: 5 }}>{user.Fname} {user.Lname}</Text>
    <Text style={{ fontSize: 20, fontWeight: 'bold', marginVertical: 5, left: 10, top: 5 }}>My new order</Text>
    <Spacer />
   
    <FlatList
      data={productsToOrder}
      style={{ top:25}}
      
      renderItem={({ item }) => {
        return <ProductListComp name={item.prodname} price={item.price+"$"} image={item.image} onPress={()=>console.log('Product has been clicked')}/>;
      }}                                                                                     //onPress={()=>props.navigation.navigate('PharmStore',{pharm:item})}
    />
    <View style={{ top:30 }}>
      <Text style={styles.titleout}>Total products order: {totalAmount}</Text>
      <Text style={styles.titleout}>The total is: {totalPrice}</Text>
      </View>
      <View style={{ top:90 }}>
    <NewButton title="Order" onPress={()=>props.navigation.navigate('Dest',{cart:cart,user:user,pharm:pharm})}></NewButton>
  </View>
  </SafeAreaView>
</ImageBackground>

        );
}

const getUser=async(user)=>{
  //console.log("===========user in get user is in getuser function in cart screen:==========\n",user);
  const response = await Server.post('/GetUser', {
    user
  });
  //console.log("Response.data.user in cart screen is:===========================\n",response.data.user,":===========================\n");
  user=response.data.user;
  console.log("user in cart screen is:===========================\n",user,":===========================\n");
  //return {user};
  //let u=response.data.user;
  /*console.log("==================user in get user function is2:=============\n",u);
  return u;*/
}
/*const getCart=async(cart1)=>{
  console.log("===========user in get user is in getuser function in cart screen:==========\n",user);
  const response = await Server.post('/GetCart', {
    cart1
  });
  console.log(response.data.cart);
  let c=response.data.cart;
  //console.log("==================user in get user function is2:=============\n",u);
  return c;
}*/
const getPharmName=async(user,cart)=>{
  const response = await Server.post('/GetPharm', {
    user,cart
  });
  let p = response.data.pharm;
  return p;
}

const styles=StyleSheet.create({


    container: {
  flex: 1,
  backgroundColor: '#fff',
  paddingTop: 10,
  paddingHorizontal: 10,

},
titleout:{
fontSize:20,
color:"#474747",
marginLeft:20,
top:40

},
item: {
  marginTop: 20,
  padding: 20,
  backgroundColor: '#fff',
  fontSize: 20,
},
cartContainer: {
  position: 'absolute',
  bottom: 20,
  right: 20,
},
cartImage: {
  width: 50,
  height: 50,
  borderRadius: 25,
},
});

export default CartScreen;
