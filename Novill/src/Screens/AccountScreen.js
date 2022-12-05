import React,{useContext,useEffect} from 'react';
import { Context as AuthContext} from './context/AuthContext';
import { SafeAreaView } from 'react-navigation';
import {View,Button,StyleSheet,Text} from 'react-native';
import Spacer from './Components/Spacer';

const AccountScreen=(props)=>{
    const {signout,getPharms} = useContext(AuthContext);
    console.log(props);


    return(
         <SafeAreaView forceInset={{top:'always'}}>
            <Text style={{fontSize: 48}}> Account Screen </Text>
            <Spacer/>
            <Button title="Sign out" onPress={signout}/>
            <Spacer/>
            <Button title="Pharms" onPress={getPharms}/>
            <Spacer/>
        </SafeAreaView>
        );
}

const styles=StyleSheet.create({});

export default AccountScreen;