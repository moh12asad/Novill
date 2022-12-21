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
           <View style={{marginVertical:5,
              left:10,
            top:10,
            marginTop:27,
            marginBottom:10
            }}> 
            <Text style={{fontSize: 30,
              fontWeight:'bold'}}> Delivery Employees</Text>
            </View>
            <TouchableOpacity onPress={()=>props.navigation.navigate('DeleteDel')}
            style={styles.TouchStyle}
            >
                <Text style={{ color:'#000',fontSize:18,
   fontWeight:"bold"}} >Remove Delivery</Text>
        </TouchableOpacity>

   <Spacer/>

           <TouchableOpacity onPress={()=>props.navigation.navigate('WaitingDels')} 
        style={styles.TouchStyle}>
                <Text style={{ color:'#000',fontSize:18,
   fontWeight:"bold"}} >Deliveries Waiting List</Text>
        </TouchableOpacity>

   
            <FlatList   style={{  marginVertical:-20,
        marginStart:10,
        padding:10,

        top:-40}} data={delsCollection} 
                renderItem={({item})=>{return <Text style={styles.textStyle}>{item.email+' '+item.Fname+' '+item.Lname}</Text>}}/>
                
        </SafeAreaView>
        </ImageBackground>
        );
        
}

const styles=StyleSheet.create({
    textStyle:{
        marginVertical:30,
        fontSize:20,
        marginBottom:-20,
        marginTop:50,
        marginStart:10,
        
    },
    TouchStyle:{
       backgroundColor:'#6ba93a',
        borderRadius:150 ,
        alignItems: 'center',
        width:200,
        marginRight:25,
        marginEnd:20,
        marginHorizontal:15,
        margin:30,
        paddingVertical:5,
        marginVertical:10,
        alignSelf:'flex-end',
        marginTop:20
    }
});

export default AdminDelsListScreen;

