import React from 'react';
import { TouchableOpacity, Text, StyleSheet,View } from 'react-native';

const CartButton = ({ title, onPress }) => {
  return (
    <View style={styles.buttonContainer}>

    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
     buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
 backgroundColor: '#AACB63',
    borderRadius: 100,
    alignItems: 'center',
    paddingVertical:10,
    width: 370,
  },
  text: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CartButton;