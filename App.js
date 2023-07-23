import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import EditEntry from './screens/EditEntry';
import AddAnEntry from './screens/AddAnEntry';
import Entries from './screens/Entries';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import { useState } from 'react';

const Stack = createNativeStackNavigator();

export default function App() {
  const [header, setHeader] = useState();

  function changeHeader(str){
    setHeader(str);
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#a2a" },
          headerTintColor: "white",
        }}
      >

        <Stack.Screen
          name="Homepage"
          component={Entries}
          options={{
            title: header,
          }}
          initialParams={{changeHeader}}
        />
        <Stack.Screen name="Add an entry" component={EditEntry} />
        <Stack.Screen name="Edit entry" component={AddAnEntry} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
