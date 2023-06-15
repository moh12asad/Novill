import React from 'react';
import { TouchableOpacity, Text, StyleSheet,View } from 'react-native';

const CancelButton = ({ title, onPress }) => {
  return (
    <View style={styles.views}>

    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  views:{ 
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
    right:40
},
  button: {
    
    backgroundColor: '#fff',
 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 170,
    borderWidth: 1,
     padding:40,

     width:'80%',
left:45,
bottom:-50,
    justifyContent: 'flex-end',

    borderColor: 'red',
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