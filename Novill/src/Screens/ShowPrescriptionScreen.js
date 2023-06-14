import React from 'react';
import {View,Button,StyleSheet,Text,Image} from 'react-native';


const ShowPrescriptionScreen=(props)=>{
    const image = props.navigation.state.params.image;
    const prod = props.navigation.state.params.prod;
    return (
        <View>
             <Text>Product Name: {prod.prodname}</Text>
      <Image source={{ uri: image }} style={styles.image} />

        </View>


    )
}

const styles = StyleSheet.create({
    image: {
      width: 200,
      height: 200,
    },
  });

export default ShowPrescriptionScreen;