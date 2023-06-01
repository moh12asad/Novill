import React from 'react';
import { View, Text, StyleSheet, Touchable,Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ProductListComp = ({ name, price,image,onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
    
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>{price}</Text>
     

    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
   container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 2,
    },
    width: 370, // Adjust the width value to your desired width
    height: 90, // Adjust the height value to your desired height
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,

    justifyContent: 'space-around',
    marginHorizontal: 10,
},
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  location: {
    fontSize: 18,
    color: '#666',
  },
});

export default ProductListComp;