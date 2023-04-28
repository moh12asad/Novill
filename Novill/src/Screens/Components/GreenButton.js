import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const GreenButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
  backgroundColor:'#629630',
        padding:50,
        borderRadius:100 ,
          alignItems: 'center',
        paddingVertical:10,
        marginVertical:5,
        top:1
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default GreenButton;