/*import React, { useState } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import  ImagePicker from "react-native-image-picker";


const TestScreen = () => {
  const [imageUri, setImageUri] = useState(null);

  const handleImageUpload = () => {
    ImagePicker.showImagePicker({ title: 'Select Image' }, (response) => {
      if (!response.didCancel && !response.error) {
        setImageUri(response.uri);
        // Here, you can send the image file to the server or perform any other operations
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Test Screen</Text>
      <Button title="Upload Image" onPress={handleImageUpload} />
      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 48,
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
});

export default TestScreen;
*/
/*
import React, { useState } from 'react';
import { View, Button, StyleSheet, Text, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const TestScreen = () => {
  const [imageUri, setImageUri] = useState(null);

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

    if (!result.cancelled) {
      setImageUri(result.uri);
      // Here, you can send the image file to the server or perform any other operations
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Test Screen</Text>
      <Button title="Upload Image" onPress={handleImageUpload} />
      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 48,
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
});

export default TestScreen;
*/
import React, { useContext, useState } from 'react';
import { View, Button, StyleSheet, Text, Image,TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Context as AuthContext} from './context/AuthContext';



const TestScreen = () => {
  const [imageUri, setImageUri] = useState(null);
  const {TestingImage} = useContext(AuthContext);

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

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Test Screen</Text>
      <Button title="Upload Image" onPress={handleImageUpload} />
      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      <TouchableOpacity style={{
        backgroundColor:'#629630',
        padding:50,
        marginTop:30,
        borderRadius:100 ,
          alignItems: 'center',
        paddingVertical:10,
        marginVertical:5
    }} title="send" onPress={()=>TestingImage({imageUri})} >
        <Text style={{color:'black',fontWeight:'bold' ,fontSize:16}}>Send</Text>
     </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 48,
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
});

export default TestScreen;
