import React,{useContext} from 'react';
import { Context as AuthContext} from './context/AuthContext';
import { SafeAreaView } from 'react-navigation';
import {View,Button,StyleSheet,Text} from 'react-native';
import Spacer from './Components/Spacer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import HomeScreen from './HomeScreen';

const PharmAccountScreen=(props)=>{
    console.log(props);
    const {signout} = useContext(AuthContext);

    return(
         <SafeAreaView forceInset={{top:'always'}}>
            <Spacer/>
            <Button title ="Pharm store status" onPress={signout}/>
            <Text style={{fontSize: 48}}> Pharm Account Screen </Text>
            <Spacer/>
            <Button title="Sign out" onPress={signout}/>
            <Spacer/>
        </SafeAreaView>
        );
}

const styles=StyleSheet.create({});

export default PharmAccountScreen;