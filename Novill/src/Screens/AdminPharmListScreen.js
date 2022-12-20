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
            
            <Text style={{fontSize: 40,
              fontWeight:'bold'
              ,marginVertical:5,
              left:10,
            top:20,
            
            
            }}> Pharm stores</Text>
            <TouchableOpacity onPress={()=>props.navigation.navigate('DeletePharm')} 
        style={styles.TouchStyle} >
                <Text style={{ color:'#000',fontSize:18,
   fontWeight:"bold"}} >Remove Pharm</Text>
   
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>props.navigation.navigate('WaitingPharms')} 
        style={styles.TouchStyle2} >
                <Text style={{ color:'#000',fontSize:18,
   fontWeight:"bold"}} >Waiting Pharms</Text>
   
        </TouchableOpacity>
            <FlatList  data={pharmsCollection} 
                renderItem={({item})=>{return <Text style={styles.textStyle}>{item.pname}</Text>}}/>
                
        </SafeAreaView>
        </ImageBackground>
        );
        
}

const styles=StyleSheet.create({
    textStyle:{
        marginVertical:30,
        fontSize:15
    },
    TouchStyle:{
        backgroundColor:'#6ba93a',
         borderRadius:1500 ,
          alignItems: 'center',
        width:150,
        marginTop:20,
        marginRight:150,
        paddingVertical:15,
        marginVertical:10,
        alignSelf:'flex-start'
        
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

