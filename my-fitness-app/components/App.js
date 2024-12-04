import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './components/LoginScreen';  // Correct path to LoginScreen.js
import HomeScreen from './components/HomeScreen';    // Correct path to HomeScreen.js
import ProgressScreen from './components/ProgressScreen'; // Correct path to ProgressScreen.js
import WorkoutScreen from './components/WorkoutScreen';   // Correct path to WorkoutScreen.js


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Progress" component={ProgressScreen} />
        <Stack.Screen name="Workout" component={WorkoutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
