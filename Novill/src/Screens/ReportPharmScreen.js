import React, { useState,useContext } from 'react';
import {View,StyleSheet,TouchableOpacity,ImageBackground,TextInput} from 'react-native';
import {Text,Input, Button} from 'react-native-elements';
import Spacer from './Components/Spacer'
import { Context as AuthContext} from './context/AuthContext';
import { NavigationEvents } from 'react-navigation';


const ReportPharmScreen=(props)=>{
    const pharm=props.navigation.state.params.pharm;
    const user=null;
    console.log(pharm);
    const {state,reportpharm,clearErrorMessage}=useContext(AuthContext);
    const [title,setTitle]=useState('');
    const [text,setText] = useState('');
    return (            
    <ImageBackground source={require("../Screens/images/photo.jpg")} style={{ width:'100%', height:'100%' }} >

        <View style={styles.container}>

        <Spacer/>
        <Spacer/>
        
        <View style={{backgroundColor:'#fff',height:350,width:460,
                     borderTopLeftRadius:130,
                     paddingTop:75,
                     alignItems:'center',
                     right:30
                     }}>
              


                    
        <Text style={{ 
            color:'#000' ,
             fontSize: 40,
              fontWeight:'bold'
              ,marginVertical:5,
              
             }}>Report to admin</Text>

        
        <TextInput
            placeholder='title' 
            label="title"
            value={title}
            onChangeText={setTitle}
            autoCapitalize="none"
            autoCorrect={false}
            style={{ 
               borderRadius:100,
               color:'black',
               paddingHorizontal:70,
               width:'65%',
               backgroundColor:'rgb(220,220,220)',
              marginBottom:20
               
            }}
        />
                <TextInput
            placeholder='text' 
            label="text"
            value={text}
            onChangeText={setText}
            autoCapitalize="none"
            autoCorrect={false}
            style={{ 
               borderRadius:100,
               color:'black',
               paddingHorizontal:70,
               width:'65%',
               backgroundColor:'rgb(220,220,220)',
              marginBottom:20
               
            }}
        />
        <TouchableOpacity style={{
        backgroundColor:'#629630',
        padding:50,
        marginTop:30,
        borderRadius:100 ,
          alignItems: 'center',
        paddingVertical:10,
        marginVertical:5
    }} title="Report" onPress={()=>reportpharm({title,text,user,pharm})} >
        <Text style={{color:'black',fontWeight:'bold' ,fontSize:16}}>Send</Text>
     </TouchableOpacity>
        <Spacer/>
        </View>
        
        </View>
        </ImageBackground>
    )
};

ReportPharmScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
  };

const styles=StyleSheet.create({
    container:{

        flex:1,
        justifyContent:'center',
        marginBottom:150,
        alignItems:'center',
        width:460
    },
    errormsg:{
        fontSize:16,
        color:'red'
    },
    btn:{
     
        backgroundColor:'#629630',
         borderRadius:100 ,
          alignItems: 'center',
        width:300,
        paddingVertical:10,
        marginVertical:5
    
    }
});

export default ReportPharmScreen;