import React,{useContext,useEffect, useState} from 'react';
import { Context as AuthContext} from './context/AuthContext';
import { SafeAreaView } from 'react-navigation';
import {View,Button,StyleSheet,Text,FlatList,ImageBackground} from 'react-native';
import Spacer from './Components/Spacer';
import GlobalContex from './context/CContex';
import Server from './api/Server';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import PharmListComp from './Components/PharmListComp';

const AdminPharmListScreen=(props)=>{
    //const {signout,getPharms} = useContext(AuthContext);
    const [loaded,updateloaded] =useState(false)
    const [pharmsCollection,setPharmsCollection,productlistforuser]=useState(AuthContext);
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
    <ImageBackground source={require("../Screens/images/img.jpeg")} style={{ width:'100%', height:'100%' }} >
    
        <SafeAreaView>
            <View >
            <Text style={{fontSize: 30,
              fontWeight:'bold',
              marginVertical:5,
              left:50,
            top:-10,
            marginTop:27,
            marginBottom:10 
            }}> Pharm stores</Text>
            </View>
            <View>
                        <FlatList
      data={pharmsCollection}
     style={styles.container}
      renderItem={({ item }) => {
        return <PharmListComp style={styles.item} name={item.pname} location={item.location} image={item.image} onPress={()=>productlistforuser({item})}/>;
      }}
    /> 
            </View>
            <View>
            <TouchableOpacity style={{backgroundColor:'#6ba93a',
        borderRadius:150 ,
        alignItems: 'center',
        width:170,
              left:200,
        top:20,
        marginHorizontal:20,
        paddingVertical:5,
        marginVertical:8,
         alignSelf: 'stretch',
       
  
        }} onPress={()=>props.navigation.navigate('DeletePharm')} 
         >
                <Text style={{ color:'#000',fontSize:18,
   fontWeight:"bold"}} >Remove Pharm</Text>
   
        </TouchableOpacity>
</View>


<View>
        <TouchableOpacity style={{ backgroundColor:'#6ba93a',
        borderRadius:150 ,
        alignItems: 'center',
        width:170,
        top:-31,
        left:-20,
        marginHorizontal:20,
        paddingVertical:5,
        marginVertical:8,

      }} onPress={()=>props.navigation.navigate('WaitingPharms')} 
       >
                <Text style={{ color:'#000',fontSize:18,
   fontWeight:"bold"}} >Waiting Pharms</Text>
   
        </TouchableOpacity>
   </View>
        </SafeAreaView>
        </ImageBackground>
        );
        
}

const styles=StyleSheet.create({
  
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
 
      width: '110%',
      height: '75%',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
 left:10,
    marginTop:-15
  },
    item: {
  marginTop: 20,
  padding:5,
  backgroundColor: '#fff',
  fontSize: 10,
}
});

export default AdminPharmListScreen;

