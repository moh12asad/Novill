import React,{useContext,useEffect, useState} from 'react';
import { Context as AuthContext} from './context/AuthContext';
import { SafeAreaView } from 'react-navigation';
import {View,Button,StyleSheet,Text,FlatList,ImageBackground} from 'react-native';
import Spacer from './Components/Spacer';
import GlobalContex from './context/CContex';
import Server from './api/Server';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const AdminDelsListScreen=(props)=>{
    //const {signout,getPharms} = useContext(AuthContext);
    const [loaded,updateloaded] =useState(false)
    const [delsCollection,setDelsCollection]=useState();
    const myuserpharms=useContext(GlobalContex);
    useEffect(() => {(async () => {
        try {
            updateloaded(false);
            const response = await Server.get('/getAllDels') 
            const delsArray = response.data.dels1;
            setDelsCollection(delsArray);

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
            
            
            }}> Delivery Employees</Text>
            <TouchableOpacity onPress={()=>props.navigation.navigate('DeleteDel')} 
        style={styles.TouchStyle} >
                <Text style={{ color:'#000',fontSize:18,
   fontWeight:"bold"}} >Remove Delivery</Text>
   <Spacer/>
           <TouchableOpacity onPress={()=>props.navigation.navigate('WaitingDels')} 
        style={styles.TouchStyle}>
                <Text style={{ color:'#000',fontSize:18,
   fontWeight:"bold"}} >Deliviries Waiting List</Text>
        </TouchableOpacity>

   
        </TouchableOpacity>
            <FlatList  data={delsCollection} 
                renderItem={({item})=>{return <Text style={{fontSize:15,marginVertical:30}}>{item.email+' '+item.Fname+' '+item.Lname}</Text>}}/>
                
        </SafeAreaView>
        </ImageBackground>
        );
        
}

const styles=StyleSheet.create({
    textStyle:{

    },
    TouchStyle:{
        backgroundColor:'#6ba93a',
         borderRadius:1500 ,
          alignItems: 'center',
        width:150,
        marginTop:100,
        marginRight:170,
        paddingVertical:15,
        marginVertical:10,
        alignSelf:'flex-end'
        
    }
});

export default AdminDelsListScreen;

