import React, { useState,useContext } from 'react';
import {View,StyleSheet,TouchableOpacity,ImageBackground,TextInput, Image} from 'react-native';
import {Text,Input, Button,CheckBox} from 'react-native-elements';
import Spacer from './Components/Spacer'
import { Context as AuthContext} from './context/AuthContext';
import * as ImagePicker from 'expo-image-picker';
import { NavigationEvents } from 'react-navigation';


const AddProductsScreen=({navigation})=>{
    const {state,addproduct,clearErrorMessage}=useContext(AuthContext);
    const [imageUri, setImageUri] = useState(null);
    console.log(navigation.state.params);
    let status='';
    const pname = navigation.state.params.pname;
    console.log(pname);
    const [prodname,setprodname] = useState('');    
    const [desc,setdesc] = useState('');
    const [price,setPrice]=useState();
    const [amount,setAmount]=useState();
    const [sale,setSale]=useState(false);
    const [salePrice,setSalePrice]=useState();
    const [prescription,setPrescription]=useState(false);
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
        <ImageBackground source={require("../Screens/images/back1.jpg")} style={{ width:'100%', height:'100%' }} >

<>
    <View style={styles.container}>
        <NavigationEvents onWillFocus={clearErrorMessage}/>
  <Text style={{color: "gray",
            fontSize: 19,
            fontWeight:"bold",
            marginVertical:20,
            paddingVertical:10,
            left:10,
            top:25
          }}>Add a new Product</Text>
        <Spacer/>
        <TextInput
            placeholder='Product name' 
            label="Product name"
            value={prodname}
            onChangeText={setprodname}
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
            placeholder='Description' 
            label="Description"
            value={desc}
            onChangeText={setdesc}
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
            placeholder='Price' 
            label="Price"
            value={price}
            onChangeText={setPrice}
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
            placeholder='Amount' 
            label="Amount"
            value={amount}
            onChangeText={setAmount}
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
            <View style={styles.containerCheckBox}>

                <CheckBox
          title='Sale'
          checked={sale}
          onPress={() => setSale(!sale)}
           containerStyle={styles.checkbox}
          textStyle={styles.checkboxText}
  
        />

{sale && (
          <TextInput
            label=""
            value={salePrice}
            onChangeText={setSalePrice}
            placeholder='Sale price'
            autoCapitalize="none"
            autoCorrect={false}
        style={{ 
            borderRadius:120,
paddingHorizontal:70, width:'95%',
backgroundColor:'rgb(220,220,220)',
 marginBottom:5,

 left:5
        }}
          />
        )}

                <CheckBox
          title='prescription'
          checked={prescription}
          onPress={() => setPrescription(!prescription)}
          containerStyle={styles.checkbox}
          textStyle={styles.checkboxText}
        
        />
        </View>
              <Button title="Upload Image" buttonStyle={styles.uploadButton}
        titleStyle={styles.uploadButtonText}  onPress={handleImageUpload} />
      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}


        {state.errorMessage ?<Text style= {styles.errormsg}>{state.errorMessage}</Text>: null}
        <TouchableOpacity title="Add" onPress={()=>addproduct({prodname,desc,salePrice,sale,price,amount,pname,status,imageUri,prescription})}
        style={{
    
    backgroundColor: '#fff',
   padding:50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 170,
    borderWidth: 1,
     padding:50,
    marginTop:40,
    width:'50%',
    left:85,
    borderColor: 'green',
    alignItems:'center',
     borderWidth: 2
        }}>
        <Text style={{color:'black',fontWeight:'bold' ,fontSize:16}}>Add</Text> 
        </TouchableOpacity> 
        <Spacer/>
    </View>
    
</>
</ImageBackground>
);
}

const styles=StyleSheet.create({

 container: {
    flex: 1,
    justifyContent: 'center',
    
   
  },
  containerCheckBox:{


    borderWidth: 0,
    marginLeft: 50,
    marginRight: 50,
  
    borderRadius: 120,
    width: 270,
    marginVertical: 15,
    paddingVertical: 7,
  },
   checkboxContainer: {

    borderWidth: 0,
    marginLeft: 50,
    marginRight:50,
    padding: 0,  
    borderRadius:120,
    alignItems:'flex-start',
    alignSelf:'flex-start',
    width:270,
     marginVertical:15,
            paddingVertical:5,
           
           
  },
  checkboxText: {
    color: '#000',
    marginLeft: 8,
  },
  
  uploadButton: {
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
  uploadButtonText: {
    color: '#000000',
    fontSize: 16,
  },
  		checkbox: {
    borderRadius: 25,
    borderColor: 'black', // Set the border color to black
    borderWidth: 1, // Set the border width to 1 pixel
  },
});

export default AddProductsScreen;