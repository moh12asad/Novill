import React from 'react';
import {View,Button,StyleSheet,Text,Image} from 'react-native';


const ShowPrescriptionScreen=(props)=>{
    const image = props.navigation.state.params.image;
    const prod = props.navigation.state.params.prod;
    return (
        <View style={styles.container}>
<View style={{    justifyContent: 'flex-start',bottom:210
}}>
             <Text style={styles.title}>Product Name: {prod.prodname}</Text>
             </View>
      <Image source={{ uri: image }} style={styles.image} />

        </View>


    )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    bottom:10
  },
  image: {
    width: 350,
    height:  350, // Subtracting 100 to leave space for the title
    resizeMode: 'contain',
  },
  });

export default ShowPrescriptionScreen;