import React, { useState,useContext } from 'react';
import {View,StyleSheet,TouchableOpacity,ImageBackground,TextInput} from 'react-native';
import {Text,Input, Button} from 'react-native-elements';
import Spacer from './Components/Spacer'
import { Context as AuthContext} from './context/AuthContext';
import { NavigationEvents } from 'react-navigation';


const DeleteUsersScreen=()=>{
    const {state,deleteuser,clearErrorMessage}=useContext(AuthContext);
    const [email,setEmail] = useState(''); 
    return (
        <ImageBackground source={require("../Screens/images/background.jpg")} style={{ width:'100%', height:'100%' }} >
        <NavigationEvents onWillFocus={clearErrorMessage}/>
        <View style={styles.container}>
        <Spacer/>
        <Spacer/>
        
        <View style={{height:250,width:450,
                     paddingTop:200,
                     alignItems:'center',
                     right:30
                     }}>
        <Text  style={{fontSize:20,
        fontWeight:'bold',
        top:-20}}>Delete User</Text>

        <TextInput
            placeholder='Email' 
            label="email"
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

        {state.errorMessage ?<Text style= {styles.errormsg}>{state.errorMessage}</Text>: null}
        <TouchableOpacity style={{
        backgroundColor:'#629630',
        padding:50,
       
        borderRadius:100 ,
          alignItems: 'center',
        paddingVertical:10,
        marginVertical:5
    }} title="Accept" onPress={()=>deleteuser({email})} >
        <Text style={{color:'black',fontWeight:'bold' ,fontSize:16}}>Accept</Text>
     </TouchableOpacity>
        <Spacer/>
        </View>
        </View>
        </ImageBackground>
    );
}

const styles=StyleSheet.create({});

export default DeleteUsersScreen;