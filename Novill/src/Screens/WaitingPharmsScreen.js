import React,{useContext,useEffect, useState} from 'react';
import { Context as AuthContext} from './context/AuthContext';
import { SafeAreaView } from 'react-navigation';
import {View,Button,StyleSheet,Text,FlatList,ImageBackground} from 'react-native';
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
<ImageBackground source={require("../Screens/images/im.jpg")} style={{ width:'100%', height:'100%' }} >


        <SafeAreaView>
            <Text style={{fontSize: 40,
              fontWeight:'bold'
              ,marginVertical:5,
              left:10,
            top:20,
            
            
            }}> Pharm stores</Text>
            <Spacer/>
            <FlatList data={pharmsCollection} 
                renderItem={({item})=>{return <Text style={{fontSize:30}}>{item.pname}</Text>}}/>
        </SafeAreaView>
        </ImageBackground>
        );
}

const styles=StyleSheet.create({});

export default WaitingPharmsScreen;

