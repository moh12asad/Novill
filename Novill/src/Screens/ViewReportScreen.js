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

const ViewReportScreen=(props)=>{
    const r = props.navigation.state.params.item;
    console.log(r);
    let Fname,Lname,email,phone;
    let utype;
    if(r.user!=null)
    {
        utype='user';
        Fname=r.user.Fname;
        Lname=r.user.Lname;
        email=r.user.email;
        phone=r.user.phone;
    }
    if(r.pharm!=null)
    {
        utype='pharm';
        Fname=r.pharm.Fname;
        Lname=r.pharm.Lname;
        email=r.pharm.email;
        phone=r.pharm.phone;
    }
    if(r.del!=null)
    {
        utype='del';
        Fname=r.del.Fname;
        Lname=r.del.Lname;
        email=r.del.email;
        phone=r.del.phone;
    }
    return(
    <View style={styles.container}>
  <SafeAreaView style={{ height: '80%' }}>
    <Spacer />
    <View>
 <Text style={styles.title}>{r.title}</Text>
<Text style={styles.subtitle}>Rerporter: {Fname} {Lname}, {email}, {phone}</Text>
        <Text style={styles.subtitle}>Report: {r.text} </Text>
    </View>
   
        
        <Spacer/>
  </SafeAreaView>
  <View style={styles.cartContainer}>
        <TouchableOpacity onPress={() => console.log('cart icon pressed')}>
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

export default ViewReportScreen;