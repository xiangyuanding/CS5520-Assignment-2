import {TextInput, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import PressButton from '../components/PressButton'
import colors from "../Color.js"
import { Ionicons } from '@expo/vector-icons';
import { writeToDB } from "../firebase/firestoreHelper";

export default function AddAnEntry({navigation}) {
  const [calories, setCalories] = useState("");
  const [description, setDescription] = useState("");

  function reset(){
    setCalories("");
    setDescription("");
  }
  function submit(){
    var overLimit = false;
    if (!Number(calories) || calories.length > 6){
      alert("Invalid calories input");
      return;
    }
    if (!description){
      alert("Invalid description");
      return;
    }
    if (Number(calories)>500){
      overLimit=true;
    }
    writeToDB({calories, description, overLimit});
    reset();
    navigation.goBack();
  }

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>Calories </Text>
        <TextInput style={[styles.input, styles.text]} onChangeText={(text)=>setCalories(text)} value={calories}/>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Description </Text>
        <TextInput style={[styles.input, styles.text, styles.description]} multiline={true} textAlignVertical="top" onChangeText={(text)=>setDescription(text)} value={description}/>
      </View>
      <View style={[styles.container, styles.buttonContainer]}>
        <PressButton handlePress={reset} text="Reset" width={100}></PressButton>
        <PressButton handlePress={submit} text="Submit" width={100}></PressButton>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection:"row",
    justifyContent: "flex-end",
    marginRight: 30,
    marginTop: 20
  },
  text: {
    fontSize: 18,
    color: colors.header,
  },
  input: {
    backgroundColor: colors.inputBackground,
    width: 240,
    borderRadius: 7
  },
  description: {
    minHeight: 150,
  },
  buttonContainer: {
    marginRight: 0,
    justifyContent: "space-evenly",
  }
})