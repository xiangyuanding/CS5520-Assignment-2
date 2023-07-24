import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AllEntries from './AllEntries';
import OverLimitEntries from './OverLimitEntries';
import { AntDesign } from '@expo/vector-icons'; 
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function Entries({route}) {
  const changeHeader = route.params.changeHeader;
  return (
    <Tab.Navigator screenOptions={{
        headerShown: false, 
        tabBarActiveTintColor: "orange",
        tabBarStyle:{backgroundColor: "purple"},
      }}>
      <Tab.Screen name="All Entries" component={AllEntries} initialParams={{changeHeader}} options={{
          tabBarLabel: 'All Entries',
          tabBarIcon: ({color}) => (
            <AntDesign name="Trophy" size={24} color={color} />
          ),
        }} />
      <Tab.Screen name="Over-limit Entries" component={OverLimitEntries} initialParams={{changeHeader}} options={{
          tabBarLabel: 'Over-limit Entries',
          tabBarIcon: ({color}) => (
            <AntDesign color={color} name="exclamation" size={24} />
          ),
        }} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})