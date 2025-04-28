import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import Icon from '../components/Icon';
import Logo from '../../assets/firebattles.png';

// Import screens
import Welcome from '../screens/auth/Welcome';
import SignUp from '../screens/auth/SignUp';
import Login from '../screens/auth/Login';
import Home from '../screens/main/Home';
import MarkConfrontation from '../screens/main/MarkConfrontation';
import Profile from '../screens/main/Profile';

// Import utilities
import { colors } from '../utils/colors';

// Create navigators
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Main tab navigator for authenticated users
const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.muted,
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopColor: colors.border,
        }
      }}
    >
      <Tab.Screen 
        name="HomeTab" 
        component={Home} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="MarkConfrontationTab" 
        component={MarkConfrontation} 
        options={{
          tabBarLabel: 'Batalhas',
          tabBarIcon: ({ color, size }) => (
            <Icon name="flame-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="ProfileTab" 
        component={Profile} 
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color, size }) => (
            <Icon name="person-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// Root navigator
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
            headerShown: true,
            headerTitle: '',                // ❌ nada no título
            headerStyle: {
            backgroundColor: colors.primary,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: '600',
            },
            contentStyle: { backgroundColor: colors.background },
        }}
        >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen 
            name="MainApp" 
            component={MainTabs} 
            // aqui você não precisa mais passar headerTitle: null
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;