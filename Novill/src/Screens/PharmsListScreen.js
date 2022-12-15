import React,{useContext,useEffect, useState} from 'react';
import { Context as AuthContext} from './context/AuthContext';
import { SafeAreaView } from 'react-navigation';
import {View,Button,StyleSheet,Text,FlatList,ImageBackground} from 'react-native';
import Spacer from './Components/Spacer';
import GlobalContex from './context/CContex';
import Server from './api/Server';

const PharmsListScreen=(pharms)=>{
    //const {signout,getPharms} = useContext(AuthContext);
    const [loaded,updateloaded] =useState(false)
    const [pharmsCollection,setPharmsCollection]=useState();
    //let pharmsCollection=[];
    const myuserpharms=useContext(GlobalContex);
    //let a=[];
    useEffect(() => {(async () => {
            try {
                const response = await Server.get('/getPharms') 
                updateloaded(true);
                const pharmsArray = response.data.pharms1;
                //console.log("ASDGHGSDF--------------------:",pharmsArray);
                setPharmsCollection(pharmsArray);
                //pharmsCollection.set(pharmsArray);
                //pharmsCollection=pharmsArray;
                console.log('Pharm collection length is:',pharmsCollection.length)
                //pharmsCollection=pharmsArray;

            } catch (err) {
                console.log('error in useEffect');
                console.log(err)
            }
    
        })()
    },[loaded] )


    return(
        <ImageBackground source={require("../Screens/images/im.jpg")} style={{ width:'100%', height:'100%' }} >

        {/*
         <SafeAreaView forceInset={{top:'always'}}>
            <Text style={{fontSize: 48}}> Pharms List </Text>
            <Spacer/>
            <Button title="Sign out" onPress={signout}/>
            <Spacer/>
            <Text>Here is</Text>
            <Spacer/>
        </SafeAreaView>*/}

        <SafeAreaView>
            <Text style={{fontSize: 40,
              fontWeight:'bold'
              ,marginVertical:5,
              left:10,
            top:20,
            
            
            }}> Pharm stores</Text>
            <Spacer/>
            <FlatList data={pharmsCollection} 
                renderItem={({item})=>{return <Text style={{fontSize:25}}>{item.pname}</Text>}}/>
        </SafeAreaView>
        </ImageBackground>
        );
}

const styles=StyleSheet.create({});

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