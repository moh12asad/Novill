import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ProductsDeletButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
   backgroundColor: '#fff',
    borderWidth: 0,
    marginLeft: 50,
    padding: 0,
    width:180,
     marginVertical:10,
    paddingVertical:5,
    borderRadius:120,
    alignItems:'center',
    right:10
  
  },
  text: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProductsDeletButton;