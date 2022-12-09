import React from 'react';
import {View,Button,StyleSheet,Text,ImageBackground} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Spacer from './Components/Spacer';



const UserScreen=({navigation})=>{
    return(
        <ImageBackground source={require("../Screens/images/imag.jpg")} style={{ width:'100%', height:'100%' }} >
        <View> 
            <TouchableOpacity
             style={{
        backgroundColor:'#86c260',
         borderRadius:100 ,
        alignItems: 'center',
        width:280,
        paddingVertical:15,
    
        alignSelf:'flex-end',
        marginRight:75,
        
        marginTop:200
    }}
            
             onPress={()=>navigation.navigate('Signin')}>
                    <Text style={{ color:'#000',fontSize:12,
   fontWeight:"bold"}}>Already have an account? Sign in here</Text>
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
        marginRight:75,
        marginTop:50
    }}
      
             onPress={()=>navigation.navigate('Signup')}>
                <Text
                style={{ color:'#000',fontSize:12,
   fontWeight:"bold"}}
                >Dont have an account? Sign Up here</Text>
            </TouchableOpacity>
            <Spacer/>
        </View>
        </ImageBackground>
    );
}

const styles=StyleSheet.create({});

export default UserScreen;


