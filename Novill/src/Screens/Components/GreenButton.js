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
   backgroundColor: '#FEF9E7',
    borderRadius: 100,
    alignItems: 'center',
    position: 'absolute',
    left: 200,
    width: 200,
    height: 45,
         paddingVertical:10,
         bottom:5
  },
  text: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default GreenButton;