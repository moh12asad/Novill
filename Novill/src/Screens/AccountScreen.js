import React,{useContext} from 'react';
import { Context as AuthContext} from './context/AuthContext';
import {View,Button,StyleSheet,Text} from 'react-native';
import Spacer from './Components/Spacer';

const AccountScreen=()=>{
    const {signout} = useContext(AuthContext);

    return(
         <View>
            <Text style={{fontSize: 48}}> Account Screen </Text>
            <Spacer/>
            <Button title="Sign out" onPress={signout}/>
            <Spacer/>
        </View>
        );
}

const styles=StyleSheet.create({});

export default AccountScreen;