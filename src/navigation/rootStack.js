import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeStack from './homeStack';
import Login from './../screens/Login';
import ForgetPassword from './../screens/ForgetPassword';
import DashboardTabs from './dashboardTabs';

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen name="DashboardTabs" component={DashboardTabs} />
      <Stack.Screen name="HomeStack" component={HomeStack} />
    </Stack.Navigator>
  );
};

export default RootStack;
