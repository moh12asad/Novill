import React from 'react';
import {View,Button,StyleSheet,Text,ImageBackground} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Spacer from './Components/Spacer';



const PayMethodScreen=(props)=>{

    const user = props.navigation.state.params.user;
    const cart = user.cart;
    console.log("===============cart in paymethodscreen\n",cart ,"\n========\n");
    const address= props.navigation.state.params.address;
    const pharm= props.navigation.state.params.pharm;
    return(
        <ImageBackground source={require("../Screens/images/background.jpg")} style={{ width:'100%', height:'100%' }} >
        <View style={{alignItems:"center",marginTop:250}}> 
            <TouchableOpacity
             style={{
        backgroundColor:'#AACB63',
         borderRadius:100 ,
        alignItems: 'center',
        width:280,
        paddingVertical:15,
    
        alignSelf:'flex-end',
       
    }}
            
             onPress={()=>props.navigation.navigate('PayCash',{cart:cart,address:address,user:user,pharm})}>
                    <Text style={{ color:'#000',fontSize:12,
   fontWeight:"bold"}}>Cash</Text>
            </TouchableOpacity>
            <Spacer/>
            <TouchableOpacity
            style={{
        backgroundColor:'#AACB63',
         borderRadius:100 ,
        alignItems: 'center',
        width:280,
        paddingVertical:15,
        marginVertical:10,
        alignSelf:'flex-end',
       
    }}
      
             onPress={()=>props.navigation.navigate('PayWithCredit',{cart:cart,address:address,user:user,pharm})}>
                <Text
                style={{ color:'#000',fontSize:12,
   fontWeight:"bold"}}
                >Credit card</Text>
            </TouchableOpacity>
            <Spacer/>
        </View>
        </ImageBackground>
    );
}

const styles=StyleSheet.create({});

export default PayMethodScreen;


