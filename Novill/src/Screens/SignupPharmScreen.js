import React, { useState,useContext,  } from 'react';
import {View,StyleSheet,TouchableOpacity} from 'react-native';
import {Text,Input, Button} from 'react-native-elements';
import Spacer from './Components/Spacer'
import { Context as AuthContext} from './context/AuthContext';
import { NavigationEvents } from 'react-navigation';
const SignupPharmScreen=({navigation})=>{
    const {state,signupPharm,clearErrorMessage}=useContext(AuthContext);
    const [email,setEmail]=useState('');
    const [Fname,setFname]=useState('');
    const [Lname,setLname]=useState('');
    const [password,setPassword] = useState('');
    const [Confirmpassword,setConfirmpassword] = useState('');
    const [location,setlocation] = useState('');
    const [pname,setpname] = useState('');
    const AdminAccept=false;
    const utype="pharm";

    return( 
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
            <Text h3> join Us!</Text>
            <Spacer/>
            <Input
                placeholder='First Name' 
                label="First Name"
                value={Fname}
                onChangeText={setFname}
                autoCorrect={false}
            />

            <Input
                placeholder='Last Name' 
                label="Last Name"
                value={Lname}
                onChangeText={setLname}
                autoCorrect={false}
            />
            <Input
                placeholder='example@email.com' 
                label="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Input
                placeholder='Location' 
                label="Location"
                value={location}
                onChangeText={setlocation}
                autoCorrect={false}
            />
            <Input
                placeholder='Pharm name' 
                label="Pharm name"
                value={pname}
                onChangeText={setpname}
                autoCorrect={false}
            />
            
            <Input
            secureTextEntry={true}
            label="Password"
            value={password}
            onChangeText={setPassword}
            autoCapitalize="none"
            autoCorrect={false}
            />
            <Input
            secureTextEntry={true}
            label="Confirm Password"
            value={Confirmpassword}
            onChangeText={setConfirmpassword}
            autoCapitalize="none"
            autoCorrect={false}
            />

            {state.errorMessage ?<Text style= {styles.errormsg}>{state.errorMessage}</Text>: null}
            <Button title="Signup" onPress={()=>signupPharm({email,password,Confirmpassword,Fname,Lname,AdminAccept,location,pname,utype})}/>
            <Spacer/>
            <TouchableOpacity onPress={()=>navigation.navigate('Signin')}>
                <Text>Already have an account? Sign in here</Text>
            </TouchableOpacity>
        </View>
    </>
    );
};
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
    }
});

export default SignupPharmScreen;
