import React from 'react';
import { TouchableOpacity, Text, StyleSheet,View } from 'react-native';

const CancelButton = ({ title, onPress }) => {
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
    
    backgroundColor: '#fff',
 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 170,
    borderWidth: 1,
     padding:40,

    width:'40%',

    borderColor: 'green',
    alignItems:'center',
     borderWidth: 2
  },
  text: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CancelButton;