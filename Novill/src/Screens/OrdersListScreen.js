import React,{useContext,useEffect, useState} from 'react';
import { Context as AuthContext} from './context/AuthContext';
import { SafeAreaView } from 'react-navigation';
import {View,Button,StyleSheet,Text,FlatList,TouchableOpacity,ImageBackground,Image} from 'react-native';
import Spacer from './Components/Spacer';
import GlobalContex from './context/CContex';
import Server from './api/Server';
import OrderListComp from './Components/PharmListComp';



const OrdersListScreen=(props)=>{
    const pharm = props.navigation.state.params;
    const order=props.navigation.state.params;
    const orders = order.orders;
    console.log('Hahahahhon',order.orders);
    console.log('Orders list screen',pharm);
    console.log('Orders is:',orders);
    const [loaded,updateloaded] =useState(false)
    return(
        <ImageBackground source={require("../Screens/images/im.jpg")} style={{ width: '100%', height: '100%' }}>
          <SafeAreaView style={{ height: '80%' }}>
            <Text style={{ fontSize: 40, fontWeight: 'bold', marginVertical: 5, left: 10, top: 5 }}>Waiting Orders</Text>
            <Spacer />
            <FlatList
              data={orders}
              style={{ height: '100%' }}
              renderItem={({ item }) => {
                return <OrderListComp style={styles.item} name={item.status} location={item.address.city} onPress={()=>props.navigation.navigate('ViewOrder',{order:item,pharm:pharm})}/>;
              }}
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
        

export default OrdersListScreen;