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
    <ImageBackground source={require("../Screens/images/img.jpeg")} style={{ width:'100%', height:'100%' }} >
    
        <SafeAreaView>
           <View style={{marginVertical:5,
              left:10,
            top:10,
            marginTop:27,
            marginBottom:10
            }}> 
            <Text style={{fontSize: 25,
              fontWeight:'bold',bottom:35,}}> Delivery Employees</Text>
            </View>
            <View>
                 <FlatList style={styles.container} data={delsCollection} 
                renderItem={({item})=>{return( <><View
            style={{
          height: 1,
          width: "100%",
          backgroundColor: "#607D8B",
        }}
      /><Text style={styles.name}>{item.Fname + ' ' + item.Lname}</Text><Text style={styles.email}>{item.email} </Text><View
            style={{
          height: 1,
          width: "100%",
          backgroundColor: "#607D8B",
        }}
      /></>);}}/>
              
            </View>
            <View>
            <TouchableOpacity onPress={()=>props.navigation.navigate('DeleteDel')}
            style={styles.TouchStyle2}
            >
                <Text style={{ color:'#000',fontSize:18,
   fontWeight:"bold"}} >Remove Delivery</Text>
        </TouchableOpacity>

   <Spacer/>

           <TouchableOpacity onPress={()=>props.navigation.navigate('WaitingDels')} 
        style={styles.TouchStyle}>
                <Text style={{ color:'#000',fontSize:18,
   fontWeight:"bold"}} >Deliveries Waiting</Text>
        </TouchableOpacity>

   </View>
             
        </SafeAreaView>
        </ImageBackground>
        );
        
}

const styles=StyleSheet.create({
    textStyle:{
        marginVertical:15,
        fontSize:20,
        marginBottom:-20,
        marginTop:50,
        marginStart:10,
        
    },
    TouchStyle2:{
 backgroundColor:'#6ba93a',
        borderRadius:150 ,
        alignItems: 'center',
        width:180,
        top:40,
        left:-10,
        marginHorizontal:20,
        paddingVertical:5,
        marginVertical:8,
         alignSelf: 'stretch',
        
    },
    TouchStyle:{
    backgroundColor:'#6ba93a',
        borderRadius:150 ,
        alignItems: 'center',
        width:180,
        top:-40,
        marginBottom:10,
        left:180,
        marginHorizontal:20,
        paddingVertical:5,
        marginVertical:8,
         alignSelf: 'stretch',
    },
    container: {
    backgroundColor: '#fff',
    borderRadius: 10,
 
      width: '100%',
      height: '75%',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
 
    marginTop:-20
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  email: {
    fontSize: 18,
    color: '#666',
  },
});

export default AdminDelsListScreen;

