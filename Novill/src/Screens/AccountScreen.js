import React,{useContext,useEffect} from 'react';
import { Context as AuthContext} from './context/AuthContext';
import { SafeAreaView } from 'react-navigation';
import {View,Button,StyleSheet,Text,ImageBackground,Pressable} from 'react-native';
import Spacer from './Components/Spacer';
import { TouchableOpacity } from 'react-native-gesture-handler';

const AccountScreen=(props)=>{
    const {signout,getPharms} = useContext(AuthContext);
    return(
          <ImageBackground source={require("../Screens/images/imag.jpg")} style={{ width:'100%', height:'100%' }} >

         <SafeAreaView forceInset={{top:'always'}}>

            <Text style={{fontSize: 40,
              fontWeight:'bold'
              ,marginVertical:5,
              left:10,
            top:20,
            
            
            }}> My Account</Text>
           
            <View>
                       <Pressable    style={{
         backgroundColor:'#6ba93a',
         borderRadius:25 ,
          alignItems: 'center',
        width:170,
        marginRight:40,
        paddingVertical:5,
        marginVertical:10,
        alignSelf:'flex-end',
        right:150,
        marginTop:15,
        top:40

    }} title="Pharms" onPress={getPharms}>
     <Text style={{ color:'#000',fontSize:18,
   fontWeight:"bold"}} >Pharms</Text> 
    </Pressable>
                     <Pressable    style={{
         backgroundColor:'#6ba93a',
         borderRadius:25 ,
          alignItems: 'center',
        width:170,
        marginRight:40,
        paddingVertical:5,
        marginVertical:10,
        alignSelf:'flex-end',
        right:150,
        marginTop:15,
        top:40

    }} title="Pharms">
     <Text style={{ color:'#000',fontSize:18,
   fontWeight:"bold"}} >My Profile</Text> 
    </Pressable>
</View>
<View>
          
<Pressable  style={styles.button} title="Sign out" onPress={signout}>
        <Text style={styles.text}>Signout</Text> 
 </Pressable>
 </View>
        </SafeAreaView>
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

export default AccountScreen;