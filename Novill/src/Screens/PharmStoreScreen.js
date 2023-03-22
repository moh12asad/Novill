import React,{useContext,useEffect, useState} from 'react';
import { Context as AuthContext} from './context/AuthContext';
import { SafeAreaView } from 'react-navigation';
import {View,Button,StyleSheet,Text,FlatList,ImageBackground} from 'react-native';
import Spacer from './Components/Spacer';
import GlobalContex from './context/CContex';
import Server from './api/Server';
import PharmListComp from './Components/PharmListComp';

const PharmStoreScreen=(props)=>{
    //const {signout,getPharms} = useContext(AuthContext);
    const {state,productlistforuser,clearErrorMessage}=useContext(AuthContext);
    const [loaded,updateloaded] =useState(false)
    const [productsCollection,setproductsCollection]=useState();
    const [Pharm,setPharm]=useState();
    const pharm=props.navigation.state.params.pharm;
    //let pharmsCollection=[];
    const myuserpharms=useContext(GlobalContex); 
    //let a=[];
    useEffect(() => {(async () => {
            try {
                //const response = await Server.get('/getPharms') 
                updateloaded(true);
                //const pharmsArray = response.data.pharms1;
                //console.log("ASDGHGSDF--------------------:",pharmsArray);
                setPharm(pharm);
                setproductsCollection(pharm.products);
                //pharmsCollection.set(pharmsArray);
                //pharmsCollection=pharmsArray;
                //pharmsCollection=pharmsArray;
                console.log('PharmStore:');
                console.log(pharm.pname)

            } catch (err) {
                console.log('error in useEffect');
                console.log(err)
            }
    
        })()
    },[loaded] )


    return(
<ImageBackground source={require("../Screens/images/im.jpg")} style={{ width: '100%', height: '100%' }}>
  <SafeAreaView style={{ height: '80%' }}>
    <Text style={{ fontSize: 40, fontWeight: 'bold', marginVertical: 5, left: 10, top: 5 }}>{pharm.pname}</Text>
    <Spacer />
    <Text style={{ fontSize: 25, marginVertical: 5, left: 10, top: 5 }}>{pharm.location}</Text>
    <FlatList
      data={productsCollection}
      style={{ height: '100%' }}
      renderItem={({ item }) => {
        return <PharmListComp style={styles.item} name={item.prodname} location={item.price} onPress={()=>console.log('PharmStoreScreen button has pressed')}/>;
      }}
    />
  </SafeAreaView>
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
}
});

export default PharmStoreScreen;

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