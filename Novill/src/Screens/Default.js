import { createNativeStackNavigator } from 'react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';

const Stack = createNativeStackNavigator();

const MyNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
  headerShadowVisible: false,
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default MyNavigator;