import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

export default function OverLimitEntries({route}) {
  useEffect(()=>{
    route.params.changeHeader("Over-limit Entries")
  })
  
  return (
    <View>
      <Text>OverLimitEntries</Text>
    </View>
  )
}

const styles = StyleSheet.create({})