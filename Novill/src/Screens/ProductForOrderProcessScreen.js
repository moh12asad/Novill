import React,{useContext,useEffect, useState} from 'react';
import { Context as AuthContext} from './context/AuthContext';
import { SafeAreaView } from 'react-navigation';
import { View, Button, StyleSheet, Text, FlatList, TouchableOpacity, ImageBackground,Image } from 'react-native';
import Spacer from './Components/Spacer';
import GreenButton from './Components/GreenButton';
import RedButton from './Components/RedButton';
import GlobalContex from './context/CContex';
import Server from './api/Server';
import PharmListComp from './Components/PharmListComp';
import FontAwesome from "@expo/vector-icons/FontAwesome";

const ProductForOrderProcessScreen=(props)=>{
    const pharm=props.navigation.state.params.pharm1;
    const prod=props.navigation.state.params.prod;
    const order=props.navigation.state.params.order;
    console.log(pharm);
    console.log(prod);
    const AddTovproducts=async (prod,pharm,order)=>{
      try {
        const response = await Server.post('/AddToVProducts', {
          pharm,prod,order
        });
        console.log(response.data.order);
        props.navigation.navigate('OrderProcess',{order:order,pharm:pharm})
      } catch (err) {
        console.log('error in Updating');
        console.log(err);
      }
    }
    const AddToxproducts= async(prod,pharm,order)=>{
      try {
        const response = await Server.post('/AddToXProducts', {
          pharm,prod,order
        });
        console.log(response.data.order);
        props.navigation.navigate('OrderProcess',{order:order,pharm:pharm})
      } catch (err) {
        console.log('error in Updating');
        console.log(err);
      }
      
    }
    return(
    <View style={styles.container}>
  <SafeAreaView style={{ height: '80%' }}>
    <Spacer />
    <View>
    <Image source={{ uri: prod.image }} style={styles.img} />
 <Text style={styles.title}>{prod.prodname}</Text>
<Text style={styles.subtitle}>Price: {prod.price + "$"}</Text>
<Text style={styles.subtitle}>Amount: {prod.amount}</Text>
        <Text style={styles.subtitle}>Description: {prod.desc}</Text>
    </View>
   
        
        <Spacer/>
        <GreenButton title="Add to order" onPress={()=>AddTovproducts(prod,pharm,order)}></GreenButton>
        <RedButton title="Don't" onPress={()=>AddToxproducts(prod,pharm,order)}></RedButton>
  </SafeAreaView>
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

export default ProductForOrderProcessScreen;