import React,{useContext} from 'react';
import { Context as AuthContext} from './context/AuthContext';
import { SafeAreaView } from 'react-navigation';
import {View,Button,StyleSheet,Text} from 'react-native';
import Spacer from './Components/Spacer';


const WaitingForAdmin=()=>{
    const {signout} = useContext(AuthContext);
    return(
    <View> 
        <Text style={{fontSize: 48}}>Thank you!</Text>
        <Text>We got your request, we wil check it and contact you in a few days.</Text>
        <Button title="Sign out" onPress={signout}/>
    </View>
    );
}

const styles=StyleSheet.create({});

export default WaitingForAdmin;