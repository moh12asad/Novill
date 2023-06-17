
import React, { useContext, useEffect, useState } from 'react';
import { Context as AuthContext } from './context/AuthContext';
import { SafeAreaView } from 'react-navigation';
import { View, Button, StyleSheet, Text, FlatList, TouchableOpacity, ImageBackground, Image } from 'react-native';
import Spacer from './Components/Spacer';
import GreenButton from './Components/GreenButton';
import GlobalContex from './context/CContex';
import Server from './api/Server';
import PharmListComp from './Components/PharmListComp';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import * as ImagePicker from 'expo-image-picker'; // Import the necessary package for image picking

const ShowProductInCartForUserScreen = (props) => {
  const prod = props.navigation.state.params.prod;
  const [imageUri, setImageUri] = useState(null);
  const user = props.navigation.state.params.user;
  const cart = user.cart;
  pers = cart.images[prod.name];
  const handleImageUpload = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permission not granted!');
      return;
    }
  
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
  
    if (!result.canceled) {
      const { uri } = result.assets[0];
      setImageUri(uri);
      // Here, you can send the image file to the server or perform any other operations
    }
  };

  return (
    <View style={styles.container}>
  <SafeAreaView style={{ height: '80%' }}>
    <Spacer />
    <View style={{backgroundColor:'#fff',height:350,width:460,
                    borderBottomRightRadius:120,bottom:80,
                    borderBottomLeftRadius:120
                     }}>

    <Image source={{ uri: prod.image }} style={styles.img} />
    <Image source={{ uri: pers}} style={styles.img} />
   </View>
   <View style={{bottom:20,height:260,width:430,}}>
   <Text style={styles.title}>{prod.prodname}</Text>
        <Text style={styles.dect}>Description: {prod.desc}</Text>
{prod.prescription && ( 
          <TouchableOpacity style={styles.uploadButton} onPress={handleImageUpload}>
            <Text style={styles.buttonText}>Re-upload prescreption</Text>
          </TouchableOpacity>
        )}
     
        <Spacer/>
        <View >
        <GreenButton title="Delete" onPress={() => RemoveProductFromTheCart(user,prod,props)}></GreenButton>
        <Text style={styles.subtitle}>{prod.price + "$"}</Text>
</View>
  </View>
  </SafeAreaView>
      <View style={styles.cartContainer}>
       {/* <TouchableOpacity onPress={() => console.log('cart icon pressed')}>
          <Image source={require('../Screens/images/cart.jpeg')} style={styles.cartImage} />
        </TouchableOpacity>*/}
      </View>
    </View>
  );
};

const RemoveProductFromTheCart=async(user,prod,props)=>{
    const res1 = await Server.post('/DeleteProductFromTheCart',{
      user,prod
    });
    const u = res1.data.user;
    props.navigation.navigate('Cart',{user:u});
  
  }

const styles=StyleSheet.create({


  container: {
flex: 1,
backgroundColor:'#F3EAC7',
justifyContent:'center',
alignItems:'center',
marginTop:-50
},
title:{
fontSize:32,
marginLeft:45,
fontWeight:'bold',
bottom:10
},
dect:{
  fontSize:20,
color:"#474747",
marginLeft:45,
},
subtitle:{
fontSize:20,
color:"#474747",
marginLeft:45,
   bottom:-10,

},
img:{
alignSelf:"center",
borderTopRightRadius:80,
borderBottomLeftRadius:80,
height:310,
width:320,bottom:-20

},
item: {
marginTop: 20,
padding: 10,
backgroundColor: '#fff',
fontSize: 20,
},
cartContainer: {
  position: 'absolute',
  bottom: 60,
  right: 20,
},
cartImage: {
  width: 50,
  height: 50,
  borderRadius: 25,
},
Button:{
        padding:50,
        marginTop:20,
        borderRadius:100 ,
          alignItems: 'center',
        paddingVertical:10,
        marginVertical:5
},
uploadButton: {
backgroundColor: '#fff',
    borderRadius: 100,
    alignItems: 'center',
   
    left: 40,
    width: 250,
    height: 45,
         paddingVertical:10,
         bottom:-10

},
buttonText: {
  color: 'black',
  fontSize: 16,
},
});
export default ShowProductInCartForUserScreen;
