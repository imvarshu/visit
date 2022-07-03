import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; 
import Settings from '../screens/Settings';
import MyVisits from '../screens/MyVisits';
import Favourite from '../screens/Favourite';

const Tab = createBottomTabNavigator();

function BottomTab(props) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Visits" component={MyVisits} options={

        // this code is to change the default icon of bottom tab and color when focused
        {
            tabBarIcon: (tabInfo) => {
                return (
                  <Ionicons
                    name="grid"
                    size={24}
                    color={tabInfo.focused ? "#0C84FF" : "#8e8e93"}
                  />
                );
              },
        }
      } />
      <Tab.Screen name="Favourite" component={Favourite}  options={
        {
            tabBarIcon: (tabInfo) => {
                return (
                  <Ionicons
                    name="heart"
                    size={24}
                    color={tabInfo.focused ? "#0C84FF" : "#8e8e93"}
                  />
                );
              },
        }
      } />
      <Tab.Screen name="Settings" component={Settings}  options={
        {
            tabBarIcon: (tabInfo) => {
                return (
                  <Ionicons
                    name="settings"
                    size={24}
                    color={tabInfo.focused ? "#0C84FF" : "#8e8e93"}
                  />
                );
              },
        }
      } />
    </Tab.Navigator>
  );
}

export default BottomTab;