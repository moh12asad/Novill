import React,{useContext,useEffect} from 'react';
import { Context as AuthContext} from './context/AuthContext';
import { SafeAreaView } from 'react-navigation';
import {View,Button,StyleSheet,Text,ImageBackground,Pressable,Image} from 'react-native';
import Spacer from './Components/Spacer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { BackIcon } from 'react-native-vector-icons/Feather';
import { StatusBar } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const AccountScreen=(props)=>{
    const {signout,getPharms} = useContext(AuthContext);
    const user=props.navigation.state.params.user;
        const pharm=props.navigation.state.params.pharm1;

    //const u=props.navigation.navigate.params;
    //console.log('the u is:',u);
    console.log("Account screen, passed user is: ",user);
    return(
          <ImageBackground source={require("../Screens/images/imageback.jpg")} style={{ width:'100%', height:'100%' }} >
          <View>
             <View>
        <Pressable style={styles.button} title="Sign out" onPress={signout}>
        <Image  source={require("../Screens/icons/logout.png")} style={styles.Images}></Image>
 </Pressable>
   </View>
  
    <Text style={{fontSize: 35,
              fontWeight:'bold'
              ,marginVertical:5,
              left:10,
            top:20,}}> Welcome back {user.Fname} </Text>
       
         <SafeAreaView forceInset={{top:'always'}}>
        </SafeAreaView>
    
        </View>
      
       <View style={styles.NavContainer}>
        <View style={styles.NavBar}>
       <MaterialIcons style={styles.IconBehave} name="report" size={24} color="black" onPress={()=>props.navigation.navigate('ReportUser',{user})} />

           <Pressable style={styles.IconBehave}>
                <Icon name="truck" color={'black'} size={20} /> 
          </Pressable>
           
          <Pressable style={styles.IconBehave}>
                <Icon name="shopping-cart" color={'black'} size={20} onPress={() => props.navigation.navigate('Cart',{user:user})} /> 
          </Pressable>
         {/* <Pressable style={styles.IconBehave}>
                <Icon name="plus" color={'black'} size={20} /> 
          </Pressable>*/}
           <Pressable style={styles.IconBehave}>
                <Icon name="medkit" color={'black'} size={20}  title="Pharms" onPress={()=>props.navigation.navigate('PharmsList',{user:user})}/> 
          </Pressable>
           <Pressable style={styles.IconBehave}>
                 <Icon name="user" color={'black'} size={20} onPress={()=>props.navigation.navigate('EditUser',{user:user})} /> 
              
          </Pressable>

        </View></View>
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
        marginTop:5,
        borderRadius:110,
        alignItems: 'center',
        paddingVertical:10,
        marginVertical:20,
        width:'40%',
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
    

  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#000',
  },
  NavBar:{
    flexDirection:'row-reverse',
    backgroundColor:'#6ba93a',
    width:'90%',
    justifyContent:'space-between',
    borderRadius:30,
    bottom:-600,
    height:60,
    right:40,
    left:10,

    
  },
  IconBehave:{
    padding:20,
 
  }
 




});

export default AccountScreen;