import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import Chat from './Chat';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Excel from './Todo';
import {Youtube} from 'react-native-feather';
import {Box} from 'react-native-feather';
import Json from './Json';
import Putdatascrn from './Putdatascrn';

const Tab = createBottomTabNavigator();

const ButtomNavi = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      {/* <Tab.Screen name="Chat" component={Putdatascrn} /> */}
      <Tab.Screen
        name="Json"
        component={Json}
        options={{
          tabBarLabel: 'Json',
          tabBarIcon: ({color, size}) => <Box />,
        }}
      />
      <Tab.Screen
        name="TodoList"
        component={Excel}
        options={{
          tabBarLabel: 'TodoList',
          tabBarIcon: ({color, size}) => <Box />,
        }}
      />

      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => <Youtube />,
        }}
      />
    </Tab.Navigator>
  );
};

export default ButtomNavi;
