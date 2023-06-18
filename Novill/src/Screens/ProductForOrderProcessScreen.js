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
import OrderProcessButton from './Components/OrderProcessButton'
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
  <View style={{backgroundColor:'#fff',height:350,width:460,
                    borderBottomRightRadius:120,bottom:80,
                    borderBottomLeftRadius:120
                     }}>
    <Image source={{ uri: prod.image }} style={styles.img} />
    </View>
     <View style={{bottom:50,height:260,width:430,}}>
 <Text style={styles.title}>{prod.prodname}</Text>
<Text style={styles.subtitle}>Price: {prod.price + "$"}</Text>
<Text style={styles.subtitle}>Amount: {prod.amount}</Text>
        <Text style={styles.subtitle}>Description: {prod.desc}</Text>
        {prod.prescription&&
          <OrderProcessButton title="Show prescription" onPress={()=>ShowPrescription(prod,pharm,order,props)}></OrderProcessButton>
        }
        
 
   
     
        <Spacer/>
        <OrderProcessButton title="Add to order" onPress={()=>AddTovproducts(prod,pharm,order)}></OrderProcessButton>
       </View>
  </SafeAreaView>
      </View>
  );  
}

const ShowPrescription=async (prod,pharm,order,props)=>{
  const name = prod.prodname;
  const images = order.images;
  const imageUrl = images[name];
  console.log(imageUrl);

  props.navigation.navigate('ShowPrescription',{prod:prod,image:imageUrl});
}

const styles=StyleSheet.create({


  container: {
flex: 1,
backgroundColor:'#F3EAC7',
justifyContent:'center',
alignItems:'center',
marginTop:-50
},
title:{
fontSize:32,
marginLeft:45,
fontWeight:'bold',
bottom:10
},
subtitle:{
 fontSize:20,
color:"#474747",
marginLeft:45,


},
img:{
alignSelf:"center",
borderTopRightRadius:80,
borderBottomLeftRadius:80,
height:310,
width:320,bottom:-20

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
//62-        <RedButton title="Don't" onPress={()=>AddToxproducts(prod,pharm,order)}></RedButton>