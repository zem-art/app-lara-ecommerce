import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import Home from '../container/home';
import Chat from '../container/chat';
import Troli from '../container/troli';
import Profile from '../container/profile';
import Market from '../container/marketPlace';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: '#AAA',
        // inactiveTintColor: '#4169e1',
        inactiveTintColor: '#c71585',
        activeBackgroundColor: '#ff1493',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={require('../asset/icon/dashboardBottom.png')}
              style={{tintColor: color, width: 30, height: 30}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={require('../asset/icon/chatShop.png')}
              style={{tintColor: color, width: 30, height: 30}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Market"
        component={Market}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={require('../asset/icon/Market.png')}
              style={{tintColor: color, width: 30, height: 30}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Troli"
        component={Troli}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={require('../asset/icon/troli.png')}
              style={{tintColor: color, width: 40, height: 40}}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={require('../asset/icon/personIcon.png')}
              style={{tintColor: color, width: 30, height: 30}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;
