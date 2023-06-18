import React,{useContext,useEffect, useState} from 'react';
import { Context as AuthContext} from './context/AuthContext';
import { SafeAreaView } from 'react-navigation';
import {View,Button,StyleSheet,Text,FlatList,TouchableOpacity,ImageBackground,Image} from 'react-native';
import Spacer from './Components/Spacer';
import ProductListComp from './Components/ProductListComp';
import Server from './api/Server';
import PharmListComp from './Components/PharmListComp';
import GreenButton from './Components/GreenButton';
import RedButton from './Components/RedButton';
import { Alert } from 'react-native';

const OrderProcessForUserScreen=(props)=>{
    const order = props.navigation.state.params.order;
    const paymethod = order.payMethod;
    const pharm = order.pharm;
    const user = props.navigation.state.params.user;
    const address=order.address;
    let filteredProducts=order.products;
    console.log("Order.Status is:*********************\n",order.status);
    return(
<ImageBackground source={require("../Screens/images/BackGround1.jpg")} style={{ width: '100%', height: '100%' }}>
  <SafeAreaView style={{ height: '80%' }}>
    <Text style={{ fontSize: 30, fontWeight: 'bold', marginVertical: 5, left: 10, top: 5 }}>Order for: {user.Fname} {user.Lname}</Text>
    <Spacer />
    <Text style={styles.subtitle}>Ordered from: {pharm.pname}, {pharm.location}</Text>
    <Text style={styles.subtitle}>Order to address: {address.city} {address.street} {address.building} {address.floor} {address.apartnum}</Text>
    <Text style={styles.subtitle}>Order Status: {order.status}</Text>
    <View>
      <Text style={styles.subtitle}>Pay method: {paymethod}</Text>
    </View>
    <FlatList
      data={filteredProducts}
       style={{ top:25,left:15}}
      renderItem={({ item }) => {
        return <ProductListComp name={item.prodname} price={item.price+"$"} image={item.pimage} />;
                

      }}                                                                                     //onPress={()=>props.navigation.navigate('PharmStore',{pharm:item})}
    />
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
subtitle:{
fontSize:20,
color:"#474747",
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

export default OrderProcessForUserScreen;
