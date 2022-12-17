import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import AccountScreen from "./src/Screens/AccountScreen";
import SigninScreen from "./src/Screens/SigninScreen";
import SignupScreen from "./src/Screens/SignupScreen";
import LoadingScreen from './src/Screens/LoadingScreen';
import PageScreen from './src/Screens/PageScreen';
import PharmsListScreen from './src/Screens/PharmsListScreen';
import HomeScreen from './src/Screens/HomeScreen';
import UserScreen from './src/Screens/UserScreen';
import PharmScreen from './src/Screens/PharmScreen';
import SignupPharmScreen from './src/Screens/SignupPharmScreen';
import WaitingForAdmin from './src/Screens/WaitingForAdmin';
import SigninPharmScreen from './src/Screens/SigninPharmScreen';
import PharmAccountScreen from './src/Screens/PharmAccount';
import AddProductsScreen from './src/Screens/AddProductsScreen';
import AdminScreen from './src/Screens/AdminScreen';
import WaitingPharmsScreen from './src/Screens/WaitingPharmsScreen';
import SignupDeliveryScreen from './src/Screens/SignupDeliveryScreen';
import DeliveryScreen from './src/Screens/DeliveryScreen';
import SigninDeliveryScreen from './src/Screens/SigninDeliveryScreen';
import WaitingAdminDScreen from './src/Screens/WaitingAdminDScreen';
import DeliveryAccountScreen from './src/Screens/DeliveryAccountScreen';
import WaitingDeliviriesScreen from './src/Screens/WaitingDeliviriesScreen';
import AcceptPharmsScreen from './src/Screens/AcceptPharmsScreen';
import AcceptDelsScreen from './src/Screens/AcceptDelsScreen';

import { Provider as AuthProvider } from './src/Screens/context/AuthContext';
import { setNavigator } from './src/Screens/navigationRef';
import SigninAdminScreen from './src/Screens/SigninAdmin';
const switchNavigator=createSwitchNavigator({
  //Loading:LoadingScreen,
  loginFlow: createStackNavigator({
    Home:HomeScreen,
    //Account:AccountScreen,tryLocalSignin
  }),
  UserFlow: createStackNavigator({
    User:UserScreen,
    Signup:SignupScreen,
    Signin:SigninScreen,
    Account:AccountScreen,
    PharmsList:PharmsListScreen,
  }),
  PharmFlow:createStackNavigator({
    Pharm:PharmScreen,
    SignupPharm:SignupPharmScreen,
    SigninPharm:SigninPharmScreen,
    PharmAccount:PharmAccountScreen,
    WaitingAdmin:WaitingForAdmin,
    AddProducts:AddProductsScreen,
  }),
  AdminFlow: createStackNavigator({
    SigninAdmin: SigninAdminScreen,
    Admin: AdminScreen,
    WaitingPharms:WaitingPharmsScreen,
    WaitingDels:WaitingDeliviriesScreen,
    AcceptPharms:AcceptPharmsScreen,
    AcceptDels:AcceptDelsScreen,

  }),
  DeliveryFlow:createStackNavigator({
    Delivery:DeliveryScreen,
    SigninDelivery:SigninDeliveryScreen,
    SignupDelivery:SignupDeliveryScreen,
    //DeliveryAccount:DeliveryAccountScreen,
    DeliveryAccount:DeliveryAccountScreen,
    WaitingAdminD:WaitingAdminDScreen,
  }),
  
  mainFlow: createStackNavigator({
    Account: AccountScreen,
    Page: PageScreen,

  })
});



const App=createAppContainer(switchNavigator);

export default ()=>{
  return (
    <AuthProvider>
      <App ref={(navigator)=>{setNavigator(navigator)}}/>
    </AuthProvider>
  );
};