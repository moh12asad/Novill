import React, { useState,useContext,  } from 'react';
import {Text,View,StyleSheet,TouchableOpacity,ImageBackground,TextInput} from 'react-native';
import {Input, Button} from 'react-native-elements';
import Spacer from './Components/Spacer'
import { Context as AuthContext} from './context/AuthContext';
import { NavigationEvents } from 'react-navigation';
import { BackgroundImage } from 'react-native-elements/dist/config';
const EditPharmScreen=(props)=>{
    const pharm = props.navigation.state.params;
    const {state,editpharm,clearErrorMessage}=useContext(AuthContext);
    const [email,setEmail]=useState(pharm.email);
    const [Fname,setFname]=useState(pharm.Fname);
    const [Lname,setLname]=useState(pharm.Lname);
    const [location,setlocation] = useState(pharm.location);
    const [pname,setpname] = useState(pharm.pname);
    const [phone,setPhone] = useState(pharm.phone);
    const [desc,setDesc] = useState(pharm.desc);
    const {file,setFile}=useState('');

    console.log('Edit Pharm details:',pharm);

    return( 
      
   
        <>
        <ImageBackground source={require("../Screens/images/image.jpg")} style={{ width:'100%', height:'100%' }}>        
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
                    <Text style={{color:'#000' ,
                 fontSize: 20,
                  fontWeight:'bold'
                  ,marginVertical:15,
                  left:20,
                
                  }}>You can update your details</Text>
                <Spacer/>
                <View style={{marginLeft:50}}>
                <TextInput
                    placeholder={pharm.Fname} 
                    value={Fname}
                    onChangeText={setFname}
                    autoCorrect={false}
                    style={{ 
          
          /*  backgroundColor:'rgb(220,220,220)',
                        borderRadius:120,
                         paddingHorizontal:70,
                          width:'70%',
                        top:20,
                        marginTop:0,
                        left:1,
                        width:'20%',
                        paddingVertical:1,
                        marginVertical:0,
                        margin:30*/
    
                         borderRadius:120,
                        paddingHorizontal:70, width:'70%',
                        backgroundColor:'rgb(220,220,220)',
                        marginBottom:5,
                        marginTop:10,
                        left:50
                 
              
                }}
                />
    
                <TextInput
                    placeholder={pharm.Lname}
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
                    placeholder={pharm.email} 
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                    au  style={{ 
                         borderRadius:120,
                        paddingHorizontal:70, width:'70%',
                        backgroundColor:'rgb(220,220,220)',
                        marginBottom:5,
                         marginTop:10,
                        left:50
                 
    
        
              
                }}
                />
                <TextInput
                    placeholder={pharm.location} 
                    value={location}
                    onChangeText={setlocation}
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
                    placeholder={pharm.pname} 
                    value={pname}
                    onChangeText={setpname}
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
                    placeholder={pharm.phone} 
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
                            <TextInput
                placeholder={pharm.desc}
                value={desc}
                onChangeText={setDesc}
                autoCapitalize="none"
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
              
    </View>
    
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
                    marginLeft:120
                }}
                 title="Save changes" onPress={()=>editpharm({email,Fname,Lname,location,pname,phone,desc,pharm})}>
                 
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
EditPharmScreen.navigationOptions = () => {
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

export default EditPharmScreen;
