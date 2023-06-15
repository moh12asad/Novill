import React from 'react';
import { TouchableOpacity, Text, StyleSheet,View } from 'react-native';

const OrderProcessButton = ({ title, onPress }) => {
  return (
    <View style={styles.view}>
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
   

    width: 200,
right:25,
         paddingVertical:10,
  },
  text: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  view:{
    alignItems:'flex-end',
    position:'relative'
  }
});

export default OrderProcessButton;