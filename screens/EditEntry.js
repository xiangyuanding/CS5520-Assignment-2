import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import colors from '../Color'
import PressButton from '../components/PressButton'
import { deleteFromDB, setToDB } from '../firebase/firestoreHelper'
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function EditEntry({route:{params:{calories, description, id, overLimit}}, navigation}) {
  const [overLimitCheck, setOverLimitCheck] = useState(overLimit);

  function handleDelete(){
    Alert.alert("Delete this record?", "", [{
      text: 'OK',
      onPress: () => {    
        deleteFromDB(id);
        navigation.goBack();
      },
    },
    {
      text: 'Cancel',
      onPress: () => {return},
    }])
  }
  function handleCheck(){
    Alert.alert("Mark as reviewed?", "", [{
      text: 'OK',
      onPress: () => {    
        setToDB({calories, description, id, overLimit:false});
        setOverLimitCheck(false);
      },
    },
    {
      text: 'Cancel',
      onPress: () => {return},
    }])


  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{"Calories: "+calories}</Text>
      <Text style={styles.text}>{"Description: "+description}</Text>
      <View style={styles.buttons}>
        <PressButton 
          handlePress={handleDelete} 
          text={<FontAwesome5 name="trash-alt" size={20} color="white" />} 
          width={70} />
        {overLimitCheck ? 
        <PressButton 
          handlePress={handleCheck} 
          text={<AntDesign name="check" size={20} color="white" />} 
          width={70} /> : <></> 
        }
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: 300,
    backgroundColor: colors.inputBackground,
    borderRadius: 10,
    marginTop: 20,
    marginLeft: 40,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: colors.shadowColor,
    shadowOpacity: 5,
    elevation: 10,
  },
  text: {
    color: colors.header,
    fontSize:18,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop:20,
    width: 300,
  }
})