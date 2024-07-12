import React from 'react';
import Messages from './screens/messages';
import Home from './screens/home';
import Signin from './screens/signin';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Messages">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Messages" component={Messages} options={{ title: 'Comments' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
