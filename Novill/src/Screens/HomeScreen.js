import React from 'react';
import {ImageBackground,View,Button,StyleSheet,Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Spacer from './Components/Spacer';
import { StatusBar } from 'react-native';
import useLayoutEffect from 'react';

const HomeScreen=({navigation})=>{

    return(
      
    <View> 
        <ImageBackground source={require("../Screens/images//background.jpg")} style={{ width:'100%', height:'100%' }} >
        <View style={{marginRight:50,marginVertical:75}}>
        </View>
        <View style={{
        alignItems:'center',
        marginTop:70,
        left:10}}>
        <TouchableOpacity onPress={()=>navigation.navigate('User')} 
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
        fontWeight:"bold"}} >Client</Text>
        </TouchableOpacity>
        <Spacer/>
        <TouchableOpacity onPress={()=>navigation.navigate('Pharm')} 
        style={{
        backgroundColor:'#86c260',
         borderRadius:100 ,
          alignItems: 'center',
        width:250,
        paddingVertical:10,
        marginVertical:10,
        alignSelf:'flex-end',
        marginRight:25,
    }}>
        <Text style={{ color:'#000',fontSize:18,
        fontWeight:"bold"}} >Pharm</Text>
        </TouchableOpacity>
        <Spacer/>
        <TouchableOpacity onPress={()=>navigation.navigate('Delivery')}
        style={{
        backgroundColor:'#6ba93a',
         borderRadius:100 ,
        alignItems: 'center',
        width:250,
        paddingVertical:10,
        marginVertical:10,
        alignSelf:'flex-end',
        marginRight:25,
    }}>
        <Text style={{ color:'#000',fontSize:18,
        fontWeight:"bold"}} >Delivery</Text>
        </TouchableOpacity>
        <Spacer/>
        <TouchableOpacity onPress={()=>navigation.navigate('SigninAdmin')}
        style={{
        backgroundColor:'#86c260',
        borderRadius:100 ,
        alignItems: 'center',
        width:250,
        paddingVertical:10,
        marginVertical:10,
        alignSelf:'flex-end',
        marginRight:25,
    }}>
        <Text style={{ color:'#000',fontSize:18,
   fontWeight:"bold"}} >Admin</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Test')}
        style={{
        backgroundColor:'#86c260',
        borderRadius:100 ,
        alignItems: 'center',
        width:250,
        paddingVertical:10,
        marginVertical:10,
        alignSelf:'flex-end',
        marginRight:25,
    }}>
        <Text style={{ color:'#000',fontSize:18,
   fontWeight:"bold"}} >Test</Text>
        </TouchableOpacity>
        </View>
        </ImageBackground>
      
    </View>
    
    );
};

export default HomeScreen ;
