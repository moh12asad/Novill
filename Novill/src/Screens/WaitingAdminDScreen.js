import React,{useContext} from 'react';
import { Context as AuthContext} from './context/AuthContext';
import { SafeAreaView } from 'react-navigation';
import {View,Button,StyleSheet,Text,ImageBackground,TouchableOpacity} from 'react-native';
import Spacer from './Components/Spacer';


const WaitingAdminDScreen=()=>{
    const {signout} = useContext(AuthContext);
    console.log("Hello from the other side");
    return(
            <ImageBackground source={require("../Screens/images/imag.jpg")} style={{ width:'100%', height:'100%' }}>        

    <View> 
        <Text style={{fontSize: 48,top:100}}>Thank you!</Text>
        <Text style={{top:120}}>We got your request, we wil check it and contact you as soon as possible.</Text>
             <TouchableOpacity style={{ backgroundColor:'#d1f0c7',
        padding:30,
        marginTop:20,
        borderRadius:110,
          alignItems: 'center',
        paddingVertical:10,
        marginVertical:10,
        width:'40%',
        left:200,
        marginTop:360,
        borderWidth:0
        
        }} title="Sign out" onPress={signout}>
        <Text style={{color:'black',fontWeight:'bold' ,fontSize:16}}>Signout</Text> 
 </TouchableOpacity>

    </View>
    </ImageBackground>
    );
}

const styles=StyleSheet.create({});

export default WaitingAdminDScreen;