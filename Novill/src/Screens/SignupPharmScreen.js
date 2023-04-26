import React, { useState,useContext,  } from 'react';
import {Text,View,StyleSheet,TouchableOpacity,ImageBackground,TextInput} from 'react-native';
import {Input, Button} from 'react-native-elements';
import Spacer from './Components/Spacer'
import { Context as AuthContext} from './context/AuthContext';
import { NavigationEvents } from 'react-navigation';
import { BackgroundImage } from 'react-native-elements/dist/config';
const SignupPharmScreen=({navigation})=>{
    const {state,signupPharm,clearErrorMessage}=useContext(AuthContext);
    const [email,setEmail]=useState('');
    const [Fname,setFname]=useState('');
    const [Lname,setLname]=useState('');
    const [password,setPassword] = useState('');
    const [Confirmpassword,setConfirmpassword] = useState('');
    const [location,setlocation] = useState('');
    const [pname,setpname] = useState('');
    const [desc,setDesc] = useState('');
    const AdminAccept=false;
    const utype="pharm";

    return( 
      
   
    <>
    <ImageBackground source={require("../Screens/images/imag.jpg")} style={{ width:'100%', height:'100%' }}>        
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
                value={Fname}
                onChangeText={setFname}
                autoCorrect={false}
                style={{ 
      
      /*  backgroundColor:'rgb(220,220,220)',
                    borderRadius:120,
                     paddingHorizontal:70,
                      width:'70%',
                    top:20,
                    marginTop:0,
                    left:1,
                    width:'20%',
                    paddingVertical:1,
                    marginVertical:0,
                    margin:30*/

                     borderRadius:120,
                    paddingHorizontal:70, width:'70%',
                    backgroundColor:'rgb(220,220,220)',
                    marginBottom:5,
                    marginTop:10,
                    left:50
             
          
            }}
            />

            <TextInput
                placeholder='Last Name' 
                value={Lname}
                onChangeText={setLname}
                autoCorrect={false}
                       style={{ 
                 borderRadius:120,
                paddingHorizontal:70, width:'70%',
                backgroundColor:'rgb(220,220,220)',
                marginBottom:5,
                marginTop:10,
                left:50
             

          
            }}
            />
            <TextInput
                placeholder='example@email.com' 
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                au  style={{ 
                     borderRadius:120,
                    paddingHorizontal:70, width:'70%',
                    backgroundColor:'rgb(220,220,220)',
                    marginBottom:5,
                     marginTop:10,
                    left:50
             

    
          
            }}
            />
            <TextInput
                placeholder='Location' 
                value={location}
                onChangeText={setlocation}
                autoCorrect={false}
                      style={{
                         borderRadius:120,
                        paddingHorizontal:70, width:'70%',
                        backgroundColor:'rgb(220,220,220)',
                        marginBottom:5,
                        marginTop:10,
                        left:50
             

    
          
            }}
            />
            <TextInput
                placeholder='Pharm name' 
                value={pname}
                onChangeText={setpname}
                autoCorrect={false}
                      style={{ 
      
                     borderRadius:120,
    paddingHorizontal:70, width:'70%',
    backgroundColor:'rgb(220,220,220)',
     marginBottom:5,
     marginTop:10,
     left:50
             
          
            }}
            />
            
            <TextInput
            secureTextEntry={true}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            autoCapitalize="none"
            autoCorrect={false}
                  style={{ 
       borderRadius:120,
    paddingHorizontal:70, width:'70%',
    backgroundColor:'rgb(220,220,220)',
     marginBottom:5,
     marginTop:10,
     left:50
                
                    
            }}
            />
            <TextInput
            secureTextEntry={true}
            placeholder="confirm password"
            value={Confirmpassword}
            onChangeText={setConfirmpassword}
            autoCapitalize="none"
            autoCorrect={false}
                 style={{ 
      
                   borderRadius:120,
                 paddingHorizontal:70, width:'70%',
                backgroundColor:'rgb(220,220,220)',
                marginBottom:5,
                marginTop:10,
                left:50
             
                    
          
            }}
            />
                        <TextInput
            placeholder="Description"
            value={desc}
            onChangeText={setDesc}
            autoCapitalize="none"
            autoCorrect={false}
                 style={{ 
      
                   borderRadius:120,
                 paddingHorizontal:70, width:'70%',
                backgroundColor:'rgb(220,220,220)',
                marginBottom:5,
                marginTop:10,
                left:50
             
                    
          
            }}
            />

            {state.errorMessage ?<Text style= {styles.errormsg}>{state.errorMessage}</Text>: null}
            <TouchableOpacity
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
            }}
             title="Signup" onPress={()=>signupPharm({email,password,Confirmpassword,Fname,Lname,AdminAccept,location,pname,utype,desc})}>
             
            <Text style={{color:'black',fontWeight:'bold' ,fontSize:16}}>Signup</Text> 
             </TouchableOpacity>
            <Spacer/>
            <TouchableOpacity onPress={()=>navigation.navigate('Signin')}>
                <Text style={{

                    color: "gray",
            fontSize: 15,
            fontWeight:"bold",
            marginVertical:-20,
            paddingVertical:0,
            left:50,
            marginBottom:110
                }}>Already have an account? Sign in here</Text>
            </TouchableOpacity>
        </View>
        </ImageBackground>
    </>

    );
};
SignupPharmScreen.navigationOptions = () => {
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
    },
    boto:{
         backgroundColor:'#629630',
        padding:50,
        marginTop:20,
        borderRadius:170,
          alignItems: 'center',
        paddingVertical:10,
        marginVertical:20,
        width:'50%',
        left:85
    }
});

export default SignupPharmScreen;
