import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from "../Color.js"
import { AntDesign } from '@expo/vector-icons';

export default function ListItem({calories, description, id, overLimit, navigation}) {
  return (
    <Pressable style={({pressed}) => [
        {
          backgroundColor: pressed ? colors.inputBackground : colors.header,
        },
        styles.button, 
        {width:350}
      ]} onPress={()=>{navigation.navigate("Edit entry", {calories, description, id, overLimit})}}>
      <Text style={[styles.text, styles.descriptionText]}>{description}</Text>
      <View style={styles.rightContainer}>
        {overLimit ? <AntDesign name="warning" size={24} color="yellow" /> : <></> }
        <Text style={[styles.text, styles.caloriesText]}>{calories}</Text>
      </View>
      
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    marginLeft: 15,
  },
  text: {
    color: "white",
    fontSize: 18,
  },
  caloriesText: {
    color: "black",
    backgroundColor:"white",
    borderRadius: 5,
    width: 70,
  },
  descriptionText: {
    maxWidth: 240,
  },
  rightContainer: {
    flexDirection: "row"
  }
})