import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import AccountScreen from "./src/Screens/AccountScreen";
import SigninScreen from "./src/Screens/SigninScreen";
import SignupScreen from "./src/Screens/SignupScreen";
import { Provider as AuthProvider } from './src/Screens/context/AuthContext';

const switchNavigator=createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin:SigninScreen,
  }),
  mainFlow: createBottomTabNavigator({
    Account: AccountScreen
  })
});



const App=createAppContainer(switchNavigator);

export default ()=>{
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};