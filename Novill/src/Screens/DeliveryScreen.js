import React from 'react';
import { View, Button, StyleSheet, Text, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Spacer from './Components/Spacer';

const DeliveryScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../Screens/images/background.jpg")}
      style={{ width: '100%', height: '100%' }}
    >
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate('SigninDelivery')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Already have an account? Sign in here</Text>
        </TouchableOpacity>
        <Spacer />
        <TouchableOpacity
          onPress={() => navigation.navigate('SignupDelivery')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Don't have an account? Sign Up here</Text>
        </TouchableOpacity>
        <Spacer />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 300,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 170,
    marginTop: 10,
    width: '90%',
    borderColor: 'green',
    alignItems: 'center',
    borderWidth: 2,
    alignSelf: 'flex-end',
  },
  buttonText: {
    color: '#000',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default DeliveryScreen;
