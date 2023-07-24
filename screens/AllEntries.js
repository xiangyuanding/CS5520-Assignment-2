import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'


export default function AllEntries({route}) {
  useEffect(()=>{
    route.params.changeHeader("All Entries")
  })
  
  return (
    <View>
      <Text>AllEntries</Text>
    </View>
  )
}

const styles = StyleSheet.create({


})