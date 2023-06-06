import React,{useContext,useEffect, useState} from 'react';
import { Context as AuthContext} from './context/AuthContext';
import { SafeAreaView } from 'react-navigation';
import {View,Button,StyleSheet,Text,FlatList,TouchableOpacity,ImageBackground,Image} from 'react-native';
import Spacer from './Components/Spacer';
import GlobalContex from './context/CContex';
import Server from './api/Server';
import PharmListComp from './Components/PharmListComp';

const PharmsListScreen=(props)=>{
    //const {signout,getPharms} = useContext(AuthContext);
    const {state,productlistforuser,clearErrorMessage}=useContext(AuthContext);
    const [loaded,updateloaded] =useState(false)
    const [pharmsCollection,setPharmsCollection]=useState();
    const [cart,setCart]=useState();

    //const u=props.navigation.state.params.user;
    //let pharmsCollection=[];
    const user=props.navigation.state.params.user;
    console.log('The looged in user and passed to pharmslistscreen is:',user);
    const myuserpharms=useContext(GlobalContex); 
    const [isLoading, setIsLoading] = useState(true);
    
useEffect(() => {
  (async () => {
    try {
      /*const response1 = await Server.post('/CreateCart',{
        user
      });
      const cart=response1.data.cart;
      setCart(cart);*/
      const response = await Server.get('/getPharms');
      const pharmsArray = response.data.pharms1;
      setPharmsCollection(pharmsArray);
      setIsLoading(false); // set isLoading to false when data is loaded
    } catch (err) {
      console.log('error in useEffect');
      console.log(err);
      setIsLoading(false); // set isLoading to false when error occurs
    }
  })();
}, []);

if (isLoading) {
  // return loading screen here
}


    return(
<ImageBackground source={require("../Screens/images/BackGround1.jpg")} style={{ width: '100%', height: '100%' }}>
  <SafeAreaView style={{ height: '80%' }}>
    <Text style={{ fontSize: 40, fontWeight: 'bold', marginVertical: 5, left: 10, top: 5 }}>Pharm stores</Text>
    <Spacer />
    <FlatList
      data={pharmsCollection}
      numColumns={2}
  
      renderItem={({ item }) => {
        return <PharmListComp style={styles.item} name={item.pname} location={item.location} image={item.image} onPress={()=>props.navigation.navigate('PharmStore',{pharm:item,user:user})}/>;
      }}
    />
  </SafeAreaView>
  <View style={styles.cartContainer}>
        <TouchableOpacity onPress={() => console.log('cart icon pressed')}>
          <Image source={require('../Screens/images/cart.jpeg')} style={styles.cartImage} />
        </TouchableOpacity>
      </View>
</ImageBackground>

        );
}

const styles=StyleSheet.create({


    container: {
  flex: 1,
  backgroundColor: '#fff',
  paddingTop: 10,
  paddingHorizontal: 10,

},
item: {
  marginTop: 20,
  padding: 10,
  backgroundColor: '#fff',
  fontSize: 20,
},
cartContainer: {
  position: 'absolute',
  bottom: 20,
  right: 20,
},
cartImage: {
  width: 50,
  height: 50,
  borderRadius: 25,
},
});

export default PharmsListScreen;

/*
              <FlatList  style={{ flex: 1, padding: 10 }} data={myuserpharms}
                        renderItem={({item})=>{
                            <View>
                                <Text>
                                    {item.email}
                                </Text>
                            </View>
                        }}    
                />
                */