import React, { useContext, useEffect, useState } from 'react';
import { Context as AuthContext } from './context/AuthContext';
import { SafeAreaView } from 'react-navigation';
import { View, Button, StyleSheet, Text, FlatList, ImageBackground, TouchableOpacity } from 'react-native';
import Spacer from './Components/Spacer';
import GlobalContex from './context/CContex';
import Server from './api/Server';

const WaitingPharmsScreen = (props) => {
  const [loaded, updateloaded] = useState(false);
  const [wpharmsCollection, setWPharmsCollection] = useState();
  const myuserpharms = useContext(GlobalContex);

  useEffect(() => {
    (async () => {
      try {
        updateloaded(false);
        const response = await Server.get('/getWaitingPharms');
        const wpharmsArray = response.data.pharms1;
        setWPharmsCollection(wpharmsArray);
      } catch (err) {
        console.log('error in useEffect');
        console.log(err);
      }
    })();
  }, [loaded]);

  return (
    <ImageBackground source={require("../Screens/images/img.jpeg")} style={{ width: '100%', height: '100%' }}>
      <SafeAreaView>
        <Text style={styles.title}>Pharmacies are waiting for approval</Text>
        <FlatList
          style={styles.container}
          data={wpharmsCollection}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.name}>{item.pname}</Text>
              <Text style={styles.email}>{item.location}</Text>
              <View style={styles.separator} />
            </View>
          )}
        />
        <TouchableOpacity onPress={() => props.navigation.navigate('AcceptPharms')} style={styles.acceptButton}>
          <Text style={styles.buttonText}>Accept pharm</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 5,
    left: 10,
    top: 10,
  },
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '100%',
    height: '70%',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginTop: 20,
  },
  itemContainer: {
    marginTop: 20,
    padding: 5,
    backgroundColor: '#fff',
    fontSize: 25,
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#607D8B',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  email: {
    fontSize: 18,
    color: '#666',
  },
  acceptButton: {
     backgroundColor: '#fff',

    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 170,
    borderWidth: 1,
     padding:40,

    width:'50%',
right:10,
    borderColor: 'green',
    alignItems:'center',
     borderWidth: 2,
    alignSelf: 'flex-end',
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default WaitingPharmsScreen;
