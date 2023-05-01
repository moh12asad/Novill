import React, { useState,useContext,  } from 'react';
import {Text,View,StyleSheet,TouchableOpacity,ImageBackground,TextInput} from 'react-native';
import {Input, Button} from 'react-native-elements';
import Spacer from './Components/Spacer'
import { Context as AuthContext} from './context/AuthContext';
import { NavigationEvents } from 'react-navigation';
import { BackgroundImage } from 'react-native-elements/dist/config';
const EditDeliveryScreen=(props)=>{
    const del = props.navigation.state.params.del;
    console.log(del.email);
    const {state,editdel,clearErrorMessage}=useContext(AuthContext);
    const [email,setEmail]=useState(del.email);
    const [Fname,setFname]=useState(del.Fname);
    const [Lname,setLname]=useState(del.Lname);
    const [phone,setPhone] = useState(del.phone);

    console.log('Edit del details:',del);

    return(  
        <>
        <ImageBackground source={require("../Screens/images/imag.jpg")} style={{ width:'100%', height:'100%' }}>        
            <View style={styles.container}>
                <NavigationEvents onWillFocus={clearErrorMessage}/>
                <Spacer/>
                <Spacer/>
                <Spacer/>
                <Spacer/>
                <Spacer/>
                <Spacer/>
                <Spacer/>
            <Text style={{color:'#86c260' ,
                 fontSize: 40,
                  fontWeight:'bold'
                  ,marginVertical:15,
                  left:20,
                top:20
                  }}>Edit</Text>
                <Spacer/>
                <TextInput
                    placeholder={del.Fname}
                    value={Fname}
                    onChangeText={setFname}
                    autoCorrect={false}
                    style={{ 
    
                         borderRadius:120,
                        paddingHorizontal:70, width:'70%',
                        backgroundColor:'rgb(220,220,220)',
                        marginBottom:5,
                        marginTop:10,
                        left:50
                 
              
                }}
                />
    
                <TextInput
                    placeholder={del.Lname}
                    value={Lname}
                    onChangeText={setLname}
                    autoCorrect={false}
                           style={{ 
                     borderRadius:120,
                    paddingHorizontal:70, width:'70%',
                    backgroundColor:'rgb(220,220,220)',
                    marginBottom:5,
                    marginTop:10,
                    left:50
                 
    
              
                }}
                />
                <TextInput
                    placeholder={del.email} 
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                      style={{ 
                         borderRadius:120,
                        paddingHorizontal:70, width:'70%',
                        backgroundColor:'rgb(220,220,220)',
                        marginBottom:5,
                         marginTop:10,
                        left:50
                 
    
        
              
                }}
                />
                            <TextInput
                    placeholder={del.phone} 
                    value={phone}
                    onChangeText={setPhone}
                    autoCorrect={false}
                          style={{ 
          
                         borderRadius:120,
        paddingHorizontal:70, width:'70%',
        backgroundColor:'rgb(220,220,220)',
         marginBottom:5,
         marginTop:10,
         left:50
                 
              
                }}
                />
              
    
    
                {state.errorMessage ?<Text style= {styles.errormsg}>{state.errorMessage}</Text>: null}
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
                 title="Save changes" onPress={()=>editdel({email,Fname,Lname,phone,del})}>
                 
                <Text style={{color:'black',fontWeight:'bold' ,fontSize:16}}>Save</Text> 
                 </TouchableOpacity>
                <Spacer/>
            </View>
            </ImageBackground>
        </>

    );
};
/*
async function pickDocument() {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      console.log(
        result.uri,
        result.type, // mime type
        result.name,
        result.size
      );
      // You can now upload the selected file
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // del cancelled the picker
      } else {
        // Error handling
      }
    }
  }*/
EditDeliveryScreen.navigationOptions = () => {
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

export default EditDeliveryScreen;
