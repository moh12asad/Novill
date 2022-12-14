import React,{useContext,useEffect, useState} from 'react';
import { Context as AuthContext} from './context/AuthContext';
import { SafeAreaView } from 'react-navigation';
import {View,Button,StyleSheet,Text,FlatList} from 'react-native';
import Spacer from './Components/Spacer';
import GlobalContex from './context/CContex';
import Server from './api/Server';

const WaitingPharmsScreen=(pharms)=>{
    //const {signout,getPharms} = useContext(AuthContext);
    const [loaded,updateloaded] =useState(false)
    const [pharmsCollection,setPharmsCollection]=useState();
    const myuserpharms=useContext(GlobalContex);
    useEffect(() => {(async () => {
            try {
                const response = await Server.get('/getWaitingPharms') 
                updateloaded(false);
                const pharmsArray = response.data.pharms1;
                //console.log("ASDGHGSDF--------------------:",pharmsArray);
                setPharmsCollection(pharmsArray);
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
            <Text h3> Pharm stores</Text>
            <Spacer/>
            <FlatList data={pharmsCollection} 
                renderItem={({item})=>{return <Text>{item.pname}</Text>}}/>
        </SafeAreaView>
        );
}

const styles=StyleSheet.create({});

export default WaitingPharmsScreen;

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