import CreateDataContext from "./CreateDataContext";
import server from "../api/Server";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {navigate} from '../navigationRef'
import React from "react";

const authReducer=(state,action)=>{
    switch(action.type){
        case 'add_error':
            return {...state, errorMessage:action.payload};
        case 'signup':
            return {errorMessage:'', token:action.payload};
        /*case 'signin':
            return {errorMessage:'', token:action.payload};*/
        case 'clearErrorMessage':
            return {...state, errorMessage:''};
        case 'passwordMatch':
            return {errorMessage:'',token:action.payload};
        case 'getPharms':
            return action.payload;
        case 'signupDelivery':
            return {errorMessage:'', token:action.payload};
        case 'signinDelivery':
            return {errorMessage:'', token:action.payload};
        case 'signout':
            return {token:null, errorMessage:''};
        default:
            return state;
    };
};



/*const tryLocalSignin=dispatch=>async()=>{
    const token = await AsyncStorage.getItem('token');
    if (token){
        dispatch({type:'signin', payload:token});
        navigate('Account');
    }
    else{
        navigate('Home');
    }

}*/

const clearErrorMessage=dispatch=>()=>{
    dispatch({type: 'clear_error_message'});

}

const signup= (dispatch) =>{
    return async ({email,password,Confirmpassword,Fname,Lname,utype})=>{
        try{
            //console.log(email,password,Confirmpassword,Fname,Lname,utype);
            const response = await server.post('/signup',{email,password,Confirmpassword,Fname,Lname,utype});
            console.log('Response! V');
            await AsyncStorage.setItem('token',response.data.token);
            dispatch({type:'signup',payload:response.data.token});
            navigate('Account');
        }catch(err){
            console.log(err);
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

const signinAdmin=(dispatch)=>{
    return async ({email,password})=>{
        console.log(email,password);
        try{
            console.log('asdasdasdasd');
            const response = await server.post('/SigninAdmin',{email,password});
            console.log("admin Sign in in authcontex");
            await AsyncStorage.setItem('token',response.data.token);
            dispatch({type:'signin',payload:response.data.token});
            console.log('navigation t7et');
            navigate('Admin');
        }catch(err){
            console.log(err);
            dispatch({type:'add_error',
            payload:'Something went wrong with sign in'
        });
            //console.log(err.message);
        }

    }
}

const signinPharm=(dispatch)=>{
    return async ({email,password})=>{
        console.log(email,password);
        try{
            const response = await server.post('/signinpharm',{email,password});
            console.log(response.data.pharms1);
            if(response.data.pharms1.AdminAccept){
                navigate('PharmAccount');
            }
            else{
                navigate('WaitingAdmin');
            }

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


const signupPharm=(dispatch) =>{
    return async ({email,password,Confirmpassword,Fname,Lname,AdminAccept,location,pname,utype})=>{
        try{
            console.log(email,password,Confirmpassword,Fname,Lname,AdminAccept,location,pname,utype);
            const response = await server.post('/signupPharm',{email,password,Confirmpassword,Fname,Lname,AdminAccept,location,pname,utype});
            console.log('Response! V');
            await AsyncStorage.setItem('token',response.data.token);
            dispatch({type:'signupPharm',payload:response.data.token});
            navigate('WaitingAdmin');
        }catch(err){
            console.log(err);
            dispatch({type:'add_error',
            payload:'Something went wrong with sign up pharm'
        });
            //console.log(err.message);
        }
    }      
}

const signupDelivery=(dispatch) =>{
    return async ({email,password,Confirmpassword,Fname,Lname,AdminAccept,location,pname,utype})=>{
        try{
            console.log(email,password,Confirmpassword,Fname,Lname,AdminAccept,location,pname,utype);
            const response = await server.post('/signupDelivery',{email,password,Confirmpassword,Fname,Lname,AdminAccept,location,pname,utype});
            console.log('Response! V');
            await AsyncStorage.setItem('token',response.data.token);
            dispatch({type:'signupDelivery',payload:response.data.token});
            navigate('WaitingAdminD');
        }catch(err){
            console.log(err);
            dispatch({type:'add_error',
            payload:'Something went wrong with sign up pharm'
        });
        }
    }      
}


const signinDelivery=(dispatch)=>{
    return async ({email,password})=>{
        console.log(email,password);
        try{
            const response = await server.post('/signinDelivery',{email,password});
            if(response.data.del1.AdminAccept){
            navigate('DeliveryAccount');
            }
            else{
                navigate('WaitingAdminD');
            }
        }catch(err){
            console.log(err);
            dispatch({type:'add_error',
            payload:'Something went wrong with sign in'
        });
        }

    }
}


const getPharms = dispatch=>{
    return async()=>{
        const response=await server.get('/getPharms');
        dispatch({type:'getPharms',payload:response.data});
        //console.log(response);
        navigate('PharmsList');

    }
}

const acceptpharm=(dispatch)=>{
    return async ({pname})=>{
        try{
            console.log('accept pharm in auth contex, pname is:',pname);
            console.log(pname);
            const response = await server.post('/AcceptPharm',{pname});
            console.log('after response');
            console.log(response.data.pharms1);
            console.log('Response! V');
            navigate('Admin');
        }catch(err){
            console.log(err);
    }
}};

const acceptdel=(dispatch)=>{
    return async ({email,location})=>{
        try{
            console.log('accept del in auth contex, del name is:',email,location);
            console.log(email,location);
            const response = await server.post('/AcceptDel',{email,location});
            console.log('after response');
            console.log(response.data.del1);
            console.log('Response! V');
            navigate('WaitindDels');
        }catch(err){
            console.log(err);
    }
}};

const deleteuser=(dispatch)=>{
    return async ({email})=>{
        try{
            console.log('User email is:',email);
            console.log(email);
            const response = await server.post('/DeleteUser',{email});
            console.log('after response');
            navigate('Admin');
        }catch(err){
            console.log(err);
    }
}};


const deletedel=(dispatch)=>{
    return async ({email})=>{
        try{
            console.log('Delivery email is:',email);
            console.log(email);
            const response = await server.post('/DeleteDel',{email});
            console.log('Delivery deleted');
            navigate('Admin');
        }catch(err){
            console.log(err);
    }
}};


const deletepharm=(dispatch)=>{
    return async ({pname})=>{
        try{
            console.log('pharm name is:',{pname});
            console.log(pname);
            const response = await server.post('/DeletePharm',{pname});
            console.log('Pharm deleted');
            navigate('Admin');
        }catch(err){
            console.log(err);
    }
}};


export const {Provider,Context}=CreateDataContext(
    authReducer,
    {signin,signup,signout,clearErrorMessage,signupPharm,signinPharm,getPharms,signinAdmin,signupDelivery,signinDelivery,acceptpharm,acceptdel,deleteuser,deletepharm,deletedel,},
    {token:null, errorMessage:''}
);
