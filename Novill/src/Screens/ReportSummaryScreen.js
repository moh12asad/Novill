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
            <ImageBackground source={require("../Screens/images/background.jpg")} style={{ width:'100%', height:'100%' }}>        

    <View style={{height:350,width:460,
                     borderTopLeftRadius:130,
                     paddingTop:100,
                
                    }}> 
        <Text style={{fontSize: 48,top:100}}> Thank you!</Text>
        <Text style={{top:100,fontSize: 19}}> We got your report about {r.title} issue,</Text><Text style={{top:100,fontSize:19}}> we wil check it and contact you a as soon as possible.</Text>
             <TouchableOpacity style={{ backgroundColor:'#d1f0c7',
     
    borderRadius: 100,
    alignItems: 'center',
    paddingVertical: 10,
    position: 'absolute',
    bottom: -250,
    width: 200,

      
        
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