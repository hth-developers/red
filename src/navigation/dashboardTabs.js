import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './../screens/Home';
import Track from './../screens/Track';
import Dashboard from './../screens/Dashboard';

const Tab = createBottomTabNavigator();

const DashboardTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      scscreenOptions={{
        headerShown: false,
      }}
      tabBarOptions={{
        activeTintColor: '#000',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size, focused}) => (
            <Icon
              name={focused ? 'home' : 'home-outline'}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Track"
        component={Track}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Icon
              name={focused ? 'map-marker-right' : 'map-marker-right-outline'}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Dsahboard',
          tabBarIcon: ({color, size, focused}) => (
            <Icon
              name={focused ? 'chart-areaspline' : 'chart-areaspline-variant'}
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default DashboardTabs;
