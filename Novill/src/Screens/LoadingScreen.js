import React,{useEffect,useContext} from 'react';
import {View,Button,StyleSheet,Text} from 'react-native';
import {Context as AuthContext} from './context/AuthContext';


const LoadingScreen=()=>{
    const {tryLocalSignin} = useContext(AuthContext);
    useEffect(()=>{
        tryLocalSignin();
    },[]);

    return null;
}

const styles=StyleSheet.create({});

export default LoadingScreen;