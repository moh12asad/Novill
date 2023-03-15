import React,{useContext,useEffect} from 'react';
import { Context as AuthContext} from './context/AuthContext';
import { SafeAreaView } from 'react-navigation';
import {View,Button,StyleSheet,Text,ImageBackground,Pressable,Image} from 'react-native';
import Spacer from './Components/Spacer';
import { BorderlessButton, TouchableOpacity } from 'react-native-gesture-handler';
import { BackIcon } from 'react-native-vector-icons/Feather';
import { StatusBar } from 'react-native';
 
const AdminScreen=({navigation})=>{
    const {signout,getPharms} = useContext(AuthContext);
    return (
    <ImageBackground source={require("../Screens/images/imageback.jpg")} style={{ width:'100%', height:'100%' }} >
       
           <View>
        <Pressable style={styles.button} title="Sign out" onPress={signout}>
        <Image  source={require("../Screens/icons/logout.png")} style={styles.Images}></Image>
        <Text style={styles.text}>Log out</Text> 
 </Pressable>
   </View>
        <View style={{
           marginTop:110,
        }}>
        <Spacer/>
        <View style={{
          bottom:0,
        }}>
      
   
</View>
        </View>
        <View style={styles.NavContainer}>
        <View style={styles.NavBar}>
          <TouchableOpacity onPress={()=>navigation.navigate('UsersList')} 
        style={{
          left:20,
          top:5
        
    }} >
            <Image  source={require("../Screens/icons/people.png")} style={styles.ImageIcon}></Image>
              
        </TouchableOpacity>
             <TouchableOpacity onPress={()=>navigation.navigate('AdminPharmList')} 
      style={{
         alignItems:'center',
         left:40,
          top:5

         
        
    }} >
    <Image  source={require("../Screens/icons/pharmacy.png")} style={styles.ImageIcon}></Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('AdminDelsList')} 
      style={{
        padding:8,
       
        alignItems: 'center',
      
     
       
        left:49,
        borderWidth:0,
       
        
      
        
    }} >
    <Image  source={require("../Screens/icons/fast-delivery.png")} style={styles.ImageIcon}></Image>
        </TouchableOpacity>
          <Pressable style={styles.IconBehave}>
          </Pressable>

        </View>
      </View>
        </ImageBackground>

    );
}

const styles=StyleSheet.create({

  container:{
flex:1,
backgroundColor:'#fff',
alignItems:'center',
justifyContent:'center',
  },

      button: {
        padding:10,
        marginTop:10,
        borderRadius:110,
        alignItems: 'center',
        paddingVertical:10,
        marginVertical:20,
        width:'30%',
        left:290,
        borderWidth:0,
  },
  Images:{
    width:30,
    height:30,
        
  },
   ImageIcon:{
    width:40,
    height:40,
        
  },
  NavContainer:{
    position:'absolute',
    alignItems:'center',
    bottom:20,

  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#000',
  },
  NavBar:{
    flexDirection:'row',
    backgroundColor:'#6ba93a',
    width:'80%',
    justifyContent:'space-between',
    borderRadius:40,
    left:25,
    
  },
  IconBehave:{
    padding:20,
 
  }
});

export default AdminScreen;



/*
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
   fontWeight:"bold"}} >Pharm's Waiting List</Text>
        </TouchableOpacity>



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
   fontWeight:"bold"}} >Deliviries Waiting List</Text>
        </TouchableOpacity>
*/ 