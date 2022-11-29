import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import AccountScreen from "./src/Screens/AccountScreen";
import SigninScreen from "./src/Screens/SigninScreen";
import SignupScreen from "./src/Screens/SignupScreen";
import LoadingScreen from './src/Screens/LoadingScreen';
import { Provider as AuthProvider } from './src/Screens/context/AuthContext';
import { setNavigator } from './src/Screens/navigationRef';
const switchNavigator=createSwitchNavigator({
  Loading:LoadingScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin:SigninScreen,
    //Account:AccountScreen,
  }),
  mainFlow: createStackNavigator({
    Account: AccountScreen,

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