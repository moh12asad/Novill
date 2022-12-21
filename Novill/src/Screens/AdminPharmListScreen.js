import React,{useContext,useEffect, useState} from 'react';
import { Context as AuthContext} from './context/AuthContext';
import { SafeAreaView } from 'react-navigation';
import {View,Button,StyleSheet,Text,FlatList,ImageBackground} from 'react-native';
import Spacer from './Components/Spacer';
import GlobalContex from './context/CContex';
import Server from './api/Server';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const AdminPharmListScreen=(props)=>{
    //const {signout,getPharms} = useContext(AuthContext);
    const [loaded,updateloaded] =useState(false)
    const [pharmsCollection,setPharmsCollection]=useState();
    const myuserpharms=useContext(GlobalContex);
    useEffect(() => {(async () => {
        try {
            updateloaded(false);
            const response = await Server.get('/getAllPharms') 

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
            <View >
            <Text style={{fontSize: 30,
              fontWeight:'bold',
              marginVertical:5,
              left:50,
            top:10,
            marginTop:27,
            marginBottom:10 
            }}> Pharm stores</Text>
            </View>
            <TouchableOpacity style={{ backgroundColor:'#6ba93a',
        borderRadius:150 ,
        alignItems: 'center',
        width:200,
        marginRight:25,
        marginEnd:10,
        marginHorizontal:15,
        margin:25,
        paddingVertical:5,
        marginVertical:10,
        marginTop:100,
        alignSelf:'flex-end',}} onPress={()=>props.navigation.navigate('DeletePharm')} 
         >
                <Text style={{ color:'#000',fontSize:18,
   fontWeight:"bold"}} >Remove Pharm</Text>
   
        </TouchableOpacity>

        <TouchableOpacity style={{ backgroundColor:'#6ba93a',
        borderRadius:150 ,
        alignItems: 'center',
        width:200,
        marginRight:25,
        marginEnd:10,
        marginHorizontal:15,
        margin:20,
        paddingVertical:5,
        marginVertical:10,
        marginTop:100,
        alignSelf:'flex-end',}} onPress={()=>props.navigation.navigate('WaitingPharms')} 
       >
                <Text style={{ color:'#000',fontSize:18,
   fontWeight:"bold"}} >Waiting Pharms</Text>
   
        </TouchableOpacity>
            <FlatList style={{  marginVertical:30,
        fontSize:20,
        marginStart:0,
        top:-250}}  data={pharmsCollection} 
                renderItem={({item})=>{return <Text style={styles.textStyle}>{item.pname}</Text>}}/>
                
        </SafeAreaView>
        </ImageBackground>
        );
        
}

const styles=StyleSheet.create({
    textStyle:{
       marginVertical:30,
        fontSize:20,
        marginBottom:-50,
        marginTop:50,
        marginStart:10,
        top:-100
    },
    TouchStyle:{
        backgroundColor:'#6ba93a',
        borderRadius:150 ,
        alignItems: 'center',
        width:200,
        marginRight:25,
        marginEnd:10,
        marginHorizontal:15,
        margin:25,
        paddingVertical:5,
        marginVertical:10,
        alignSelf:'flex-end',
        marginTop:120
    },
    TouchStyle2:{
        backgroundColor:'#6ba93a',
        borderRadius:1500 ,
         alignItems: 'center',
       width:150,
       marginTop:50,
       marginRight:200,
       paddingVertical:15,
       marginVertical:10,
       alignSelf:'flex-end'

    }
});

export default AdminPharmListScreen;

