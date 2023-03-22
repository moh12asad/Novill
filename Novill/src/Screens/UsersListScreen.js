import React,{useContext,useEffect, useState} from 'react';
import { Context as AuthContext} from './context/AuthContext';
import { SafeAreaView } from 'react-navigation';
import {View,Button,StyleSheet,Text,FlatList,ImageBackground,ScrollView} from 'react-native';
import Spacer from './Components/Spacer';
import GlobalContex from './context/CContex';
import Server from './api/Server';
import { TouchableOpacity } from 'react-native-gesture-handler';


const UsersListScreen=(props)=>{
    const [loaded,updateloaded] =useState(false)
    const [usersCollection,setUsersCollection]=useState();

    useEffect(() => {(async () => {
            try {
                const response = await Server.get('/getUsers') 
                updateloaded(false);
                const usersArray = response.data.users1;
                //console.log("ASDGHGSDF--------------------:",pharmsArray);
                setUsersCollection(usersArray);
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
            <Text style={{fontSize: 38,
              fontWeight:'bold'
              ,marginVertical:5,
              left:70,
            top:20}}> Users</Text>
            <Spacer/>
            <FlatList style={{ marginVertical:30,
        marginBottom:-10,
        marginTop:50,
        marginStart:10,
        top:-50}} data={usersCollection} 
                renderItem={({item})=>{
                return( 
                        <Text style={{fontSize:20}}>{item.email}</Text>
                    ); 
                }}/>
            <TouchableOpacity onPress={()=>props.navigation.navigate('DeleteUser')} 
        style={{
        backgroundColor:'#6ba93a',
         borderRadius:1500 ,
          alignItems: 'center',
        width:200,
        marginTop:10,
        marginRight:20,
        paddingVertical:15,
        marginVertical:10,
        alignSelf:'flex-end'
        
    }} >
                <Text style={{ color:'#000',fontSize:18,
   fontWeight:"bold"}} >Delete user</Text>
        </TouchableOpacity>
        </SafeAreaView>
</ImageBackground>
        );

}

const styles=StyleSheet.create({});

export default UsersListScreen;

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


<FlatList data={usersCollection} 
                return renderItem={({item})=>{
                    <TouchableOpacity onPress={()=>console.log('PRESSEEDD!!')}> <Text>{item.email}</Text>
                    </TouchableOpacity>
                    }}/>
                */