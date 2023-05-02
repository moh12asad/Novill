import React,{useContext,useEffect, useState} from 'react';
import { Context as AuthContext} from './context/AuthContext';
import { SafeAreaView } from 'react-navigation';
import {View,Button,StyleSheet,Text,FlatList,ImageBackground} from 'react-native';
import Spacer from './Components/Spacer';
import GlobalContex from './context/CContex';
import Server from './api/Server';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PharmListComp from './Components/PharmListComp';


const ViewReportsScreen=(props)=>{
    //console.log(props.navigation.state.params.pname);
    //const pname = props.navigation.state.params.pname;
    const [loaded,updateloaded] =useState(false)
    const [reportsCollection,setreportsCollection]=useState();
    useEffect(() => {(async () => {
            try {
                const response = await Server.get('/GetReports', {
                });
                updateloaded(false);
                //console.log(response.data.fpharm);
                //console.log(response.data.prods);
                //reportsCollection=response.data.prods;
                setreportsCollection(response.data.reports);
                //pharm=response.data.fpharm;
                setreports(response.data.fpharm);
            } catch (err) {
                console.log('error in useEffect');
                console.log(err)
            }
    
        })()
    },[loaded] )


    return(
                  <ImageBackground source={require("../Screens/images/BackGround1.jpg")} style={{ width:'100%', height:'100%' }} >

        

        <SafeAreaView>
            <Text style={{fontSize: 38,
              fontWeight:'bold'
              ,marginVertical:5,
            top:20}}>Reports</Text>
            <Spacer/>
            <FlatList style={{ marginVertical:30,
        marginBottom:-10,
        marginTop:50,
        marginStart:10,
        top:-50}} 
                      data={reportsCollection}
                    numColumns={2} 
                 renderItem={({ item }) => {
        return <PharmListComp name={item.title} onPress={()=>props.navigation.navigate('ViewReport',{item})}/>;
                

      }}/>
                
            
        </SafeAreaView>
</ImageBackground>
        );

}

const styles=StyleSheet.create({});

export default ViewReportsScreen;

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