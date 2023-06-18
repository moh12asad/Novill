import React,{useContext,useEffect, useState} from 'react';
import { Context as AuthContext} from './context/AuthContext';
import { SafeAreaView } from 'react-navigation';
import {View,Button,StyleSheet,Text,FlatList,TouchableOpacity,ImageBackground,Image} from 'react-native';
import Spacer from './Components/Spacer';
import GlobalContex from './context/CContex';
import Server from './api/Server';
import PharmListComp from './Components/PharmListComp';
import GreenButton from './Components/GreenButton';
import RedButton from './Components/RedButton';
import PassDeliveryButton from './Components/PassDeliveryButton'
import { Alert } from 'react-native';

const WaitingForPharmApproveScreen=(props)=>{
    const order = props.navigation.state.params.order;
    const pharm = props.navigation.state.params.pharm;
    const address = order.address;
    const del = props.navigation.state.params.del;
    const paymethod = order.payMethod;
    const user = order.user;
    let newstatus="Order is ready";
    console.log("Order.Status is:*********************\n",order.status);
    return(
      /*
<ImageBackground source={require("../Screens/images/BackGround1.jpg")} style={{ width: '100%', height: '100%' }}>
  <SafeAreaView style={{ height: '80%' }}>
    <Text style={{ fontSize: 40, fontWeight: 'bold', marginVertical: 5, left: 10, top: 5 }}>Order for:{user.Lname}</Text>
    <Spacer />
    <Text style={styles.subtitle}>Ordered from:{pharm.pname},{pharm.location} </Text>
    <Text style={styles.subtitle}>Order to address{address.city} {address.street} {address.building} {address.floor} {address.apartnum}</Text>
    <Text style={styles.subtitle}>Order Status: {newstatus}</Text>
    <View>
      <Text style={styles.subtitle}>Pay method: {paymethod}</Text>
      </View>
    <GreenButton title="Pass to customer" onPress={()=>PassToCustomer(del,order,props)}></GreenButton>
  </SafeAreaView>
</ImageBackground>*/
<ImageBackground source={require("../Screens/images/BackGround1.jpg")} style={{ width: '100%', height: '100%' }}>
  <SafeAreaView style={{ height: '80%' }}>
    <Text style={{ fontSize: 30, fontWeight: 'bold', marginVertical: 5, left: 10, top: 5 }}>Order for: {user.Fname} {user.Lname}</Text>
    <Spacer />
    <View style={{bottom:-100}}>
    <Text style={styles.subtitle}>Ordered from pharm: {pharm.pname}, {pharm.location}</Text>
    <Text style={styles.subtitle}>Order to address: {address.city} {address.street} {address.building} {address.floor} {address.apartnum}</Text>
    <Text style={styles.subtitle}>Order Status: {newstatus}</Text>
   
      <Text style={styles.subtitle}>Pay method: {paymethod}</Text>
     </View>
   
    <View style={{bottom:-100}}>
  <PassDeliveryButton title="Waiting for pharm approval" />
  </View>
  </SafeAreaView>
</ImageBackground>

        );
}
const PassToCustomer=async(del,order,props)=>{
    const response = await Server.post('/OrderPassedToCustomer',{
        del,order
    });
    const del1=response.data.del;
    Alert.alert('Passed successfully');
    props.navigation.navigate('DeliveryAccount',{del:del1});

}

const styles=StyleSheet.create({


    container: {
  flex: 1,
  backgroundColor: '#fff',
  paddingTop: 10,
  paddingHorizontal: 10,

},
subtitle:{
fontSize:20,
color:"#000",
marginLeft:20
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

export default WaitingForPharmApproveScreen;
