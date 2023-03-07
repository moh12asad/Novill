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
import AddProductScreen from './src/Screens/AddProductScreen';
import UsersListScreen from './src/Screens/UsersListScreen';
import DeleteUsersScreen from './src/Screens/DeleteUsersScreen';
import AdminPharmListScreen from './src/Screens/AdminPharmListScreen';
import DeletePharmScreen from './src/Screens/DeletePharmScreen';
import DeleteDelsScreen from './src/Screens/DeleteDelsScreen';
import AdminDelsListScreen from './src/Screens/AdminDelsListScreen';


import { Provider as AuthProvider } from './src/Screens/context/AuthContext';
import { setNavigator } from './src/Screens/navigationRef';
import SigninAdminScreen from './src/Screens/SigninAdmin';
const switchNavigator=createSwitchNavigator({
  //Loading:LoadingScreen,
  loginFlow: createStackNavigator({
    Home:HomeScreen,
    Pharm:PharmScreen,
    Delivery:DeliveryScreen,
    User:UserScreen,
    Signup:SignupScreen,
    Signin:SigninScreen,
    SignupPharm:SignupPharmScreen,
    SigninPharm:SigninPharmScreen,
    SigninAdmin: SigninAdminScreen,
    SigninDelivery:SigninDeliveryScreen,
    SignupDelivery:SignupDeliveryScreen,

  }),
  UserFlow: createStackNavigator({
    Account:AccountScreen,
    PharmsList:PharmsListScreen,
  }),
  PharmFlow:createStackNavigator({
    PharmAccount:PharmAccountScreen,
    WaitingAdmin:WaitingForAdmin,
    AddProducts:AddProductsScreen,
    //AddProduct:AddProductScreen,
  }),
  AdminFlow: createStackNavigator({
    Admin: AdminScreen,
    WaitingPharms:WaitingPharmsScreen,
    WaitingDels:WaitingDeliviriesScreen,
    AcceptPharms:AcceptPharmsScreen,
    AcceptDels:AcceptDelsScreen,
    UsersList:UsersListScreen,
    DeleteUser:DeleteUsersScreen,
    AdminPharmList:AdminPharmListScreen,
    DeletePharm:DeletePharmScreen,
    DeleteDel:DeleteDelsScreen,
    AdminDelsList:AdminDelsListScreen,

  }),
  DeliveryFlow:createStackNavigator({
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