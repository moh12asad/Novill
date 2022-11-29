import React, { useState,useContext,  } from 'react';
import {View,StyleSheet,TouchableOpacity} from 'react-native';
import {Text,Input, Button} from 'react-native-elements';
import Spacer from './Components/Spacer'
import { Context as AuthContext} from './context/AuthContext';
import { NavigationEvents } from 'react-navigation';
import AuthForm from './Components/AuthForm';
const SignupScreen=({navigation})=>{
    const {state,signup,clearErrorMessage}=useContext(AuthContext);
    const [email,setEmail]=useState('');
    const [password,setPassword] = useState('');


    return( 
    <>
        <View style={styles.container}>
            <NavigationEvents onWillFocus={clearErrorMessage}/>
            <Spacer/>
            <Text h3> Sign Up</Text>
            <Spacer/>
            <Input
                placeholder='example@email.com' 
                label="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
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
            {state.errorMessage ?<Text style= {styles.errormsg}>{state.errorMessage}</Text>: null}
            <Button title="Signup" onPress={()=>signup({email,password})}/>
            <Spacer/>
            <TouchableOpacity onPress={()=>navigation.navigate('Signin')}>
                <Text>Already have an account? Sign in here</Text>
            </TouchableOpacity>
        </View>
    </>
    );
};
SignupScreen.navigationOptions = () => {
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

export default SignupScreen;
