import React,{useContext,useEffect, useState} from 'react';
import { Context as AuthContext} from './context/AuthContext';
import { SafeAreaView } from 'react-navigation';
import {View,Button,StyleSheet,Text,FlatList} from 'react-native';
import Spacer from './Components/Spacer';
import GlobalContex from './context/CContex';
import Server from './api/Server';

const WaitingDeliviriesScreen=(pharms)=>{
    //const {signout,getPharms} = useContext(AuthContext);
    const [loaded,updateloaded] =useState(false)
    const [delsCollection,setDelsCollection]=useState();
    //const myuserpharms=useContext(GlobalContex);
    useEffect(() => {(async () => {
            try {
                const response = await Server.get('/getWaitingDeliviries') 
                updateloaded(false);
                const delsArray = response.data.dels1;
                //console.log("ASDGHGSDF--------------------:",pharmsArray);
                setDelsCollection(delsArray);
                //pharmsCollection.set(pharmsArray);
                //pharmsCollection=pharmsArray;
                //console.log('Pharm collection length is:',pharmsCollection.length)
                //pharmsCollection=pharmsArray;

            } catch (err) {
                console.log('error in useEffect');
                console.log(err)
            }
    
        })()
    },[loaded] )


    return(
        /*
         <SafeAreaView forceInset={{top:'always'}}>
            <Text style={{fontSize: 48}}> Pharms List </Text>
            <Spacer/>
            <Button title="Sign out" onPress={signout}/>
            <Spacer/>
            <Text>Here is</Text>
            <Spacer/>
        </SafeAreaView>*/

        <SafeAreaView>
            <Text h3> Delivery Employees</Text>
            <Spacer/>
            <FlatList data={delsCollection} 
                renderItem={({item})=>{return <Text>{item.email}</Text>}}/>
        </SafeAreaView>
        );
}

const styles=StyleSheet.create({});

export default WaitingDeliviriesScreen;

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