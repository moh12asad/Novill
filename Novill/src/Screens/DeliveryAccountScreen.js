import React,{useContext} from 'react';
import { Context as AuthContext} from './context/AuthContext';
import { SafeAreaView } from 'react-navigation';
import {View,Button,StyleSheet,Text,ImageBackground,TouchableOpacity,Pressable,Image} from 'react-native';
import Spacer from './Components/Spacer';
import HomeScreen from './HomeScreen';

const DeliveryAccountScreen=(props)=>{
    console.log(props);
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
            top:20,}}> Delivery Account </Text>
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
   fontWeight:"bold"}} >Delivery status</Text> 
    </TouchableOpacity>
           
            <Spacer/>
 

             <Spacer/>
        </SafeAreaView>
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
});

export default DeliveryAccountScreen;