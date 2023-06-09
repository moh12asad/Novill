/*import React,{useContext,useEffect, useState} from 'react';
import { Context as AuthContext} from './context/AuthContext';
import { SafeAreaView } from 'react-navigation';
import { View, Button, StyleSheet, Text, FlatList, TouchableOpacity, ImageBackground,Image } from 'react-native';
import Spacer from './Components/Spacer';
import GreenButton from './Components/GreenButton';
import GlobalContex from './context/CContex';
import Server from './api/Server';
import PharmListComp from './Components/PharmListComp';
import FontAwesome from "@expo/vector-icons/FontAwesome";

const ProductScreen=(props)=>{
  const {AddToCart} = useContext(AuthContext);
    const pharm=props.navigation.state.params.pharm1;
    const prod=props.navigation.state.params.prod;
    const [imageUri, setImageUri] = useState(null);
    //const cart = props.navigation.state.params.cart;
    const user=props.navigation.state.params.user;
    const cart=user.cart;
    console.log('Cart is:',cart);
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
        setImageUri(result.assets[0].uri);
        // Here, you can send the image file to the server or perform any other operations
      }
    };
    return(
    <View style={styles.container}>
  <SafeAreaView style={{ height: '80%' }}>
    <Spacer />
    <View>
     <Text style={styles.title}>{prod.prodname}</Text>
    <Image source={{ uri: prod.image }} style={styles.img} />

<Text style={styles.subtitle}>Price: {prod.price + "$"}</Text>
        <Text style={styles.subtitle}>Description: {prod.desc}</Text>
    </View>
        
        <Spacer/>
        <GreenButton title="Add to cart" onPress={()=>AddToCart({cart,prod,pharm,user})}></GreenButton>
  </SafeAreaView>
  <View style={styles.cartContainer}>
        <TouchableOpacity onPress={() => console.log('cart icon pressed')}>
          <Image source={require('../Screens/images/cart.jpeg')} style={styles.cartImage} />
        </TouchableOpacity>
      </View>
      </View>
  );
}

const styles=StyleSheet.create({


  container: {
flex: 1,
backgroundColor: '#fff',
justifyContent:'center',
alignItems:'center',
marginTop:-50
},
title:{
fontSize:32,
marginTop:60,
marginLeft:45,
fontWeight:'bold',
marginHorizontal:10
},
subtitle:{
fontSize:20,
color:"#474747",
marginLeft:45


},
img:{
alignSelf:"center",
borderTopRightRadius:80,
borderBottomLeftRadius:80,
height:350,
width:350,

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
}
});

export default ProductScreen;*/
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
        <View>
          <Text style={styles.title}>{prod.prodname}</Text>
          <Image source={{ uri: prod.image }} style={styles.img} />

          <Text style={styles.subtitle}>Price: {prod.price + "$"}</Text>
          <Text style={styles.subtitle}>Description: {prod.desc}</Text>
        </View>

        {prod.prescription && ( // Conditionally render the upload image button
          <TouchableOpacity style={styles.uploadButton} onPress={handleImageUpload}>
            <Text style={styles.buttonText}>Upload Image</Text>
          </TouchableOpacity>
        )}

        <Spacer />
        <GreenButton title="Add to cart" onPress={() => AddToCart({ cart, prod, pharm, user,imageUri })}></GreenButton>
      </SafeAreaView>
      <View style={styles.cartContainer}>
        <TouchableOpacity onPress={() => console.log('cart icon pressed')}>
          <Image source={require('../Screens/images/cart.jpeg')} style={styles.cartImage} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -50
  },
  title: {
    fontSize: 32,
    marginTop: 60,
    marginLeft: 45,
    fontWeight: 'bold',
    marginHorizontal: 10
  },
  subtitle: {
    fontSize: 20,
    color: "#474747",
    marginLeft: 45
  },
  img: {
    alignSelf: "center",
    borderTopRightRadius: 80,
    borderBottomLeftRadius: 80,
    height: 350,
    width: 350,
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
  uploadButton: {
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  Button: {
    padding: 50,
    marginTop: 20,
    borderRadius: 100,
    alignItems: 'center',
    paddingVertical: 10,
    marginVertical: 5
  }
});

export default ProductScreen;
