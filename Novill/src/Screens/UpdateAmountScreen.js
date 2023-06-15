import React, { useState,useContext,  } from 'react';
import {Text,View,StyleSheet,TouchableOpacity,ImageBackground,TextInput} from 'react-native';
import {Input, Button} from 'react-native-elements';
import Spacer from './Components/Spacer'
import { Context as AuthContext} from './context/AuthContext';
import { NavigationEvents } from 'react-navigation';
import Server from './api/Server';
import { BackgroundImage } from 'react-native-elements/dist/config';
const UpdateAmountScreen=(props)=>{
    const {state,clearErrorMessage}=useContext(AuthContext);
    const prod = props.navigation.state.params.prod;
    const a=prod.amount;
    const [amount,setAmount]=useState();
    console.log("ASDASDASDASDASD");

    return(  
        <>
        <ImageBackground source={require("../Screens/images/back.jpg")} style={{ width:'100%', height:'100%' }}>        
        <NavigationEvents onWillFocus={clearErrorMessage}/>
            <View style={styles.container}>

                <Spacer/>
                <Spacer/>
                <Spacer/>
            <Text  style={{
            color: '#978C8A',
            fontSize: 19,
            fontWeight:"bold",
            marginVertical:1,
            paddingVertical:0,
            left:20,
            top:5
    }}>{prod.prodname}</Text>
    <Spacer/>
    <Spacer/>
            
    <TextInput
            label="Amount"
            value={amount}
            onChangeText={setAmount}
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
                <TouchableOpacity
                 style={{
                    backgroundColor:'#629630',
                     padding:50,
                    marginTop:20,
                    borderRadius:170,
                    alignItems: 'center',
                    paddingVertical:10,
                    marginVertical:20,
                    width:'50%',
                    left:85
                }}
                 title="Update" onPress={()=>Update(prod,amount,props)}>
                 
                <Text style={{color:'black',fontWeight:'bold' ,fontSize:16}}>Save</Text> 
                 </TouchableOpacity>
                <Spacer/>
            </View>
            </ImageBackground>
        </>

    );
};
const Update=async(prod,amount,props)=>{
    const response = await Server.post('/UpdateAmount',{
        prod,amount
    });
    const pharm = response.data.pharm;
    props.navigation.navigate('PharmAccount',{pharm:pharm});
    //console.log(amount);
}
const styles=StyleSheet.create({
    container:{

        flex:1,
        justifyContent:'center',
        marginBottom:150
    },
    errormsg:{
        fontSize:16,
        color:'red'
    },
    boto:{
         backgroundColor:'#629630',
        padding:50,
        marginTop:20,
        borderRadius:170,
          alignItems: 'center',
        paddingVertical:10,
        marginVertical:20,
        width:'50%',
        left:85
    }
});

export default UpdateAmountScreen;
