import React,{useContext} from 'react';
import { Context as AuthContext} from './context/AuthContext';
import { SafeAreaView } from 'react-navigation';
import {View,Button,StyleSheet,Text,ImageBackground,TouchableOpacity} from 'react-native';
import Spacer from './Components/Spacer';


const ReportSummaryScreen=(props)=>{
    const r = props.navigation.state.params.r;
    console.log('del in report summary is:',r.del);
    let utype;
    const user=r.user;
    const pharm=r.pharm;
    const del=r.del;
    if(r.user!=null)
    {
        utype='user';
    }
    if(r.pharm!=null)
    {
        console.log('In summary pharm confition:',pharm);
        utype='pharm';
    }
    if(r.del!=null)
    {
        utype='del';
    }
    console.log(r);
    const {signout} = useContext(AuthContext);
    return(
            <ImageBackground source={require("../Screens/images/imag.jpg")} style={{ width:'100%', height:'100%' }}>        

    <View> 
        <Text style={{fontSize: 48,top:100}}>Thank you!</Text>
        <Text style={{top:120}}>We got your report about {r.title} issue, we wil check it and contact you a as soon as possible.</Text>
             <TouchableOpacity style={{ backgroundColor:'#d1f0c7',
        padding:30,
        marginTop:20,
        borderRadius:110,
          alignItems: 'center',
        paddingVertical:10,
        marginVertical:10,
        width:'40%',
        left:200,
        marginTop:360,
        borderWidth:0
        
        }} title="Back to account screen" onPress={() => {
            if (utype === 'user') {
              props.navigation.navigate('Account',{user});
            } else if (utype === 'pharm') {
              props.navigation.navigate('PharmAccount',{pharm});
            }else if (utype === 'del') {
                props.navigation.navigate('DeliveryAccount',{del});
          }}}>
        <Text style={{color:'black',fontWeight:'bold' ,fontSize:16}}>Back to account</Text> 
 </TouchableOpacity>

    </View>
    </ImageBackground>
    );
}

const styles=StyleSheet.create({});

export default ReportSummaryScreen;