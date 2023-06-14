import React from 'react';
import { TouchableOpacity, Text, StyleSheet,View } from 'react-native';

const StartButton = ({ title, onPress }) => {
  return (
    <View style={styles.container}>
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
 container:{
bottom:-80
 },
  button: {
    
    backgroundColor: '#fff',
 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 170,


    marginTop:10,
    width:'40%',
    left:220,
    borderColor: 'green',
    alignItems:'center',
     borderWidth: 2,

       justifyContent: 'flex-end', 
  },
  text: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default StartButton;