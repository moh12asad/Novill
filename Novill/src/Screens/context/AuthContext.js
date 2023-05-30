import CreateDataContext from "./CreateDataContext";
import server from "../api/Server";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {navigate} from '../navigationRef';
import React from "react";

const authReducer=(state,action)=>{
    switch(action.type){
        case 'add_error':
            return {...state, errorMessage:action.payload};
        case 'signup':
            return {errorMessage:'', token:action.payload};
        /*case 'signin':
            return {errorMessage:'', token:action.payload};*/
        case 'signinPharm':
            return {errorMessage:'', pharms1:action.payload};
        case 'signupPharm':
            return {errorMessage:'', pharms1:action.payload};
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

const clearErrorMessage=dispatch=>()=>{
    dispatch({type: 'clear_error_message'});

}

const signup= (dispatch) =>{
    return async ({email,password,Confirmpassword,Fname,Lname,utype,phone})=>{
        try{
            //console.log(email,password,Confirmpassword,Fname,Lname,utype);
            const response = await server.post('/signup',{email,password,Confirmpassword,Fname,Lname,utype,phone});
            console.log('Response! V');
            await AsyncStorage.setItem('token',response.data.token);
            console.log(response.data.user);
            dispatch({type:'signup',payload:response.data.token});
            navigate('Account',{user:response.data.user});
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
            //await AsyncStorage.setItem('token',response.data.token);
            //dispatch({type:'signin',payload:response.data.token});
            console.log(response.data.user);
            navigate('Account',{user:response.data.user});
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
            dispatch({type:'signinPharm',payload:response.data.pharms1});
            if(response.data.pharms1.AdminAccept){
                navigate('PharmAccount',{pharms1:response.data.pharms1});
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
    return async ({email,password,Confirmpassword,Fname,Lname,AdminAccept,location,pname,phone,utype,desc,imageUri})=>{
        try{
            console.log(email,password,Confirmpassword,Fname,Lname,AdminAccept,location,pname,phone,utype,desc,imageUri);
            const image=imageUri;
            const response = await server.post('/signupPharm',{email,password,Confirmpassword,Fname,Lname,AdminAccept,location,pname,phone,utype,desc,image});
            console.log('Response! V');
            //await AsyncStorage.setItem('token',response.data.token);
            //dispatch({type:'signupPharm',payload:response.data.pharms1});
            console.log(response.data.pharms1);
            navigate('WaitingAdmin',{pharms1:response.data.pharms1});
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
    return async ({email,password,Confirmpassword,Fname,Lname,AdminAccept,location,pname,utype,phone})=>{
        try{
            console.log(email,password,Confirmpassword,Fname,Lname,AdminAccept,location,pname,utype,phone);
            const response = await server.post('/signupDelivery',{email,password,Confirmpassword,Fname,Lname,AdminAccept,location,pname,utype,phone});
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
            if(response.data.del.AdminAccept){
            navigate('DeliveryAccount',{del:response.data.del});
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

const reportuser=(dispatch)=>{
    return async ({title,text,user})=>{
        console.log(title,text,user);
        try{
            const response = await server.post('/ReportUser',{title,text,user});
            console.log(response.data.user);
            navigate('ReportSummary',{user:response.data.user,r:response.data.r});
        }catch(err){
            console.log(err);
            dispatch({type:'add_error',
            payload:'Something went wrong with sign in'
        });
        }

    }
}
const reportpharm=(dispatch)=>{
    return async ({title,text,pharm})=>{
        console.log(title,text,pharm);
        try{
            const response = await server.post('/ReportPharm',{title,text,pharm});
            console.log(response.data.pharm);
            navigate('ReportSummary',{pharm:response.data.pharm,r:response.data.r});
        }catch(err){
            console.log(err);
            dispatch({type:'add_error',
            payload:'Something went wrong with sign in'
        });
        }

    }
}
const reportdel=(dispatch)=>{
    return async ({title,text,del})=>{
        console.log(title,text,del);
        try{
            const response = await server.post('/ReportDelivery',{title,text,del});
            console.log('reportDel authcontex:',response.data.del);
            navigate('ReportSummary',{del:response.data.del,r:response.data.r});
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
const editpharm=(dispatch)=>{
    return async ({email,Fname,Lname,location,pname,phone,desc,pharm})=>{
        try{
            console.log('Authcontext, editpharm function:',{email,Fname,Lname,location,pname,phone,desc,pharm});            
            /*console.log('accept pharm in auth contex, pname is:',pname);
            console.log(pname);*/
            const response = await server.post('/EditPharm',{email,Fname,Lname,location,pname,phone,desc,pharm});
            console.log('after response');
            console.log(response.data.pharms1);
            navigate('PharmAccount',{pharms1:response.data.pharms1});
            /*console.log('Response! V');
            navigate('Admin');
    */}catch(err){
            console.log(err);
    }
}};

const edituser=(dispatch)=>{
    return async ({email,Fname,Lname,phone,user})=>{
        try{
            console.log('Authcontext, edituser function:',{email,Fname,Lname,phone,user});            
            /*console.log('accept pharm in auth contex, pname is:',pname);
            console.log(pname);*/
            const response = await server.post('/EditUser',{email,Fname,Lname,phone,user});
            console.log('after response');
            console.log(response.data.user);
            navigate('Account',{user:response.data.user});
            /*console.log('Response! V');
            navigate('Admin');
    */}catch(err){
            console.log(err);
    }
}};
const editdel=(dispatch)=>{
    return async ({email,Fname,Lname,phone,del})=>{
        try{
            console.log('Authcontext, editdel function:',{email,Fname,Lname,phone,del});            
            /*console.log('accept pharm in auth contex, pname is:',pname);
            console.log(pname);*/
            const response = await server.post('/EditDel',{email,Fname,Lname,phone,del});
            console.log('after response');
            console.log(response.data.del);
            navigate('DeliveryAccount',{del:response.data.del});
            /*console.log('Response! V');
            navigate('Admin');
    */}catch(err){
            console.log(err);
    }
}};


const acceptdel=(dispatch)=>{
    return async ({email,location})=>{
        try{
            console.log('accept del in auth contex, del name is:',email,location);
            console.log('Ok, ok okasasdasdasdasd');
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




const addproduct= (dispatch) =>{
    return async ({prodname,desc,salePrice,sale,price,amount,pname,status,imageUri})=>{
        try{
            console.log(prodname,desc,salePrice,sale,price,amount,pname,imageUri);
            const image=imageUri;
            const response = await server.post('/Addproduct',{prodname,desc,salePrice,sale,price,amount,pname,status,image});
            console.log('Response! V');
            console.log('**********ADD PRODUCT******\n',response.data);
            navigate('PharmAccount',{pharms1:response.data.pharms1});
            
        }catch(err){
            console.log(err);
            dispatch({type:'add_error',
            payload:'Something went wrong with sign up'
        });
            //console.log(err.message);
        }
        
    }
}
const productlistforuser=(dispatch)=>{
    return async({item})=>{
        console.log(item);
        const response=await server.get('/getProducts',{
        params: { item }}
        );
        //dispatch({type:'productslistforuser',payload:response.data});
        console.log("HOOON");
        console.log(response.data.fpharm);
        //navigate('PharmsList');
}}
const AddToCart=(dispatch)=>{

    return async({cart,prod,pharm})=>{
        console.log('In AddToCart function in Authcontext the passed cart and prod is:',cart,prod,pharm);
        const response = await server.post('/AddToCart',{cart,prod,pharm});
    }
}
const setAddress= (dispatch) =>{
    return async ({city,street,building,floor,apartnum,phone,cart})=>{
        try{
            console.log(city,street,building,floor,apartnum,phone,cart);
            const response = await server.post('/SetAddress',{city,street,building,floor,apartnum,phone,cart});
            console.log('Response! V');
            console.log('-------------Authcontex-------------\n',response.data.address,response.data.cart,'\n---------------------------------------\n');
            navigate('PayMethod',{address:response.data.address,cart:response.data.cart});

        }catch(err){
            console.log(err);
            dispatch({type:'add_error',
            payload:'Something went wrong with sign up'
        });
            //console.log(err.message);
        }
        
    }
}
const order= (dispatch) =>{
    return async ({cart,address,order,totalAmount,totalPrice})=>{
        try{
            console.log(cart,address,totalAmount,totalPrice);
            const response = await server.post('/CreateOrderCash',{cart,address,totalAmount,totalPrice});
            const user=cart.user
            navigate('Account',{user});
        }catch(err){
            console.log(err);
            dispatch({type:'add_error',
            payload:'Something went wrong with sign up'
        });
            //console.log(err.message);
        }
        
    }
}
const getordersforpharm=(dispatch)=>{
    return async ({pharm})=>{
        console.log('AuthContex',pharm);
        try{
            const response = await server.get('/GetOrdersForPharm',{
                params: { pharm }}
                );
            console.log(response.data.orders);
            navigate('OrdersList',{orders:response.data.orders});
        }catch(err){
            console.log(err);
            dispatch({type:'add_error',
            payload:'Something went wrong with sign in'
        });
            //console.log(err.message);
        }
    }
}
/***********Hereereeeeee*********** */
const changestatus=(dispatch)=>{
    return async({order,newStatus})=>{
        console.log(order,newStatus);
        try{
            const response = await server.get('/ChangeStatus',{
                params: { order,newStatus }}
                );
            console.log('Response.data.order is:',response.data.order);
            //order = response.data.order;
            navigate('OrderProcess',{order:response.data.order});
        }catch(err){
            console.log(err);
            dispatch({type:'add_error',
            payload:'Something went wrong with sign in'
        });
            //console.log(err.message);
        }
    }
}

const productinorder=(dispatch)=>{
    return async({item,order})=>{
        console.log(item,order);
        try{
            const response = await server.post('/ProductInOrder',{item,order});
            console.log('Response.data.order is:',response.data.order,response.data.item);
            //order = response.data.order;
            navigate('OrderProcess',{order:response.data.order});
        }catch(err){
            console.log(err);
            dispatch({type:'add_error',
            payload:'Something went wrong with sign in'
        });
            //console.log(err.message);
        }
    }
}
const TestingImage=(dispatch)=>{
    return async({imageUri})=>{
        console.log(imageUri);
        //console.log(item,order);
        try{
            const response = await server.post('/TestingImage',{imageUri});
            console.log('Response.data.image is:',response.data.image);
            //order = response.data.order;
            navigate('ShowTest',{image:response.data.image});
        }catch(err){
            console.log(err);
            dispatch({type:'add_error',
            payload:'Something went wrong with sign in'
        });
            //console.log(err.message);
        }
    }
}
const deleteproduct=(dispatch)=>{
    return async({prod,pharm})=>{
        console.log({prod,pharm});
        try{
            //console.log(email,password,Confirmpassword,Fname,Lname,utype);
            const response = await server.post('/DeleteProd',{prod,pharm});
            console.log('Response! V');
            //await AsyncStorage.setItem('token',response.data.token);
            console.log(response.data.pharm);
            //dispatch({type:'signup',payload:response.data.token});
            navigate('PharmAccount',{pharm:response.data.pharm});
        }catch(err){
            console.log(err);
            dispatch({type:'add_error',
            payload:'Something went wrong with sign up'
        });
            //console.log(err.message);
        }
    }
}

export const {Provider,Context}=CreateDataContext(
    authReducer,
    {signin,signup,signout,clearErrorMessage,editdel,reportuser,reportpharm,reportdel,signupPharm,signinPharm,editpharm,edituser,getPharms,signinAdmin,signupDelivery,signinDelivery,acceptpharm,acceptdel,deleteuser,deletepharm,deletedel,addproduct,productlistforuser,AddToCart,setAddress,order,getordersforpharm,changestatus,productinorder,TestingImage,deleteproduct},
    {token:null, errorMessage:''}
);
