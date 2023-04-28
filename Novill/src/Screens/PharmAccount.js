import React,{useContext} from 'react';
import { Context as AuthContext} from './context/AuthContext';
import { SafeAreaView } from 'react-navigation';
import {View,Button,StyleSheet,Text,ImageBackground,TouchableOpacity,Image,Pressable} from 'react-native';
import Spacer from './Components/Spacer';
import HomeScreen from './HomeScreen';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Server from './api/Server';

const PharmAccountScreen=(props)=>{
  const {getordersforpharm}=useContext(AuthContext);
  console.log(props.navigation.state.params.pharms1);
  const pharm = props.navigation.state.params.pharms1;
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
             <Text style={{fontSize: 38,
              fontWeight:'bold'
              ,marginVertical:5,
              left:10,
            top:-50,}}> Pharm store: {pharm.pname}</Text>
      
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
    <Spacer></Spacer>
    <TouchableOpacity onPress={()=>getordersforpharm({pharm})}   style={{
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
   fontWeight:"bold"}} >Orders</Text> 
    </TouchableOpacity>

  
           
            <Spacer/>
       <Spacer/>
        </SafeAreaView>
  <View style={styles.NavContainer}>
        <View style={styles.NavBar}>
       
           <Pressable style={styles.IconBehave}>
                <Icon name="shopping-cart" color={'black'} size={20} onPress={()=>navigation.navigate('AdminDelsList')}/> 
          </Pressable>
           <Pressable style={styles.IconBehave}>
                <Icon name="product-hunt" color={'black'} size={22}  title="Pharms" onPress={()=>props.navigation.navigate('Products',pharm)}   /> 
          </Pressable>
           <Pressable style={styles.IconBehave}>
                 <Icon name="user" color={'black'} size={20}   /> 
               

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
        marginTop:10,
        borderRadius:110,
        alignItems: 'center',
        paddingVertical:10,
        marginVertical:20,
        width:'30%',
        left:280,
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
    width:'80%',
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

export default PharmAccountScreen;