import React,{useState} from "react";
import {View,StyleSheet} from 'react-native';
import {Text,Button,Input} from 'react-native-elements';


const AuthForm=({headerText,errorMessage,onSubmit, submitButtonText})=>{
    const [email,setEmail]=useState('');
    const [password,setPassword] = useState('');
    return (
        <View style={styles.container}>
        <Spacer/>
        <Text h3> Sign In</Text>
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
        <Button title="Signup" onPress={()=>signip({email,password})}/>
        <Spacer/>
        <TouchableOpacity onPress={()=>navigation.navigate('Signup')}>
                <Text>Dont have an account? Sign Up here</Text>
        </TouchableOpacity>
        </View>
    )
    
};


const styles=StyleSheet.create({});


export default AuthForm;