import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Booking from '../screens/Booking';
import Inward from '../screens/Inward';
import Dispatch from '../screens/Dispatch';
import Delivery from '../screens/Delivery';

import HeadRight from '../components/header/HeadRight';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerRight: (props) => <HeadRight {...props} />}}>
      <Stack.Screen name="Booking" component={Booking} />
      <Stack.Screen name="Inward" component={Inward} />
      <Stack.Screen name="Dispatch" component={Dispatch} />
      <Stack.Screen name="Delivery" component={Delivery} />
    </Stack.Navigator>
  );
};

export default HomeStack;
