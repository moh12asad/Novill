import React,{useContext} from 'react';
import { Context as AuthContext} from './context/AuthContext';
import { SafeAreaView } from 'react-navigation';
import {View,Button,StyleSheet,Text,ImageBackground,TouchableOpacity,Pressable,Image} from 'react-native';
import Spacer from './Components/Spacer';
import HomeScreen from './HomeScreen';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { MaterialIcons } from '@expo/vector-icons';
const DeliveryAccountScreen=(props)=>{
    console.log(props.navigation.state.params.del);
    const del = props.navigation.state.params.del;
    const {signout} = useContext(AuthContext);

    return(
                    <ImageBackground source={require("../Screens/images/imageback.jpg")} style={{ width:'100%', height:'100%' }}>        
      <View>
    <Pressable style={styles.button} title="Sign out" onPress={signout}>
        <Image  source={require("../Screens/icons/logout.png")} style={styles.Images}></Image>

 </Pressable>
        </View>
         <SafeAreaView forceInset={{top:'always'}}>
            <Spacer/>
             <Text style={{fontSize: 35,
              fontWeight:'bold'
              ,marginVertical:5,
              left:10,
            top:20,}}> Welcome back {del.Fname} </Text>
        
           
            <Spacer/>
        
    <Spacer/>
 

             <Spacer/>
        </SafeAreaView>
          <View style={styles.NavContainer}>
        <View style={styles.NavBar}>
       
          {/*Delivery status*/}
          <MaterialIcons style={styles.IconBehave} name="delivery-dining" size={24} color="black" />
        {/*reports , request*/}
          <MaterialIcons style={styles.IconBehave} name="report" size={24} color="black" onPress={()=>props.navigation.navigate('ReportDelivery',{del})} />
        {/*edit profile*/}
           <Pressable style={styles.IconBehave}>
                 <Icon name="user" color={'black'} size={20}  on onPress={()=>props.navigation.navigate('EditDelivery',{del:del})}  /> 
               

          </Pressable>
        </View></View>
        </ImageBackground>
        );
}

const styles=StyleSheet.create({

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
    width:'75%',
    justifyContent:'space-between',
    borderRadius:30,
    bottom:-600,
    height:60,
    right:40,
    left:10,

    
  },
  IconBehave:{
    padding:15,
 
  }
});

export default DeliveryAccountScreen;