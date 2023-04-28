import React from 'react';
import { View, Text, StyleSheet, Touchable,Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const PharmListComp = ({ name, location,onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
    <Image source={require('../images/NOVILL-02-03.png')} style={{ width:70,height:70}}/>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.location}>{location}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 2,
  

    },  
    width: 170,
      height: 160,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flex:1,
    justifyContent:'space-around',
     marginHorizontal:10
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  location: {
    fontSize: 18,
    color: '#666',
  },
});

export default PharmListComp;