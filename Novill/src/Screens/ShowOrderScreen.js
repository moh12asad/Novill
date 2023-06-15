import React,{useContext,useEffect, useState} from 'react';
import { Context as AuthContext} from './context/AuthContext';
import { SafeAreaView } from 'react-navigation';
import {View,Button,StyleSheet,Text,FlatList,TouchableOpacity,ImageBackground,Image} from 'react-native';
import Spacer from './Components/Spacer';
import GlobalContex from './context/CContex';
import Server from './api/Server';
import { Alert } from 'react-native';
import PharmListComp from './Components/PharmListComp';
import GreenButton from './Components/GreenButton';

const ShowOrderScreen=(props)=>{
    const {state,clearErrorMessage}=useContext(AuthContext);
    const order = props.navigation.state.params.order;
    const pharm = order.pharm;
    const address = order.address;
    const del = props.navigation.state.params.del;
    console.log("\ndel is:\n=============================\n",del,"\n=============================\n")

    const paymethod = order.payMethod;
    const productsToOrder=order.vproducts;
    const user = order.user;
    //console.log('Products is:' ,productsToOrder);
    /*
    let totalPrice=0;
    let totalAmount=0;
    for (let i = 0; i < productsToOrder.length; i++) {
      totalPrice += productsToOrder[i].price;
      totalAmount+=1;
    }*/
    //console.log(props.navigation.state.params.cart);
    return(
      
<ImageBackground source={require("../Screens/images/BackGround1.jpg")} style={{ width: '100%', height: '100%' }}>
  <SafeAreaView style={{ height: '80%' }}>
    <Text style={{ fontSize: 40, fontWeight: 'bold', marginVertical: 5, left: 10, top: 5 }}>Order for:{user.Lname}</Text>
    <Spacer />
    <Text style={styles.subtitle}>Pharm name:{pharm.pname},{pharm.location} </Text>
    <Text style={styles.subtitle}>address:{address.city} {address.street} {address.building} {address.floor} {address.apartnum}</Text>
    <Text style={styles.subtitle}> Order:</Text>
    <FlatList
      data={productsToOrder}
      style={{ height: '100%' }}
      renderItem={({ item }) => {
        return <PharmListComp style={styles.item} name={item.prodname} />;
      }}                                                                                     //onPress={()=>props.navigation.navigate('PharmStore',{pharm:item})}
    />
    <View>
      <Text style={styles.subtitle}>Pay method: {paymethod}</Text>
      </View>
    <GreenButton title="Take" onPress={()=>DelIsComing(order,del,props)}></GreenButton>
  </SafeAreaView>
</ImageBackground>

        );
}
const DelIsComing=async(order,del,props)=>{
    const response = await Server.post('/DelIsComing',{
        order,del
    });
    console.log("\nResponse.data.orders:\n=============================\n",response.data.order,"\n=============================\n");
    console.log("\nResponse.data.orders:\n=============================\n",response.data.del,"\n=============================\n");
    const order1=response.data.order;
    const pharm1=response.data.pharm;
    const del1=response.data.del;
    const pname = pharm1.pname;
    const location  = pharm1.location;
    Alert.alert('Go to Pharm');
    props.navigation.navigate('WaitingForPharmApprove',{order:order1,del:del1,pharm:pharm1});

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
color:"#474747",
marginLeft:45
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

export default ShowOrderScreen;
