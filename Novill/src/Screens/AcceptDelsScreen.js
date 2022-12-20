import React, { useState,useContext } from 'react';
import {View,StyleSheet,TouchableOpacity,ImageBackground,TextInput} from 'react-native';
import {Text,Input, Button} from 'react-native-elements';
import Spacer from './Components/Spacer'
import { Context as AuthContext} from './context/AuthContext';
import { NavigationEvents } from 'react-navigation';


const AcceptDelsScreen=()=>{
    const {state,acceptdel,clearErrorMessage}=useContext(AuthContext);
    const [email,setEmail] = useState(''); 
    const [location,setLocation]=useState('');
    return (
        <ImageBackground source={require("../Screens/images/im.jpg")} style={{ width:'100%', height:'100%' }} >
        <NavigationEvents onWillFocus={clearErrorMessage}/>
        <View style={styles.container}>
        <Spacer/>
        <Spacer/>
        
        <View style={{backgroundColor:'#fff',height:350,width:460,
                     borderTopLeftRadius:130,
                     paddingTop:75,
                     alignItems:'center',
                     right:30
                     }}>
        <Text >Accept Deliverie Employee</Text>

        <TextInput
            placeholder='Email' 
            label="Pharm name"
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
            placeholder='Location' 
            label="Pharm name"
            value={location}
            onChangeText={setLocation}
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
        marginTop:30,
        borderRadius:100 ,
          alignItems: 'center',
        paddingVertical:10,
        marginVertical:5
    }} title="Accept" onPress={()=>acceptdel({email,location})} >
        <Text style={{color:'black',fontWeight:'bold' ,fontSize:16}}>Accept</Text>
     </TouchableOpacity>
        <Spacer/>
        </View>
        </View>
        </ImageBackground>
    );
}

const styles=StyleSheet.create({});

export default AcceptDelsScreen;