import React from 'react';
import { View, Text, StyleSheet, Touchable,Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ProductListComp = ({ name, price,image,onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
    <View>
<View style={styles.views}>
      <Text style={styles.name}>{name}</Text>
     

      <Text style={styles.price}>{price}</Text>
      </View>
      </View>
      <View style={styles.avatarContainer}>
                 <Image source={{ uri: image }} style={styles.image} />
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
    shadowOffset: {
      width: 5,
      height: 2,
    },
    width: 370, // Adjust the width value to your desired width
    height: 80, // Adjust the height value to your desired height
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,

    flexDirection: 'row', // Align the content and avatarContainer horizontally
    alignItems: 'center', // Center align vertically
},

  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,

  },
  price: {
    fontSize: 18,
    color: '#666',
    marginBottom:5,
   
   
  },
  views:{
alignItems:'flex-start',
marginLeft:5
  },
  img:{
    width:55,
    height:55
  },
  imageContainer: {
    width: 80, // Adjust the width value to your desired width
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 27.5, // Make the image circular
  },
  avatarContainer:{
    backgroundColor:'#D9D9D9',
    borderRadius:100,
    height:60,
    width:60,
    justifyContent:'center',
    alignItems:'center',
    marginLeft: 'auto', // Align the avatarContainer to the right side
    marginRight: 10,
 
  }
});

export default ProductListComp;