import React from 'react';
import { View, Text, StyleSheet, Touchable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const OrderListComp = ({ name, location,amount,onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.views}>
      <Text style={styles.name}>{name}</Text>
     <View style={styles.infoContainer}>
      <Text style={styles.location}>{location}</Text>
  
      </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
   container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 5,
    shadowColor: '#000',
   
    width: 370, // Adjust the width value to your desired width
    height: 100, // Adjust the height value to your desired height
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,

    flexDirection: 'row', // Align the content and avatarContainer horizontally
    alignItems: 'center', // Center align vertically
},
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,

  },
 location: {
    fontSize: 18,
    color: '#666',
    marginBottom: 1,
  },
  amount: {
    fontSize: 18,
    color: '#666',
    marginBottom: 1,
    marginLeft: 10,
  },
 
   infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Align the location and amount to the right
    alignItems: 'flex-start',
  },
});

export default OrderListComp;