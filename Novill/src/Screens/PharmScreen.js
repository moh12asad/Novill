import React from 'react';
import {View,Button,StyleSheet,Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Spacer from './Components/Spacer';



const PharmScreen=({navigation})=>{
    return(
        <View> 
            <Text style={{fontSize: 48}}> Pharm Screen </Text>
            <TouchableOpacity onPress={()=>navigation.navigate('SigninPharm')}>
                    <Text h3>Already have an account? Sign in here</Text>
            </TouchableOpacity>
            <Spacer/>
            <TouchableOpacity onPress={()=>navigation.navigate('SignupPharm')}>
                <Text>If you are client, join us here</Text>
            </TouchableOpacity>
            <Spacer/>
        </View>
    );
}

const styles=StyleSheet.create({});

export default PharmScreen;


