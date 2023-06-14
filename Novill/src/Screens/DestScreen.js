import React, { useState,useContext,  } from 'react';
import {View,StyleSheet,TouchableOpacity,ImageBackground,TextInput} from 'react-native';
import {Text,Input, Button} from 'react-native-elements';
import Spacer from './Components/Spacer'
import { Context as AuthContext} from './context/AuthContext';
import { NavigationEvents } from 'react-navigation';
const DestScreen=(props)=>{
    const {state,setAddress,clearErrorMessage}=useContext(AuthContext);
    const user=props.navigation.state.params.user;
    const cart=user.cart;
    console.log("===============cart in DestScreen\n",cart.images ,"\n========\n");
    //const [payMethod,setPayMethod]=useState('');
    const [city,setcity]=useState('');
    const [street,setstreet]=useState('');
    const [apartnum,setapartnum] = useState('');
    const [floor,setfloor] = useState('');
    const [building,setbuilding] = useState('');
    const[phone,setphone]=useState('');


    return( 
            <ImageBackground source={require("../Screens/images/back.jpg")} style={{ width:'100%', height:'100%' }} >

    <>
        <View style={styles.container}>
            <NavigationEvents onWillFocus={clearErrorMessage}/>
            <Spacer/>
            <Spacer/>
            <Spacer/>
            <Spacer/>
            <Spacer/>
            <Spacer/>
            <Spacer/>
    
              <Text style={{color:'#111' ,
             fontSize: 20,
              fontWeight:'bold'
              ,marginVertical:15,
              left:20,
            top:50
              }}>Shopping Adress</Text>
            <Spacer/>
            <TextInput
                placeholder='City' 
                label="City"
                value={city}
                onChangeText={setcity}
                autoCorrect={false}
                 style={{ 
              borderRadius:120,
    paddingHorizontal:70, width:'70%',
    backgroundColor:'rgb(220,220,220)',
     marginBottom:5,
     marginTop:70,
     left:50
               
            }}
            />

            <TextInput
                placeholder='Street' 
                label="Street"
                value={street}
                onChangeText={setstreet}
                autoCorrect={false}
                 style={{ 
                 borderRadius:120,
    paddingHorizontal:70, width:'70%',
    backgroundColor:'rgb(220,220,220)',
     marginBottom:5,
     marginTop:30,
     left:50
               
            }}
            />
            <TextInput
                placeholder='Building' 
                label="building"
                value={building}
                onChangeText={setbuilding}
                autoCapitalize="none"
                autoCorrect={false}
                 style={{ 
                borderRadius:120,
    paddingHorizontal:70, width:'70%',
    backgroundColor:'rgb(220,220,220)',
     marginBottom:5,
     marginTop:30,
     left:50
               
            }}
            />
                        <TextInput
                placeholder='Floor' 
                label="floor"
                value={floor}
                onChangeText={setfloor}
                autoCapitalize="none"
                autoCorrect={false}
                 style={{ 
                borderRadius:120,
    paddingHorizontal:70, width:'70%',
    backgroundColor:'rgb(220,220,220)',
     marginBottom:5,
     marginTop:30,
     left:50
               
            }}
            />
                                    <TextInput
                placeholder='Apartment' 
                label="Apartment"
                value={apartnum}
                onChangeText={setapartnum}
                autoCapitalize="none"
                autoCorrect={false}
                 style={{ 
                borderRadius:120,
    paddingHorizontal:70, width:'70%',
    backgroundColor:'rgb(220,220,220)',
     marginBottom:5,
     marginTop:30,
     left:50
               
            }}
            />
                                        <TextInput
                placeholder='Phone number' 
                label="Phone number"
                value={phone}
                onChangeText={setphone}
                autoCapitalize="none"
                autoCorrect={false}
                 style={{ 
                borderRadius:120,
    paddingHorizontal:70, width:'70%',
    backgroundColor:'rgb(220,220,220)',
     marginBottom:5,
     marginTop:30,
     left:50
               
            }}
            />
            

            {state.errorMessage ?<Text style= {styles.errormsg}>{state.errorMessage}</Text>: null}
            <TouchableOpacity title="Pay" onPress={()=>setAddress({city,street,building,floor,apartnum,phone,cart,user})}
            style={{
        backgroundColor:'#AACB63',
        padding:50,
        marginTop:20,
        borderRadius:170,
          alignItems: 'center',
        paddingVertical:10,
        marginVertical:20,
        width:'65%',
        left:55
            }}>
            <Text style={{color:'black',fontWeight:'bold' ,fontSize:16}}>Payment</Text> 
            </TouchableOpacity> 
            <Spacer/>
        </View>
        
    </>
    </ImageBackground>
    );
};
DestScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
  };

const styles=StyleSheet.create({
    container:{

        flex:1,
        justifyContent:'center',
        marginBottom:150
    },
    errormsg:{
        fontSize:16,
        color:'red'
    }
});

export default DestScreen;
