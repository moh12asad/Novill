import React, { useState,useContext } from 'react';
import {View,StyleSheet,TouchableOpacity,ImageBackground,TextInput} from 'react-native';
import {Text,Input, Button} from 'react-native-elements';
import Spacer from './Components/Spacer'
import { Context as AuthContext} from './context/AuthContext';
import { NavigationEvents } from 'react-navigation';


const SigninDeliveryScreen=({navigation})=>{
    const {state,signinDelivery,clearErrorMessage}=useContext(AuthContext);
    const [email,setEmail]=useState('');
    const [password,setPassword] = useState('');
    return (
            <ImageBackground source={require("../Screens/images/a1.jpg")} style={{ width:'100%', height:'100%' }} >

        <View style={styles.container}>
            <NavigationEvents onWillFocus={clearErrorMessage}/>
        <Spacer/>
        
        <Spacer/>
           
        <View style={{backgroundColor:'#fff',height:350,width:460,
                     borderTopLeftRadius:130,
                     paddingTop:75,
                     alignItems:'center',
                     right:30
                     }}>
              


                    
        <Text style={{ 
            color:'#629630' ,
             fontSize: 40,
              fontWeight:'bold'
              ,marginVertical:5,
              
             }}>Welcome Back</Text>
        <Text style={{
            color: "gray",
            fontSize: 19,
            fontWeight:"bold",
            marginVertical:5,
            paddingVertical:10,
}}> Login to your account</Text>
        <TextInput
            placeholder='example@email.com' 
            label="Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            autoCorrect={false}
            style={{ 
               borderRadius:100,
               color:'black',
               paddingHorizontal:70,
               width:'65%',
               backgroundColor:'rgb(220,220,220)',
              marginBottom:20
               
            }}
        />
        <TextInput
        secureTextEntry={true}
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        style={{ 
               borderRadius:100,
               color:'black',
               paddingHorizontal:70,
               width:'65%',
               backgroundColor:'rgb(220,220,220)',
              marginBottom:20
               
            }}
        />
        {state.errorMessage ?<Text style= {styles.errormsg}>{state.errorMessage}</Text>: null}
        <TouchableOpacity style={{
        backgroundColor: '#fff',

    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 170,
    borderWidth: 1,
     padding:40,

    width:'50%',

    borderColor: 'green',
    alignItems:'center',
     borderWidth: 2
            }} 
            title="Sign In" onPress={()=>signinDelivery({email,password})} >
            <Text style={{color:'black',fontWeight:'bold' ,fontSize:16}}>Login</Text> 
  </TouchableOpacity>
        <Spacer/>
        <TouchableOpacity onPress={()=>navigation.navigate('SignupDelivery')}>
                <Text style={{
            color: "gray",
            fontSize: 15,
            fontWeight:"bold",
            marginVertical:5,
            paddingVertical:10,
}}>Dont have an account? Sign Up here</Text>
        </TouchableOpacity>
        </View>
        </View>
                </ImageBackground>

    )
};

SigninDeliveryScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
  };

const styles=StyleSheet.create({
    container:{

        flex:1,
        justifyContent:'center',
        marginBottom:150
    },
    errormsg:{
        fontSize:16,
        color:'red'
    }
});

export default SigninDeliveryScreen;