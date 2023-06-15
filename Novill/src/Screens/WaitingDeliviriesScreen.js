import React, { useContext, useEffect, useState } from 'react';
import { Context as AuthContext } from './context/AuthContext';
import { SafeAreaView } from 'react-navigation';
import { View, Button, StyleSheet, Text, FlatList, ImageBackground } from 'react-native';
import Spacer from './Components/Spacer';
import GlobalContex from './context/CContex';
import Server from './api/Server';
import { TouchableOpacity } from 'react-native-gesture-handler';

const WaitingDeliviriesScreen = (props) => {
  const [loaded, updateloaded] = useState(false);
  const [delsCollection, setDelsCollection] = useState();

  useEffect(() => {
    (async () => {
      try {
        const response = await Server.get('/getWaitingDeliviries');
        updateloaded(false);
        const delsArray = response.data.dels1;
        setDelsCollection(delsArray);
      } catch (err) {
        console.log('error in useEffect');
        console.log(err);
      }
    })();
  }, [loaded]);

  const renderSeparator = () => {
    return <View style={styles.separator} />;
  };

  return (
    <ImageBackground
      source={require("../Screens/images/img.jpeg")}
      style={{ width: '100%', height: '100%' }}
    >
      <SafeAreaView>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Delivery Employees</Text>
        </View>
        <FlatList
          data={delsCollection}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.nameText}>{item.Fname + ' ' + item.Lname}</Text>
              <Text style={styles.emailText}>{item.email}</Text>
            </View>
          )}
          
        />
        <TouchableOpacity
          onPress={() => props.navigation.navigate('AcceptDels')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Accept deliveries</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    marginVertical: 5,
    left: 10,
    top: 10,
    marginTop: 27,
    marginBottom: 10,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginVertical: 5,
    left: 10,
 
  },
  itemContainer: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  emailText: {
    fontSize: 16,
  },
  separator: {
    height: 1,
    backgroundColor: '#607D8B',
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 170,
    borderWidth: 2,
    borderColor: 'green',
    alignItems: 'center',
    width: '50%',
    left: 180,
    top:20
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default WaitingDeliviriesScreen;
