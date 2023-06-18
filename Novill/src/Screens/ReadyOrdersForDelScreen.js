import React,{useContext,useEffect, useState} from 'react';
import { Context as AuthContext} from './context/AuthContext';
import { SafeAreaView } from 'react-navigation';
import {View,Button,StyleSheet,Text,FlatList,TouchableOpacity,ImageBackground,Image} from 'react-native';
import Spacer from './Components/Spacer';
import GlobalContex from './context/CContex';
import Server from './api/Server';
import OrderListComponent from './Components/OrderListComponent';
import PharmListComp from './Components/PharmListComp';


const ReadyOrdersForDelScreen=(props)=>{
    //const orders=props.navigation.state.params;
    //const orders = order.orders;
    const orders = props.navigation.state.params.orders;
    const del = props.navigation.state.params.del;
    const [loaded,updateloaded] =useState(false)
    return(
        <ImageBackground source={require("../Screens/images/BackGround1.jpg")} style={{ width: '100%', height: '100%' }}>
          <SafeAreaView style={{ height: '80%' }}>
            <Text style={{ fontSize: 40, fontWeight: 'bold', marginVertical: 5, left: 10, top: 5 }}>Ready Orders</Text>
            <Spacer />
            <FlatList
              data={orders}
          
              style={{ height: '100%' }}
              renderItem={({ item }) => {
                return <PharmListComp style={styles.item} name={item.status} location={item.city} image={item.pimage} onPress={()=>props.navigation.navigate('ShowOrder',{order:item,del:del})}/>;
              }}
            />
          </SafeAreaView>
        </ImageBackground>
        
                );
        }
const ShowOrderSummary=async(item,props)=>{
    const response = await Server.post('GetOrderSummary', {
        item
      });
      props.navigation.navigate('')

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
        

export default ReadyOrdersForDelScreen;