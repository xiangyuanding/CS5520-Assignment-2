import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function OverLimitEntries({route}) {
  route.params.changeHeader("Over-limit Entries")
  return (
    <View>
      <Text>OverLimitEntries</Text>
    </View>
  )
}

const styles = StyleSheet.create({})