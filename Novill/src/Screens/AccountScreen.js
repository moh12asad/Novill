import React,{useContext,useEffect} from 'react';
import { Context as AuthContext} from './context/AuthContext';
import { SafeAreaView } from 'react-navigation';
import {View,Button,StyleSheet,Text,ImageBackground} from 'react-native';
import Spacer from './Components/Spacer';
import { TouchableOpacity } from 'react-native-gesture-handler';

const AccountScreen=(props)=>{
    const {signout,getPharms} = useContext(AuthContext);
    console.log(props);


    return(
          <ImageBackground source={require("../Screens/images/imag.jpg")} style={{ width:'100%', height:'100%' }} >

         <SafeAreaView forceInset={{top:'always'}}>

            <Text style={{fontSize: 40,
              fontWeight:'bold'
              ,marginVertical:5,
              left:10,
            top:20,
            
            
            }}> My Account </Text>
            <Spacer/>
            <View>
                       <TouchableOpacity    style={{
         backgroundColor:'#6ba93a',
         borderRadius:25 ,
          alignItems: 'center',
        width:180,
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
    </TouchableOpacity>
                     <TouchableOpacity    style={{
         backgroundColor:'#6ba93a',
         borderRadius:25 ,
          alignItems: 'center',
        width:180,
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
    </TouchableOpacity>
</View>
<View>
            <Spacer/>
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
            <Spacer/>
        </SafeAreaView>
        </ImageBackground>
        );
}

const styles=StyleSheet.create({});

export default AccountScreen;