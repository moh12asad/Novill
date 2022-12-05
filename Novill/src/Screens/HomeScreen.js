import React from 'react';
import {View,Button,StyleSheet,Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Spacer from './Components/Spacer';



const HomeScreen=({navigation})=>{
    return(
    <View> 
        <Text style={{fontSize: 48}}> Home Screen </Text>
        <TouchableOpacity onPress={()=>navigation.navigate('UserFlow')}>
                <Text h3>Client</Text>
        </TouchableOpacity>
        <Spacer/>
        <TouchableOpacity onPress={()=>navigation.navigate('PharmFlow')}>
            <Text>Pharm</Text>
        </TouchableOpacity>
        <Spacer/>
        <TouchableOpacity onPress={()=>navigation.navigate('DeliveryFlow')}>
            <Text>Delivery</Text>
        </TouchableOpacity>
        <Spacer/>
        <TouchableOpacity onPress={()=>navigation.navigate('AdminFlow')}>
        <Text>Admin</Text>
        </TouchableOpacity>
    </View>
    );
}

const styles=StyleSheet.create({});

export default HomeScreen;