import React,{useContext,useEffect, useState} from 'react';
import { Context as AuthContext} from './context/AuthContext';
import { SafeAreaView } from 'react-navigation';
import { View, Button, StyleSheet, Text, FlatList, TouchableOpacity, ImageBackground,Image } from 'react-native';
import Spacer from './Components/Spacer';
import GreenButton from './Components/GreenButton';
import GlobalContex from './context/CContex';
import Server from './api/Server';
import PharmListComp from './Components/PharmListComp';
import FontAwesome from "@expo/vector-icons/FontAwesome";

const ProductScreen=(props)=>{
  const {AddToCart} = useContext(AuthContext);
    const pharm=props.navigation.state.params.pharm1;
    const prod=props.navigation.state.params.prod;
    const cart = props.navigation.state.params.cart;
    console.log('Cart is:',cart);
    console.log(pharm);
    console.log(prod);
    return(
    <View style={styles.container}>
  <SafeAreaView style={{ height: '80%' }}>
    <Spacer />
    <View>
<Image source={require("./images/meformin-modified-release-tablets-661655727294.jpg")} style={styles.img}></Image>
 <Text style={styles.title}>{prod.prodname}</Text>
<Text style={styles.subtitle}>Price: {prod.price + "$"}</Text>
        <Text style={styles.subtitle}>Description: {prod.desc}</Text>
    </View>
   
        
        <Spacer/>
        <GreenButton title="Add to cart" onPress={()=>AddToCart({cart,prod,pharm})}></GreenButton>
  </SafeAreaView>
  <View style={styles.cartContainer}>
        <TouchableOpacity onPress={() => console.log('cart icon pressed')}>
          <Image source={require('../Screens/images/cart.jpeg')} style={styles.cartImage} />
        </TouchableOpacity>
      </View>
      </View>
  );
}

const styles=StyleSheet.create({


  container: {
flex: 1,
backgroundColor: '#fff',
justifyContent:'center',
alignItems:'center',
marginTop:-50
},
title:{
fontSize:32,
marginTop:60,
marginLeft:45,
fontWeight:'bold',
marginHorizontal:10
},
subtitle:{
fontSize:20,
color:"#474747",
marginLeft:45


},
img:{
alignSelf:"center",
borderTopRightRadius:80,
borderBottomLeftRadius:80,
height:350,
width:350,

},
item: {
marginTop: 20,
padding: 10,
backgroundColor: '#fff',
fontSize: 20,
},
cartContainer: {
  position: 'absolute',
  bottom: 60,
  right: 20,
},
cartImage: {
  width: 50,
  height: 50,
  borderRadius: 25,
},
Button:{
        padding:50,
        marginTop:30,
        borderRadius:100 ,
          alignItems: 'center',
        paddingVertical:10,
        marginVertical:5
}
});

export default ProductScreen;