import React, { useContext } from 'react';
import { Context as AuthContext } from './context/AuthContext';
import { SafeAreaView } from 'react-navigation';
import {
  View,
  Button,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import Spacer from './Components/Spacer';
import GlobalContex from './context/CContex';
import Server from './api/Server';
import ProductListComp from './Components/ProductListComp';
import StartButton from './Components/StartButton';
import PharmListComp from './Components/PharmListComp';
import GreenButton from './Components/GreenButton';
import CancelButton from './Components/CancelButton';
import PassDeliveryButton from './Components/PassDeliveryButton';
import RedButton from './Components/RedButton';
import BlueButton from './Components/BlueButton';

const ShowOrderForPharmScreen = (props) => {
  const { changestatus } = useContext(AuthContext);
  const order = props.navigation.state.params.order;
  let orderdproducts = order.products;
  const pharm = props.navigation.state.params.pharm;
  const del = order.del;

  return (
    <ImageBackground
      source={require("../Screens/images/img.jpeg")}
      style={{ width: '100%', height: '100%' }}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <Image
            source={require("../Screens/images/NOVILL-02-03.png")}
            style={styles.logo}
          />
          <View style={styles.orderInfoContainer}>
            <Text style={styles.tex1}>Order {order._id}</Text>
            <Text style={styles.tex2}>Date: {order.date}</Text>
          </View>
        </View>

        <Text style={styles.userName}>
          {order.user.Fname} {order.user.Lname}
        </Text>
        <Spacer />
        <FlatList
          data={orderdproducts}
          style={styles.productList}
          renderItem={({ item }) => (
            <ProductListComp
              style={styles.item}
              name={item.prodname}
              price={item.price + '$'}
              image={item.image}
              onPress={() => console.log('Product has been clicked')}
            />
          )}
          keyExtractor={(item) => item.prodname}
        />

        <View style={styles.orderDetailsContainer}>
          <Text style={styles.orderDetailText}>Products: {order.amount}</Text>
          <Text style={styles.orderDetailText}>
            Address: {order.address.city} {order.address.street}, {order.address.building}
          </Text>
          <Text style={styles.orderDetailText}>Total price: {order.prise + '$'}</Text>
          <Text style={styles.orderDetailText}>Delivery details:</Text>
          <Text style={styles.orderDetailText}>
            Name: {del.Fname} {del.Lname}
          </Text>
          <Text style={styles.orderDetailText}>Phone: {del.phone}</Text>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: '20%',
    height: '150%',
    marginTop: 30,
  },
  orderInfoContainer: {
    marginLeft: 20,
  },
  tex1: {
    fontSize: 18,
    fontWeight: 'bold',
  
      right:15
  
  },
  tex2: {
    fontSize: 17,
    fontWeight: 'bold',
      right:15
  },
  userName: {
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 10,
    left: 10,
    top: 40,
    color: '#706F6A',
  },
  productList: {
    marginTop: 20,
    marginLeft: 10,
  },
  item: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#fff',
    fontSize: 20,
  },
  orderDetailsContainer: {
    marginTop: 10,
    marginLeft: 10,
  },
  orderDetailText: {
    fontSize: 20,
    color: '#32322F',
    marginBottom: 1,
  },
});

export default ShowOrderForPharmScreen;
