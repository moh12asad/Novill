import React,{useContext,useEffect, useState} from 'react';
import { Context as AuthContext} from './context/AuthContext';
import { SafeAreaView } from 'react-navigation';
import {View,Button,StyleSheet,Text,FlatList,TouchableOpacity,ImageBackground,Image} from 'react-native';
import Spacer from './Components/Spacer';
import GlobalContex from './context/CContex';
import Server from './api/Server';
import PharmListComp from './Components/PharmListComp';
import GreenButton from './Components/GreenButton';

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
      
<ImageBackground source={require("../Screens/images/im.jpg")} style={{ width: '100%', height: '100%' }}>
  <SafeAreaView style={{ height: '80%' }}>
    <Text style={{ fontSize: 40, fontWeight: 'bold', marginVertical: 5, left: 10, top: 5 }}>{user.Lname}</Text>
    <Spacer />
    <Text style={{ fontSize: 25, marginVertical: 5, left: 10, top: 5 }}>{user.Fname}</Text>
    <FlatList
      data={productsToOrder}
      style={{ height: '100%' }}
      renderItem={({ item }) => {
        return <PharmListComp style={styles.item} name={item.prodname} location={item.price} onPress={()=>console.log('Product has been clicked')}/>;
      }}                                                                                     //onPress={()=>props.navigation.navigate('PharmStore',{pharm:item})}
    />
    <View>
      <Text>Total products order: {totalAmount}</Text>
      <Text>The total is: {totalPrice}</Text>
      </View>
    <GreenButton title="Order" onPress={()=>props.navigation.navigate('Dest',{cart:cart,user:user,pharm:pharm})}></GreenButton>
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

export default CartScreen;
