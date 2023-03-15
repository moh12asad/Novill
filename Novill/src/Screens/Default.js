import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/Screens/HomeScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false, // set this to false to hide the header
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />

    </Stack.Navigator>
  );
}

export default App;