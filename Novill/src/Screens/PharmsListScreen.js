import React,{useContext,useEffect} from 'react';
import { Context as AuthContext} from './context/AuthContext';
import { SafeAreaView } from 'react-navigation';
import {View,Button,StyleSheet,Text} from 'react-native';
import Spacer from './Components/Spacer';

const PharmsListScreen=(props)=>{
    const {signout,getPharms} = useContext(AuthContext);
    console.log(props);


    return(
         <SafeAreaView forceInset={{top:'always'}}>
            <Text style={{fontSize: 48}}> Pharms List </Text>
            <Spacer/>
            <Button title="Sign out" onPress={signout}/>
            <Spacer/>
            <Spacer/>
        </SafeAreaView>
        );
}

const styles=StyleSheet.create({});

export default PharmsListScreen;