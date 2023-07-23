import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


export default function AllEntries({route}) {
  route.params.changeHeader("All Entries")
  return (
    <View>
      <Text>AllEntries</Text>
    </View>
  )
}

const styles = StyleSheet.create({


})