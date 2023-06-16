import React from 'react';
import { TouchableOpacity, Text, StyleSheet,View } from 'react-native';

const TakeOrderButton = ({ title, onPress }) => {
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
    borderWidth: 1,

     width:'50%',
left:185,
bottom:-10,
    borderColor: 'green',
    alignItems:'center',
     borderWidth: 2,

     
  },
  text: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TakeOrderButton;