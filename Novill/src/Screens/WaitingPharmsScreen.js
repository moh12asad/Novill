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
<ImageBackground source={require("../Screens/images/img.jpeg")} style={{ width:'100%', height:'100%' }} >


        <SafeAreaView>
            <Text style={{fontSize: 35,
              fontWeight:'bold'
              ,marginVertical:5,
              left:10,
            top:10,
            
            
            }}> Pharms</Text>
               
            <FlatList  style={styles.container} data={wpharmsCollection} 
                renderItem={({item})=>{return <><Text style={styles.name}>{item.pname}  </Text><Text style={styles.email}>{item.location}</Text><View
style={{
          height: 1,
          width: "100%",
          backgroundColor: "#607D8B",
        }}
      /></>}}/>

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
        </SafeAreaView>

        
        </ImageBackground>
        );
}

const styles=StyleSheet.create({

     container: {
    backgroundColor: '#fff',
    borderRadius: 10,
 
      width: '100%',
      height: '70%',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
 
    marginTop:20
  },
    item: {
  marginTop: 20,
  padding:5,
  backgroundColor: '#fff',
  fontSize:25,
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

export default WaitingPharmsScreen;

