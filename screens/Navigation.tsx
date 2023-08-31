import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Register } from './Register';
import { Login } from './Login';
import { CreateCompany } from './CreateCompany';
import { AddUsers } from './AddUsers';
import { Speech } from './AddUsers/Speech';

const Stack = createNativeStackNavigator();

export const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="speech"
          component={Speech}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="add_users"
          component={AddUsers}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="create_company"
          component={CreateCompany}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
