import React, { useState,useContext,  } from 'react';
import {Text,View,StyleSheet,TouchableOpacity,ImageBackground,TextInput} from 'react-native';
import {Input, Button} from 'react-native-elements';
import Spacer from './Components/Spacer'
import { Context as AuthContext} from './context/AuthContext';
import { NavigationEvents } from 'react-navigation';
import { BackgroundImage } from 'react-native-elements/dist/config';
const EditProductForPharmScreen=(props)=>{
    const pharm = props.navigation.state.params.pharm;
    const prod = props.navigation.state.params.prod;
    //console.log(user.email);
    const {state,clearErrorMessage}=useContext(AuthContext);
    const [prodname,setProdname]=useState(prod.prodname);
    const [price,setPrice]=useState(prod.price);
    const [salePrice,setSalePrice]=useState(prod.salePrice);
    const [desc,setDesc] = useState(prod.desc);


    return(  
        <>
        <ImageBackground source={require("../Screens/images/back.jpg")} style={{ width:'100%', height:'100%' }}>        
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
                    placeholder={prod.prodname}
                    value={prodname}
                    onChangeText={setProdname}
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
                    placeholder={prod.price}
                    value={price}
                    onChangeText={setPrice}
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
                    placeholder={prod.salePrice} 
                    value={salePrice}
                    onChangeText={setSalePrice}
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
                    placeholder={prod.desc} 
                    value={desc}
                    onChangeText={setDesc}
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
                 title="Save" onPress={()=>console.log(email,Fname,Lname,phone,user)}>
                 
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
        // User cancelled the picker
      } else {
        // Error handling
      }
    }
  }*/
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

export default EditProductForPharmScreen;
