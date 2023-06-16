import React, { useContext } from 'react';
import { Context as AuthContext } from './context/AuthContext';
import { SafeAreaView } from 'react-navigation';
import { View, Button, StyleSheet, Text, FlatList, TouchableOpacity, ImageBackground, Image } from 'react-native';
import Spacer from './Components/Spacer';
import GlobalContex from './context/CContex';
import Server from './api/Server';
import { Alert } from 'react-native';
import PharmListComp from './Components/PharmListComp';
import GreenButton from './Components/GreenButton';
import PassDeliveryButton from './Components/PassDeliveryButton';
import TakeOrderButton from './Components/TakeOrderButton';
const ShowOrderScreen = (props) => {
  const { state, clearErrorMessage } = useContext(AuthContext);
  const order = props.navigation.state.params.order;
  const pharm = order.pharm;
  const address = order.address;
  const del = props.navigation.state.params.del;
  console.log("\ndel is:\n=============================\n", del, "\n=============================\n")

  const paymethod = order.payMethod;
  const productsToOrder = order.vproducts;
  const user = order.user;

  return (
    <ImageBackground source={require("../Screens/images/BackGround1.jpg")} style={styles.background}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.heading}>Order for: {user.Lname} {user.Fname}</Text>
        <Spacer />
        <Text style={styles.subtitle}>Pharm name: {pharm.pname}, {pharm.location}</Text>
        <Text style={styles.subtitle}>Address: {address.city} {address.street} {address.building} {address.floor} {address.apartnum}</Text>
        <Text style={styles.subtitle}>Order:</Text>
        <FlatList
          data={productsToOrder}
          renderItem={({ item }) => {
            return <PharmListComp style={styles.item} name={item.prodname} />;
          }}
        />
        <View>
          <Text style={styles.subtitle}>Pay method: {paymethod}</Text>
        </View>
        <TakeOrderButton title="Take" onPress={() => DelIsComing(order, del, props)} />
      </SafeAreaView>
    </ImageBackground>
  );
}

const DelIsComing = async (order, del, props) => {
  const response = await Server.post('/DelIsComing', {
    order,
    del
  });
  console.log("\nResponse.data.orders:\n=============================\n", response.data.order, "\n=============================\n");
  console.log("\nResponse.data.orders:\n=============================\n", response.data.del, "\n=============================\n");
  const order1 = response.data.order;
  const pharm1 = response.data.pharm;
  const del1 = response.data.del;
  const pname = pharm1.pname;
  const location = pharm1.location;
  Alert.alert('Go to Pharm');
  props.navigation.navigate('WaitingForPharmApprove', { order: order1, del: del1, pharm: pharm1 });
}

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%'
  },
  container: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    height: '80%'
  },
  heading: {
    fontSize: 40,
    fontWeight: '500',
    marginVertical: 5,
    left: 10,
    top: 5
  },
  subtitle: {
    fontSize: 20,
    color: "#000",
    marginLeft: 10
  },
  item: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#fff',
    fontSize: 20
  }
});

export default ShowOrderScreen;
