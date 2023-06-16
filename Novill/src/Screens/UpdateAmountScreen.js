import React, { useState, useContext } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from 'react-native';
import { Input, Button } from 'react-native-elements';
import Spacer from './Components/Spacer';
import { Context as AuthContext } from './context/AuthContext';
import { NavigationEvents } from 'react-navigation';
import Server from './api/Server';

const UpdateAmountScreen = (props) => {
  const { state, clearErrorMessage } = useContext(AuthContext);
  const prod = props.navigation.state.params.prod;
  const a = prod.amount;
  const [amount, setAmount] = useState();

  const handleUpdate = async () => {
    const response = await Server.post('/UpdateAmount', {
      prod,
      amount,
    });
    const pharm = response.data.pharm;
    props.navigation.navigate('PharmAccount', { pharm: pharm });
  };

  return (
    <>
      <ImageBackground
        source={require("../Screens/images/background.jpg")}
        style={{ width: '100%', height: '100%' }}
      >
        <NavigationEvents onWillFocus={clearErrorMessage} />
        <View style={styles.pageContainer}>
          <View style={styles.container}>
            <Spacer />
            <Spacer />
            <Spacer />
            <Text style={styles.productName}>{prod.prodname}</Text>
            <Spacer />
            <Spacer />
            <TextInput
              label="Amount"
              value={amount}
              onChangeText={setAmount}
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.input}
            />
            <TouchableOpacity
              style={styles.button}
              title="Update"
              onPress={handleUpdate}
            >
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
            <Spacer />
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
    marginBottom: 150,
  },
  productName: {
    color: '#000',
    fontSize: 19,
    fontWeight: 'bold',
    marginVertical: 1,
    paddingVertical: 0,
    bottom: -20,
  },
  input: {
    borderRadius: 100,
    color: 'black',
    paddingHorizontal: 70,
    width: '120%',
    backgroundColor: 'rgb(220, 220, 220)',
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 170,
    width: '50%',
    marginTop: 20,
    alignItems: 'center',
     borderColor: 'green',
         borderWidth: 2,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default UpdateAmountScreen;
