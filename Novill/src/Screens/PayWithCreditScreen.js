import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Text, ImageBackground, Image } from 'react-native';

const PayWithCreditScreen = (props) => {
  const user = props.navigation.state.params.user;
  const cart = user.cart;
  const address = props.navigation.state.params.address;
  const pharm = props.navigation.state.params.pharm;
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [id, setId] = useState('');

  const handlePayment = () => {
    console.log('Payment submitted');
  };

  return (
    <ImageBackground source={require("../Screens/images/image2.jpg")} style={{ width: '100%', height: '100%' }}>
      <View style={styles.container}>
        <Text style={styles.title}>Credit Card Payment</Text>
      <Image source={require("../Screens/images/credit-card-icons-arthurchayka.png")} style={styles.creditCardImage} />
      <Text style={styles.creditCardExample}>Example: 1234 5678 9012 3456</Text>

        <TextInput
          style={styles.input}
          placeholder="Card Number"
          value={cardNumber}
          onChangeText={text => setCardNumber(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Cardholder Name"
          value={cardHolderName}
          onChangeText={text => setCardHolderName(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Cardholder ID"
          value={id}
          onChangeText={text => setId(text)}
        />

        <View style={styles.row}>
          <TextInput
            style={[styles.input, { flex: 1, marginRight: 10 }]}
            placeholder="Expiration Date"
            value={expirationDate}
            onChangeText={text => setExpirationDate(text)}
          />

          <TextInput
            style={[styles.input, { flex: 1, marginLeft: 10 }]}
            placeholder="CVV"
            value={cvv}
            onChangeText={text => setCvv(text)}
          />
        </View>

        <Button title="Pay" onPress={() => props.navigation.navigate('PayWithCreditCard', { cart: cart, address: address, user: user, pharm })} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  creditCardExample: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
  },
  creditCardImage: {
    height: 80,
    width: 350,
    marginBottom: 10,
    right:20
  },
});

export default PayWithCreditScreen;
