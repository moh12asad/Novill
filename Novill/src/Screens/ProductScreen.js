import React,{useContext,useEffect, useState} from 'react';
import { Context as AuthContext} from './context/AuthContext';
import { SafeAreaView } from 'react-navigation';
import { View, Button, StyleSheet, Text, FlatList, TouchableOpacity, ImageBackground,Image } from 'react-native';
import Spacer from './Components/Spacer';
import GreenButton from './Components/GreenButton';
import GlobalContex from './context/CContex';
import Server from './api/Server';
import PharmListComp from './Components/PharmListComp';


const ProductScreen=(props)=>{
  const {AddToCart} = useContext(AuthContext);
    const pharm=props.navigation.state.params.pharm1;
    const prod=props.navigation.state.params.prod;
    const cart = props.navigation.state.params.cart;
    console.log('Cart is:',cart);
    console.log(pharm);
    console.log(prod);
    return(
      <ImageBackground source={require("../Screens/images/im.jpg")} style={{ width: '100%', height: '100%' }}>
  <SafeAreaView style={{ height: '80%' }}>
    <Text style={{ fontSize: 40, fontWeight: 'bold', marginVertical: 5, left: 10, top: 5 }}>Choosen product</Text>
    <Spacer />
    <Text style={{ fontWeight: 'bold' }}>Product Name: {prod.prodname}</Text>
        <Text>Price: {prod.price}</Text>
        <Text>Amount: {prod.amount}</Text>
        <Spacer/>
        <GreenButton title="Add to cart" onPress={()=>AddToCart({cart,prod,pharm})}></GreenButton>
  </SafeAreaView>
  <View style={styles.cartContainer}>
        <TouchableOpacity onPress={() => console.log('cart icon pressed')}>
          <Image source={require('../Screens/images/cart.jpeg')} style={styles.cartImage} />
        </TouchableOpacity>
      </View>
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
item: {
marginTop: 20,
padding: 10,
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

export default ProductScreen;