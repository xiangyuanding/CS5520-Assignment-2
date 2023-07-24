import { StyleSheet, Pressable, View, Text } from 'react-native'
import React from 'react'
import colors from "../Color.js"

export default function PressButton({handlePress, text, textColor}) {
  return (
    <Pressable style={({pressed}) => [
        {
          backgroundColor: pressed ? colors.pressedColor : colors.transparent,
        },
        styles.button,
      ]} onPress={handlePress}>
      <Text style={textColor}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    borderRadius: 15,
    padding: 10,
  },
})