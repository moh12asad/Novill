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
import BlueButton from './Components/BlueButton';
import UPharmListComp from './Components/UPharmListComp';
const OrderProcessScreen=(props)=>{
    let newStatus;
    const{productinorder}=useContext(AuthContext);
    const order = props.navigation.state.params.order;
    const pharm=order.pharm;
    let Amount=0;
    let Price =0;
    //console.log(order);
    let orderdproducts = order.products;
    Amount=orderdproducts.length;
    console.log('The products is:',orderdproducts)
    //const pharm=props.navigation.state.params.pharm;
    console.log('OrderProcessScreen ',order);
    let ps=order.vproducts;
    let vnames=[];
    ps.forEach(element => {
      vnames.push(element.prodname);
    });
    console.log(vnames);
    
    //console.log('the pharm is',pharm);
    /*let x=order.xproducts;
    let v =order.vproducts;
    let vprods=[];
    let xprods=[];
    orderdproducts.array.forEach(prod => {
      if (v.includes(prod))
      {
        vprods.push(prod);
      }
      if(x.includes(prod.prodname))
      {
        xprods.push(prod.prodname);
      }
    });*/
    return(
        <ImageBackground source={require("../Screens/images/img.jpeg")} style={{ width: '100%', height: '100%' }}>
  <SafeAreaView style={{ height: '80%' }}>
    <Text style={{ fontSize: 40, fontWeight: 'bold', marginVertical: 5, left: 10, top: 5 }}>{order.user.Fname} {order.user.Lname}</Text>
    <Spacer />
    <FlatList
  data={orderdproducts}
  numColumns={2}
  style={{ height: '100%' }}
  renderItem={({ item }) => {
    let statusIndicator = ''; // Initialize the status indicator as an empty string

    if (vnames.includes(item.prodname)) {
      statusIndicator = 'V'; // Add 'V' indicator if the product is in vproducts
    } else if (order.xproducts.includes(item.prodname)) {
      statusIndicator = 'X'; // Add 'X' indicator if the product is in xproducts
    }
    else{
      statusIndicator='';
    }

    return (
      <PharmListComp
        style={styles.item}
        name={`${item.prodname} ${statusIndicator}`} // Include the status indicator in the product name
        location={item.price}
        onPress={() =>
          props.navigation.navigate('ProductForOrderProcess', {
            prod: item,
            pharm: pharm,
            order: order,
          })
        }
      />
    );
  }}
/>
    
          <View>
        <Text style={styles.text}>products: {Amount}</Text>
        <Text style={styles.text}>Address: {order.address.city} {order.address.street}, {order.address.building}</Text>
        <Text style={styles.text}>The total is: {order.prise}</Text>
          <BlueButton title="Ready, notify the delivery" onPress={() => console.log('WaitingForDelivery')} />
          <RedButton title="Reject" onPress={() => console.log('Rejected')} />
      </View>
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
text:{
 fontSize:20,
color:"#474747",
marginLeft:45
},
item: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginRight: 10,
  },
  selectedButton: {
    backgroundColor: 'green',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  // your other styles here...
});

export default OrderProcessScreen;

/*
<FlatList
      data={orderdproducts}
      numColumns={2}
      style={{ height: '100%' }}
      renderItem={({ item }) => {
        return <PharmListComp style={styles.item} name={item.prodname} location={item.price} onPress={()=>productinorder({item,order})}/>;
      }}                                                                                     //onPress={()=>props.navigation.navigate('PharmStore',{pharm:item})}
    />

    <FlatList
      data={orderdproducts}
      numColumns={2}
      style={{ height: '100%' }}
      renderItem={({ item }) => {
        return <PharmListComp style={styles.item} name={item.prodname} location={item.price} onPress={()=>props.navigation.navigate('ProductForOrderProcess',{prod:item,pharm:pharm,order:order})}/>;
      }}                                                                                     
    />
*/ 