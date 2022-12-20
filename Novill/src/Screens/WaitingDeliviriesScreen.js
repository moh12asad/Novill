import React,{useContext,useEffect, useState} from 'react';
import { Context as AuthContext} from './context/AuthContext';
import { SafeAreaView } from 'react-navigation';
import {View,Button,StyleSheet,Text,FlatList,ImageBackground} from 'react-native';
import Spacer from './Components/Spacer';
import GlobalContex from './context/CContex';
import Server from './api/Server';
import { TouchableOpacity } from 'react-native-gesture-handler';


const WaitingDeliviriesScreen=(props)=>{
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
            <Text style={{fontSize: 35,
              fontWeight:'bold'
              ,marginVertical:5,
              left:10,
            top:20,
            
            
            }}> Delivery Employees</Text>
            <Spacer/>
            <FlatList data={delsCollection} 
                renderItem={({item})=>{return <Text style={{fontSize:33,alignItems:'center'}}>{item.email}</Text>}}/>
                        <TouchableOpacity onPress={()=>props.navigation.navigate('AcceptDels')} 
        style={{
        backgroundColor:'#6ba93a',
         borderRadius:1500 ,
          alignItems: 'center',
        width:200,
        marginTop:100,
        marginRight:170,
        paddingVertical:15,
        marginVertical:10,
        alignSelf:'flex-end'
        
    }} >
                <Text style={{ color:'#000',fontSize:18,
   fontWeight:"bold"}} >Accept deliveries</Text>
        </TouchableOpacity>
        </SafeAreaView>
        </ImageBackground>
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