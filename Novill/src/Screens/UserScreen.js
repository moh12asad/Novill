import React from 'react';
import {View,Button,StyleSheet,Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Spacer from './Components/Spacer';



const UserScreen=({navigation})=>{
    return(
        <View> 
            <Text style={{fontSize: 48}}> User Screen </Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Signin')}>
                    <Text h3>Already have an account? Sign in here</Text>
            </TouchableOpacity>
            <Spacer/>
            <TouchableOpacity onPress={()=>navigation.navigate('Signup')}>
                <Text>If you are client, join us here</Text>
            </TouchableOpacity>
            <Spacer/>
        </View>
    );
}

const styles=StyleSheet.create({});

export default UserScreen;


