
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

const ProductScreen = (props) => {
  const { AddToCart } = useContext(AuthContext);
  const pharm = props.navigation.state.params.pharm1;
  const prod = props.navigation.state.params.prod;
  const [imageUri, setImageUri] = useState(null);
  const user = props.navigation.state.params.user;
  const cart = user.cart;
  console.log('Cart is:', cart);
  console.log(pharm);
  console.log(prod);

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
    
   </View>
   <View style={{bottom:20,height:260,width:430,}}>
   <Text style={styles.title}>{prod.prodname}</Text>
        <Text style={styles.dect}>Description: {prod.desc}</Text>
{prod.prescription && ( 
          <TouchableOpacity style={styles.uploadButton} onPress={handleImageUpload}>
            <Text style={styles.buttonText}>Upload prescription</Text>
          </TouchableOpacity>
        )}
     
        <Spacer/>
        <View >
        <GreenButton title="Add to cart" onPress={() => AddToCart({ cart, prod, pharm, user,imageUri })}></GreenButton>
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
 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 170,
    borderWidth: 1,

     width:'70%',
left:35,
bottom:-15,
    borderColor: 'green',
    alignItems:'center',
     borderWidth: 2,

       justifyContent: 'flex-end', 

},
buttonText: {
  color: 'black',
  fontSize: 16,
},
});
export default ProductScreen;
