import {NavigationActions, navigationActions} from 'react-navigation';

let navigator;

export const setNavigator=nav =>{
    navigator=nav;
};
//routname: signup,signin... IN app.js file, params: the parameters we want to sent to the screen
export const navigate=(routeName,params)=>{
    navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params
        })
    );
};