import React from 'react';
import {View,Button,StyleSheet,Text,ImageBackground} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Spacer from './Components/Spacer';



const PayMethodScreen=(props)=>{
    const cart= props.navigation.state.params.cart;
    const address= props.navigation.state.params.address;
    return(
        <ImageBackground source={require("../Screens/images/background.jpg")} style={{ width:'100%', height:'100%' }} >
        <View style={{alignItems:"center",marginTop:250}}> 
            <TouchableOpacity
             style={{
        backgroundColor:'#86c260',
         borderRadius:100 ,
        alignItems: 'center',
        width:280,
        paddingVertical:15,
    
        alignSelf:'flex-end',
       
    }}
            
             onPress={()=>props.navigation.navigate('PayCash',{cart:cart,address:address})}>
                    <Text style={{ color:'#000',fontSize:12,
   fontWeight:"bold"}}>Cash</Text>
            </TouchableOpacity>
            <Spacer/>
            <TouchableOpacity
            style={{
        backgroundColor:'#86c260',
         borderRadius:100 ,
        alignItems: 'center',
        width:280,
        paddingVertical:15,
        marginVertical:10,
        alignSelf:'flex-end',
       
    }}
      
             onPress={()=>props.navigation.navigate('PayWithCredit',{cart:cart,address:address})}>
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


