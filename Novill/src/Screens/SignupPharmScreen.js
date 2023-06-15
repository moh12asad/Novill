import React, { useState,useContext,  } from 'react';
import {Text,View,StyleSheet,TouchableOpacity,ImageBackground,TextInput,Image} from 'react-native';
import {Input, Button} from 'react-native-elements';
import Spacer from './Components/Spacer'
import { Context as AuthContext} from './context/AuthContext';
import { NavigationEvents } from 'react-navigation';
import { BackgroundImage } from 'react-native-elements/dist/config';
import * as ImagePicker from 'expo-image-picker';
const SignupPharmScreen=({navigation})=>{
    const {state,signupPharm,clearErrorMessage}=useContext(AuthContext);
    const [email,setEmail]=useState('');
    const [Fname,setFname]=useState('');
    const [Lname,setLname]=useState('');
    const [password,setPassword] = useState('');
    const [Confirmpassword,setConfirmpassword] = useState('');
    const [location,setlocation] = useState('');
    const [pname,setpname] = useState('');
    const [phone,setPhone] = useState('');
    const [desc,setDesc] = useState('');
    const [imageUri, setImageUri] = useState(null);
    const AdminAccept=false;
    const utype="pharm";
    const handleImageUpload = async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission not granted!');
        return;
      }
  
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });
  
      if (!result.canceled) {
        setImageUri(result.assets[0].uri);
        // Here, you can send the image file to the server or perform any other operations
      }
    };
  

    return( 
      
   
    <>
    <ImageBackground source={require("../Screens/images/back1.jpg")} style={{ width:'100%', height:'100%' }}>        
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
              }}>Register</Text>
      <Text  style={{
            color: '#978C8A',
            fontSize: 19,
            fontWeight:"bold",
            marginVertical:1,
            paddingVertical:0,
            left:20,
            top:5
}}>Create a new account</Text>

    
            <Spacer/>
            <TextInput
                placeholder='First Name' 
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
                placeholder='Last Name' 
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
                placeholder='example@email.com' 
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
                placeholder='Location' 
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
                placeholder='Pharm name' 
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
                placeholder='Phone' 
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
            secureTextEntry={true}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
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
            <TextInput
            secureTextEntry={true}
            placeholder="confirm password"
            value={Confirmpassword}
            onChangeText={setConfirmpassword}
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
                        <TextInput
            placeholder="Description"
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
          
      <Button buttonStyle={styles.uploadButton} title="Upload Pharmacy logo"   color="black"  onPress={handleImageUpload} />
      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
          


            {state.errorMessage ?<Text style= {styles.errormsg}>{state.errorMessage}</Text>: null}
        
            <TouchableOpacity
             style={{
          backgroundColor: '#fff',

    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 170,
    borderWidth: 1,
bottom:-10,
    width:'50%',
left:80,
    borderColor: 'green',
    alignItems:'center',
     borderWidth: 2
            }}
             title="Signup" onPress={()=>signupPharm({email,password,Confirmpassword,Fname,Lname,AdminAccept,location,pname,phone,utype,desc,imageUri})}>
             
            <Text style={{color:'black',fontWeight:'bold' ,fontSize:16}}>Signup</Text> 
             </TouchableOpacity>
            <Spacer/>
            <TouchableOpacity onPress={()=>navigation.navigate('Signin')}>
                <Text style={{

                    color: "gray",
            fontSize: 15,
            fontWeight:"bold",
            marginVertical:-20,
            paddingVertical:0,
            left:50,
            marginBottom:110,
            top:10
                }}>Already have an account? Sign in here</Text>
            </TouchableOpacity>
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
SignupPharmScreen.navigationOptions = () => {
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
    but:{
       backgroundColor: '#EEE3BA',
    borderWidth: 0,
    marginLeft: 60,
    padding: 0,
    width:250,
     marginVertical:10,
    paddingVertical:5,
    borderRadius:120,
    bottom:10
    },
     uploadButton: {
     backgroundColor: 'green',
    borderWidth: 0,
    marginLeft: 50,
    padding: 0,
    width:'70%',
     marginVertical:10,
    paddingVertical:5,
    borderRadius:120,
    bottom:1,
    

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

export default SignupPharmScreen;
