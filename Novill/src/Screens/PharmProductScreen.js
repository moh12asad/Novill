import React, { useContext } from 'react';
import { Context as AuthContext } from './context/AuthContext';
import { SafeAreaView } from 'react-navigation';
import { View, Button, StyleSheet, Text, FlatList, TouchableOpacity, ImageBackground, Image } from 'react-native';
import Spacer from './Components/Spacer';
import GreenButton from './Components/GreenButton';
import BlueButton from './Components/GreenButton';
import RedButton from './Components/GreenButton';
import GlobalContex from './context/CContex';
import Server from './api/Server';
import PharmListComp from './Components/PharmListComp';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import ProductsDeletButton from './Components/ProductsDeletButton';

const PharmProductScreen = (props) => {
  const pharm = props.navigation.state.params.pharm1;
  const prod = props.navigation.state.params.item;
  const { deleteproduct } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ height: '80%' }}>
        <Spacer />
        <View>
          <Image source={{ uri: prod.image }} style={styles.img} />
          <View style={{ right: 50 }}>
            <Text style={styles.title}>Name: {prod.prodname}</Text>
            <Text style={styles.title}>price: {prod.price +'$'}</Text>
            <Text style={styles.title}>quantity: {prod.amount}</Text>
            <Text style={styles.title}>desc: {prod.desc}</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <ProductsDeletButton title="Edit" onPress={() =>props.navigation.navigate('EditProductForPharm', { prod: prod, pharm: pharm }) }></ProductsDeletButton>
          <ProductsDeletButton title="Update quantity" onPress={() => props.navigation.navigate('UpdateAmount', { prod: prod, pharm: pharm })}></ProductsDeletButton>
          <ProductsDeletButton title="Delete" onPress={() => deleteproduct({ prod, pharm })}></ProductsDeletButton>
        </View>
        <Spacer/>
      </SafeAreaView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3EAC7',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -50
  },
  title: {
    fontSize: 18,
    color: "#474747",
    marginLeft: 70
  },
  img: {
    alignSelf: "center",
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 120,
    height: 330,
    width: 400,
    bottom: 70
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#fff',
    borderTopWidth: 2,
    borderColor: '#ccc',
    borderRadius: 150,
    position: 'absolute',
    bottom: -40,
    left: 0,
    right: 0,
    borderColor:'gray'
  },
});

export default PharmProductScreen;
