/*import React from 'react';
import {View,Button,StyleSheet,Text} from 'react-native';


const ShowTestScreen=(props)=>{
    const image = props.navigation.state.params.image;
    console.log(image);
    return <Text style={{fontSize: 48}}> Show Test Screen </Text>;
}

const styles=StyleSheet.create({});

export default ShowTestScreen;*/
import React from 'react';
import { View, Button, StyleSheet, Text, Image } from 'react-native';

const ShowTestScreen = (props) => {
  const im = props.navigation.state.params.image;
  const image = im.image;
  console.log(image);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Show Test Screen</Text>
      {image && <Image source={{ uri: image }} style={styles.image} />}
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

export default ShowTestScreen;
