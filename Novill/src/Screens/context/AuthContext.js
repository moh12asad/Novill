import CreateDataContext from "./CreateDataContext";
import server from "../api/Server";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {navigate} from '../navigationRef'
const authReducer=(state,action)=>{
    switch(action.type){
        case 'add_error':
            return {...state, errorMessage:action.payload};
        case 'signup':
            return {errorMessage:'', token:action.payload};
        case 'signup':
            return {errorMessage:'', token:action.payload};
        case 'clearErrorMessage':
            return {...state, errorMessage:''};
        case 'signout':
            return {token:null, errorMessage:''};
        default:
            return state;
    };
};

const tryLocalSignin=dispatch=>async()=>{
    const token = await AsyncStorage.getItem('token');
    if (token){
        dispatch({type:'signin', payload:token});
        navigate('Account');
    }
    else{
        navigate('Signup');
    }

}

const clearErrorMessage=dispatch=>()=>{
    dispatch({type: 'clear_error_message'});

}

const signup= (dispatch) =>{
    return async ({email,password})=>{
        try{
            const response = await server.post('/signup',{email,password});
            await AsyncStorage.setItem('token',response.data.token);
            dispatch({type:'signup',payload:response.data.token});
            navigate('Account');
        }catch(err){
            dispatch({type:'add_error',
            payload:'Something went wrong with sign up'
        });
            //console.log(err.message);
        }
        
    }
}
const signin=(dispatch)=>{
    return async ({email,password})=>{
        console.log(email,password);
        try{
            const response = await server.post('/signin',{email,password});
            await AsyncStorage.setItem('token',response.data.token);
            dispatch({type:'signin',payload:response.data.token});
            navigate('Account');
        }catch(err){
            console.log(err);
            dispatch({type:'add_error',
            payload:'Something went wrong with sign in'
        });
            //console.log(err.message);
        }

    }
}
const signout=dispatch=>async ()=>{
    await AsyncStorage.removeItem('token');
    dispatch({type:'signout'});
    navigate('loginFlow');

}

export const {Provider,Context}=CreateDataContext(
    authReducer,
    {signin,signup,signout,clearErrorMessage,tryLocalSignin},
    {token:null, errorMessage:''}
);

