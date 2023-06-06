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

const CartScreen=(props)=>{

    const cart = props.navigation.state.params.cart;
    const user = props.navigation.state.params.user;
    const pharm=props.navigation.state.params.pharm;
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
    <GreenButton title="Order" onPress={()=>props.navigation.navigate('Dest',{cart:cart,user:user,pharm:pharm})}></GreenButton>
  </View>
  </SafeAreaView>
</ImageBackground>

        );
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
