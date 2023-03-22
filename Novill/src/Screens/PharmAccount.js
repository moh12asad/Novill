import React,{useContext} from 'react';
import { Context as AuthContext} from './context/AuthContext';
import { SafeAreaView } from 'react-navigation';
import {View,Button,StyleSheet,Text,ImageBackground,TouchableOpacity} from 'react-native';
import { useRoute } from '@react-navigation/native';
import Spacer from './Components/Spacer';
import HomeScreen from './HomeScreen';

const PharmAccountScreen=(props)=>{
  console.log(props.navigation.state.params.pharms1);
  const pharm = props.navigation.state.params.pharms1;
  const {signout} = useContext(AuthContext);
    return(
                    <ImageBackground source={require("../Screens/images/imag.jpg")} style={{ width:'100%', height:'100%' }}>        

         <SafeAreaView forceInset={{top:'always'}}>
            <Spacer/>
             <Text style={{fontSize: 38,
              fontWeight:'bold'
              ,marginVertical:5,
              left:10,
            top:20,}}> Pharm store: {pharm.pname}</Text>
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

    }} title ="Pharm store status">
 <Text style={{ color:'#000',fontSize:18,
   fontWeight:"bold"}} >Pharm store status</Text> 
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>props.navigation.navigate('AddProducts',pharm)}   style={{
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

    }} title ="Pharm store status">
 <Text style={{ color:'#000',fontSize:18,
   fontWeight:"bold"}} >Add product</Text> 
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>props.navigation.navigate('Products',pharm)}   style={{
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

    }} title ="Pharm store status">
 <Text style={{ color:'#000',fontSize:18,
   fontWeight:"bold"}} >Products</Text> 
    </TouchableOpacity>
           
            <Spacer/>
   <TouchableOpacity style={{ backgroundColor:'#d1f0c7',
        padding:30,
        marginTop:20,
        borderRadius:110,
          alignItems: 'center',
        paddingVertical:10,
        marginVertical:10,
        width:'30%',
        left:200,
        marginTop:370,
        borderWidth:0
        
        }} title="Sign out" onPress={signout}>
        <Text style={{color:'black',fontWeight:'bold' ,fontSize:16}}>Log out</Text> 
            </TouchableOpacity>


             <Spacer/>
        </SafeAreaView>
        </ImageBackground>
        );
}

const styles=StyleSheet.create({});

export default PharmAccountScreen;