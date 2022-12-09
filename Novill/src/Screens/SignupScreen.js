import React, { useState,useContext,  } from 'react';
import {View,StyleSheet,TouchableOpacity,ImageBackground,TextInput} from 'react-native';
import {Text,Input, Button} from 'react-native-elements';
import Spacer from './Components/Spacer'
import { Context as AuthContext} from './context/AuthContext';
import { NavigationEvents } from 'react-navigation';
const SignupScreen=({navigation})=>{
    const {state,signup,clearErrorMessage}=useContext(AuthContext);
    const [email,setEmail]=useState('');
    const [Fname,setFname]=useState('');
    const [Lname,setLname]=useState('');
    const [password,setPassword] = useState('');
    const [Confirmpassword,setConfirmpassword] = useState('');
    const utype="user";


    return( 
            <ImageBackground source={require("../Screens/images/imag.jpg")} style={{ width:'100%', height:'100%' }} >

    <>
        <View style={styles.container}>
            <NavigationEvents onWillFocus={clearErrorMessage}/>
            <Spacer/>
            <Spacer/>
            <Spacer/>
            <Spacer/>
            <Spacer/>
            <Spacer/>
            <Spacer/>
      <Text style={{color:'#86c260' ,
             fontSize: 40,
              fontWeight:'bold'
              ,marginVertical:15,
              left:20,
            top:20
              }}>Register</Text>
      <Text  style={{
            color: '#978C8A',
            fontSize: 19,
            fontWeight:"bold",
            marginVertical:1,
            paddingVertical:0,
            left:20,
            top:5
}}>Create a new account</Text>
            <Spacer/>
            <TextInput
                placeholder='First Name' 
                label="First Name"
                value={Fname}
                onChangeText={setFname}
                autoCorrect={false}
                 style={{ 
              borderRadius:120,
    paddingHorizontal:70, width:'70%',
    backgroundColor:'rgb(220,220,220)',
     marginBottom:5,
     marginTop:70,
     left:50
               
            }}
            />

            <TextInput
                placeholder='Last Name' 
                label="Last Name"
                value={Lname}
                onChangeText={setLname}
                autoCorrect={false}
                 style={{ 
                 borderRadius:120,
    paddingHorizontal:70, width:'70%',
    backgroundColor:'rgb(220,220,220)',
     marginBottom:5,
     marginTop:30,
     left:50
               
            }}
            />
            <TextInput
                placeholder='example@email.com' 
                label="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
                 style={{ 
                borderRadius:120,
    paddingHorizontal:70, width:'70%',
    backgroundColor:'rgb(220,220,220)',
     marginBottom:5,
     marginTop:30,
     left:50
               
            }}
            />
            <TextInput
            secureTextEntry={true}
            label="Password"
            value={password}
            onChangeText={setPassword}
            placeholder='Password'
            autoCapitalize="none"
            autoCorrect={false}
             style={{ 
               borderRadius:120,
    paddingHorizontal:70, width:'70%',
    backgroundColor:'rgb(220,220,220)',
     marginBottom:5,
     marginTop:30,
     left:50
               
            }}
            />
            <TextInput
            secureTextEntry={true}
            label="Confirm Password"
            value={Confirmpassword}
            onChangeText={setConfirmpassword}
            autoCapitalize="none"
            placeholder='Confirm Password'
            autoCorrect={false}
             style={{ 
                 borderRadius:120,
    paddingHorizontal:70, width:'70%',
    backgroundColor:'rgb(220,220,220)',
     marginBottom:5,
     marginTop:30,
     left:50
               
            }}
            />

            {state.errorMessage ?<Text style= {styles.errormsg}>{state.errorMessage}</Text>: null}
            <TouchableOpacity title="Signup" onPress={()=>signup({email,password,Confirmpassword,Fname,Lname,utype})}
            style={{
        backgroundColor:'#629630',
        padding:50,
        marginTop:20,
        borderRadius:170,
          alignItems: 'center',
        paddingVertical:10,
        marginVertical:20,
        width:'50%',
        left:85
            }}>
            <Text style={{color:'black',fontWeight:'bold' ,fontSize:16}}>Signup</Text> 
            </TouchableOpacity> 
            
            <Spacer/>
            <TouchableOpacity onPress={()=>navigation.navigate('Signin')}>
                <Text   style={{
            color: "gray",
            fontSize: 15,
            fontWeight:"bold",
            marginVertical:10,
            paddingVertical:5,
            left:50,
            marginBottom:110
            
}} >Already have an account? Sign in here</Text>
            </TouchableOpacity>
        </View>
        
    </>
    </ImageBackground>
    );
};
SignupScreen.navigationOptions = () => {
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

export default SignupScreen;
