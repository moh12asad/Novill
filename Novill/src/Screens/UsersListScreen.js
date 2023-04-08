import React,{useContext,useEffect, useState} from 'react';
import { Context as AuthContext} from './context/AuthContext';
import { SafeAreaView } from 'react-navigation';
import {View,Button,StyleSheet,Text,FlatList,ImageBackground,ScrollView,Pressable} from 'react-native';
import Spacer from './Components/Spacer';
import GlobalContex from './context/CContex';
import Server from './api/Server';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';

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
                  <ImageBackground source={require("../Screens/images/img.jpg")} style={{ width:'100%', height:'100%' }} >

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
        
            {/*<Text style={{fontSize: 38,
              fontWeight:'bold'
              ,marginVertical:5,
              left:70,
            top:20}}> Users</Text>*/}
            <Spacer/>
            <Text style={{fontSize: 30,
              fontWeight:'bold',
              marginVertical:5,
              top:-30
         }}>Users</Text>
            <FlatList style={styles.container} data={usersCollection} 
                renderItem={({item})=>{
                return( 
                        <><View
style={{
          height: 1,
          width: "100%",
          backgroundColor: "#607D8B",
        }}
      /><Text style={styles.name}>{item.Fname} {item.Lname}</Text><Text style={styles.email}>{item.email} </Text><View
style={{
          height: 1,
          width: "100%",
          backgroundColor: "#607D8B",
        }}
      /></>
                        
                    ); 
                }}/>
                  <TouchableOpacity onPress={()=>props.navigation.navigate('DeleteUser')} 
        style={{
        backgroundColor:'#6ba93a',
         borderRadius:1500 ,
          alignItems: 'center',
        width:50,
        marginTop:15,
        marginRight:20,
        paddingVertical:15,
        marginVertical:10,
        alignSelf:'flex-end'

        
    }} >
    
                 <Icon name="eraser" color={'black'} size={20} />
 
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
      height: '75%',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
 
    marginTop:-10
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