import React,{useContext,useEffect} from 'react';
import { Context as AuthContext} from './context/AuthContext';
import { SafeAreaView } from 'react-navigation';
import {View,Button,StyleSheet,Text,ImageBackground,Pressable} from 'react-native';
import Spacer from './Components/Spacer';
import { TouchableOpacity } from 'react-native-gesture-handler';

const AdminScreen=({navigation})=>{
    const {signout,getPharms} = useContext(AuthContext);
    return (
    <ImageBackground source={require("../Screens/images/imag.jpg")} style={{ width:'100%', height:'100%' }} >

        <View>
            <TouchableOpacity onPress={()=>navigation.navigate('WaitingPharms')} 
        style={{
        backgroundColor:'#6ba93a',
         borderRadius:1500 ,
          alignItems: 'center',
        width:200,
        marginTop:100,
        marginRight:170,
        paddingVertical:15,
        marginVertical:10,
        alignSelf:'flex-end'
        
    }} >
                <Text style={{ color:'#000',fontSize:18,
   fontWeight:"bold"}} >Pharms list</Text>
        </TouchableOpacity>
        <Spacer/>

        <TouchableOpacity onPress={()=>navigation.navigate('WaitingDels')} 
        style={{
        backgroundColor:'#6ba93a',
         borderRadius:150 ,
          alignItems: 'center',
        width:210,
        marginRight:160,
        paddingVertical:12,
        marginVertical:10,
        alignSelf:'flex-end'
        
    }} >
                <Text style={{ color:'#000',fontSize:18,
   fontWeight:"bold"}} >Deliviries list</Text>
        </TouchableOpacity>
        <Spacer>
        <View>
        <Pressable  style={styles.button} title="Sign out" onPress={signout}>
        <Text style={styles.text}>Sign out</Text> 
 </Pressable>
   </View>

        </Spacer>
        </View>
        </ImageBackground>

    );
}

const styles=StyleSheet.create({


      button: {
   backgroundColor:'#d1f0c7',
        padding:30,
        marginTop:20,
        borderRadius:110,
          alignItems: 'center',
        paddingVertical:10,
        marginVertical:10,
        width:'40%',
        left:200,
        marginTop:420,
        borderWidth:0
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#3a8b08',
  },
});

export default AdminScreen;