import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, Button, StyleSheet, Text, View } from 'react-native';
import EditEntry from './screens/EditEntry';
import AddAnEntry from './screens/AddAnEntry';
import Entries from './screens/Entries';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import { useState } from 'react';
import { LogBox } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);
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
          headerTitleAlign: "center",
        }}
      >

        <Stack.Screen
          name="Homepage"
          component={Entries}
          options={({navigation}) => ({
            title: header,
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate("Add an entry")}>
                <AntDesign name="plus" size={24} color="white" />
              </TouchableOpacity>
            ),
          })}
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
