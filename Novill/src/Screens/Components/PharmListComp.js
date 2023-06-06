import React from 'react';
import { View, Text, StyleSheet, Touchable,Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const PharmListComp = ({ name, location,image,onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.textContainer}>

      <Text style={styles.name}>{name}</Text>
      <Text style={styles.location}>{location}</Text>
      </View>
 {/*<View style={styles.avatarContainer}>
                 <Image source={{ uri: image }} style={styles.image} />
</View>*/}
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
    justifyContent: 'space-around',
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  avatarContainer: {
    backgroundColor: '#D9D9D9',
    borderRadius: 100,
    height: 65,
    width: 65,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,
  },
  image: {
    width: 59,
    height: 59,
    borderRadius: 35,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop:49
  },
  location: {
    fontSize: 18,
    color: '#666',
        marginTop:10

  },
});
export default PharmListComp;