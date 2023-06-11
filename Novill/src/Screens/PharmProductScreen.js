import React,{useContext,useEffect, useState} from 'react';
import { Context as AuthContext} from './context/AuthContext';
import { SafeAreaView } from 'react-navigation';
import { View, Button, StyleSheet, Text, FlatList, TouchableOpacity, ImageBackground,Image } from 'react-native';
import Spacer from './Components/Spacer';
import GreenButton from './Components/GreenButton';
import BlueButton from './Components/GreenButton';
import RedButton from './Components/GreenButton';
import GlobalContex from './context/CContex';
import Server from './api/Server';
import PharmListComp from './Components/PharmListComp';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import ProductsDeletButton from './Components/ProductsDeletButton';
const PharmProductScreen=(props)=>{
    const pharm=props.navigation.state.params.pharm1;
    const prod=props.navigation.state.params.item;
    const {deleteproduct} = useContext(AuthContext);
    console.log(pharm);
    console.log(prod);
    return(
    <View style={styles.container}>
  <SafeAreaView style={{ height: '80%' }}>
    <Spacer />
    <View>
    <Image source={{ uri: prod.image }} style={styles.img} />
 <Text style={styles.title}>Name: {prod.prodname}</Text>
 <Text style={styles.title}>price: {prod.price}</Text>
 <Text style={styles.title}>quantity: {prod.amount}</Text>
 <Text style={styles.title}>desc: {prod.desc}</Text>
 <ProductsDeletButton title="Edit" onPress={()=>console.log('HRllooo')}></ProductsDeletButton>
  <ProductsDeletButton title="Update quantity" onPress={()=>console.log('Pressed')}></ProductsDeletButton>
  <ProductsDeletButton title="Delete" onPress={()=>deleteproduct({prod,pharm})}></ProductsDeletButton>
    </View>
        <Spacer/>
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
fontSize:20,
color:"#474747",
marginLeft:45

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
height:300,
width:300,

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

export default PharmProductScreen;