import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './src/screens/auth/SignUp';
import Login from './src/screens/auth/Login';
import Home from './src/screens/main/Home';
import MarkConfrontation from './src/screens/main/MarkConfrontation';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator
        initialRouteName="MarkConfrontation"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MarkConfrontation" component={MarkConfrontation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}