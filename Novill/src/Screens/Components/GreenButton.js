import React from 'react';
import { TouchableOpacity, Text, StyleSheet,View } from 'react-native';

const GreenButton = ({ title, onPress }) => {
  return (
    <View>
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
   backgroundColor: '#FEF9E7',
    borderRadius: 100,
    alignItems: 'center',
   
    left: 220,
    width: 200,
    height: 45,
         paddingVertical:10,
         bottom:-50
  },
  text: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default GreenButton;