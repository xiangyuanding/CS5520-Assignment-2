import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AllEntries from './AllEntries';
import OverLimitEntries from './OverLimitEntries';

const Tab = createBottomTabNavigator();

export default function Entries({route}) {
  const changeHeader = route.params.changeHeader;
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={AllEntries} initialParams={{changeHeader}} />
      <Tab.Screen name="Settings" component={OverLimitEntries} initialParams={{changeHeader}} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})