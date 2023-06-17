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
import ProductsScreen from './src/Screens/ProductsScreen';
import { Provider as AuthProvider } from './src/Screens/context/AuthContext';
import { setNavigator } from './src/Screens/navigationRef';
import SigninAdminScreen from './src/Screens/SigninAdmin';
import PharmStoreScreen from './src/Screens/PharmStoreScreen';
import ProductScreen from './src/Screens/ProductScreen';
import CartScreen from './src/Screens/CartScreen';
import DestScreen from './src/Screens/DestScreen';
import PayMethodScreen from './src/Screens/PayMethod';
import PayCashScreen from './src/Screens/PayCashScreen';
import OrdersListScreen from './src/Screens/OrdersListScreen';
import ViewOrderScreen from './src/Screens/ViewOrderScreen';
import OrderProcessScreen from './src/Screens/OrderProcessScreen';
import PharmProductScreen from './src/Screens/PharmProductScreen';
import EditPharmScreen from './src/Screens/EditPharmScreen';
import EditUserScreen from './src/Screens/EditUserScreen';
import EditDeliveryScreen from './src/Screens/EditDeliveryScreen';
import ReportUserScreen from './src/Screens/ReportUserScreen';
import ReportSummaryScreen from './src/Screens/ReportSummaryScreen';
import ReportPharmScreen from './src/Screens/ReportPharmScreen';
import ReportDeliveryScreen from './src/Screens/ReportDeliveryScreen';
import ViewReportsScreen from './src/Screens/ViewReportsScreen';
import ViewReportScreen from './src/Screens/ViewReportScreen';
import TestScreen from './src/Screens/TestScreen';
import ShowTestScreen from './src/Screens/ShowTestScreen';
import ProductForOrderProcessScreen from './src/Screens/ProductForOrderProcessScreen';
import ReadyOrdersScreen from './src/Screens/ReadyOrdersScreen';
import ReadyOrdersForDelScreen from './src/Screens/ReadyOrdersForDelScreen';
import ShowOrderScreen from './src/Screens/ShowOrderScreen';
import OnGoingOrderDeliveryScreen from './src/Screens/OnGoingOrderDeliveryScreen';
import ShowPrescriptionScreen from './src/Screens/ShowPrescriptionScreen';
import UpdateAmountScreen from './src/Screens/UpdateAmountScreen';
import HistoryScreen from './src/Screens/HistoryScreen';
import OnGoingOrderForUserScreen from './src/Screens/OnGoingOrderForUserScreen';
import WaitingForPharmApproveScreen from './src/Screens/WaitingForPharmApproveScreen';
import PayWithCreditScreen from './src/Screens/PayWithCreditScreen';
import PayWithCreditCardScreen from './src/Screens/PayWithCreditCardScreen';
import OrderProcessForUserScreen from './src/Screens/OrderProcessForUserScreen';
import ShowProductInCartForUserScreen from './src/Screens/ShowProductInCartForUserScreen';
const switchNavigator=createSwitchNavigator({
  //Loading:LoadingScreen,
  loginFlow: createStackNavigator({
    Home:HomeScreen,
    Test:TestScreen,
    ShowTest:ShowTestScreen,
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
    PharmStore:PharmStoreScreen,
    Product:ProductScreen,
    Cart:CartScreen,
    Dest:DestScreen,
    PayMethod:PayMethodScreen,
    PayCash:PayCashScreen,
    EditUser:EditUserScreen,
    ReportUser:ReportUserScreen,
    ReportSummary:ReportSummaryScreen,
    History:HistoryScreen,
    OnGoingOrderForUser:OnGoingOrderForUserScreen,
    PayWithCredit:PayWithCreditScreen,
    PayWithCreditCard:PayWithCreditCardScreen,
    OrderProcessForUser:OrderProcessForUserScreen,
    ShowProductInCartForUser:ShowProductInCartForUserScreen,
  }),
  PharmFlow:createStackNavigator({
    WaitingAdmin:WaitingForAdmin,
    PharmAccount:PharmAccountScreen,
    AddProducts:AddProductsScreen,
    Products:ProductsScreen,
    EditPharm:EditPharmScreen,
    OrdersList:OrdersListScreen,
    ViewOrder:ViewOrderScreen,
    OrderProcess:OrderProcessScreen,
    PharmProduct:PharmProductScreen,
    ReportPharm:ReportPharmScreen,
    ReportSummary:ReportSummaryScreen,
    ProductForOrderProcess:ProductForOrderProcessScreen,
    ReadyOrders:ReadyOrdersScreen,
    ShowPrescription:ShowPrescriptionScreen,
    UpdateAmount:UpdateAmountScreen,
 

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
    ViewReports:ViewReportsScreen,
    ViewReport:ViewReportScreen,


  }),
  DeliveryFlow:createStackNavigator({
    //DeliveryAccount:DeliveryAccountScreen,
    DeliveryAccount:DeliveryAccountScreen,
    WaitingAdminD:WaitingAdminDScreen,
    EditDelivery:EditDeliveryScreen,
    ReportDelivery:ReportDeliveryScreen,
    ReportSummary:ReportSummaryScreen,
    ReadyOrdersForDel:ReadyOrdersForDelScreen,
    ShowOrder:ShowOrderScreen,
    OnGoingOrderDelivery:OnGoingOrderDeliveryScreen,
    WaitingForPharmApprove:WaitingForPharmApproveScreen,

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