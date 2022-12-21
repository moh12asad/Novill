import React,{useContext,useEffect, useState} from 'react';
import { Context as AuthContext} from './context/AuthContext';
import { SafeAreaView } from 'react-navigation';
import {View,Button,StyleSheet,Text,FlatList,ImageBackground,ScrollView} from 'react-native';
import Spacer from './Components/Spacer';
import GlobalContex from './context/CContex';
import Server from './api/Server';
import { TouchableOpacity } from 'react-native-gesture-handler';

const WaitingPharmsScreen=(props)=>{
    //const {signout,getPharms} = useContext(AuthContext);
    const [loaded,updateloaded] =useState(false)
    const [wpharmsCollection,setWPharmsCollection]=useState();

    const myuserpharms=useContext(GlobalContex);
    useEffect(() => {(async () => {
            try {
                updateloaded(false);
                const response = await Server.get('/getWaitingPharms') 

                const wpharmsArray = response.data.pharms1;
                setWPharmsCollection(wpharmsArray);
            } catch (err) {
                console.log('error in useEffect');
                console.log(err)
            }
    
        })()
    },[loaded] )


    return(
<ImageBackground source={require("../Screens/images/im.jpg")} style={{ width:'100%', height:'100%' }} >


        <SafeAreaView>
            <Text style={{fontSize: 35,
              fontWeight:'bold'
              ,marginVertical:5,
              left:10,
            top:20,
            
            
            }}> Pharm stores</Text>
                    <TouchableOpacity onPress={()=>props.navigation.navigate('AcceptPharms')} 
        style={{
        backgroundColor:'#6ba93a',
         borderRadius:1500 ,
          alignItems: 'center',
        width:200,
        marginTop:50,
        marginRight:5,
        paddingVertical:15,
        marginVertical:10,
        alignSelf:'flex-end'
        
    }} >
                <Text style={{ color:'#000',fontSize:18,
   fontWeight:"bold"}} >Accept pharm</Text>
        </TouchableOpacity>
            <FlatList  style={{  marginVertical:-20,
        marginStart:10,
        padding:10,

        top:-50}} data={wpharmsCollection} 
                renderItem={({item})=>{return <Text style={{fontSize:25,marginVertical:10}}>{item.pname}</Text>}}/>
        </SafeAreaView>

        
        </ImageBackground>
        );
}

const styles=StyleSheet.create({});

export default WaitingPharmsScreen;

