import CreateDataContext from "./CreateDataContext";
import tracker from "../api/tracker";
const authReducer=(state,action)=>{
    switch(action.type){
        case 'add_error':
            return {...state, errorMessage:action.payload};
        default:
            return state;
    };
};

const signup= dispatch=>{
    return async ({email,password})=>{
        try{
            const response = await tracker.post('/signup',{email,password});
            console.log(response.data);
        }catch(err){
            dispatch({type:'add_error',payload:'Somethin went wrong with sign up'});
            console.log('Invaild signup');
        }
        
    }
}
const signin=(dispatch)=>{
    return ({email,password})=>{

    }
}
const signout=(dispatch)=>{
    return()=>{

    }
}

export const {Provider,Context}=CreateDataContext(
    authReducer,
    {signin,signup,signout},
    {isSignedIn: false,errorMessage:''}
);

