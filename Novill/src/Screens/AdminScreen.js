import React,{useContext,useEffect} from 'react';
import { Context as AuthContext} from './context/AuthContext';
import { SafeAreaView } from 'react-navigation';
import {View,Button,StyleSheet,Text,ImageBackground} from 'react-native';
import Spacer from './Components/Spacer';
import { TouchableOpacity } from 'react-native-gesture-handler';

const AdminScreen=({navigation})=>{
    const {signout,getPharms} = useContext(AuthContext);
    return (
        <View>
            <TouchableOpacity onPress={()=>navigation.navigate('WaitingPharms')} 
        style={{
        backgroundColor:'#6ba93a',
         borderRadius:15000 ,
          alignItems: 'center',
        width:250,
        marginRight:25,
        paddingVertical:10,
        marginVertical:10,
        alignSelf:'flex-end'
        
    }} >
                <Text style={{ color:'#000',fontSize:18,
   fontWeight:"bold"}} >Pharms list</Text>
        </TouchableOpacity>

        <Spacer>
        <TouchableOpacity style={{ backgroundColor:'#d1f0c7',
        padding:30,
        marginTop:20,
        borderRadius:110,
          alignItems: 'center',
        paddingVertical:10,
        marginVertical:10,
        width:'40%',
        left:200,
        marginTop:360,
        borderWidth:0
        
        }} title="Sign out" onPress={signout}>
        <Text style={{color:'black',fontWeight:'bold' ,fontSize:16}}>Signout</Text> 
 </TouchableOpacity>
        </Spacer>
        </View>

    );
}

const styles=StyleSheet.create({});

export default AdminScreen;