import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { deleteFromDB, writeToDB } from "../firebase/firestoreHelper";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebase-setup";
import ListItem from "../components/ListItem"

export default function AllEntries({route, navigation}) {

  const [entryList, setEntryList] = useState([]);

  useEffect(()=>{
    route.params.changeHeader("All Entries")
  })
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "entry"), (querySnapshot) => {
        const newList = querySnapshot.docs.map((item) => {
          return { ...item.data(), id: item.id };
        });
        setEntryList(newList);
      }
    );
    return () => {
      unsubscribe();
    };
  }, []);
  console.log(entryList)
  
  return (
    <View>
      <FlatList data={entryList} 
      renderItem={({ item }) => {
          return (
            <ListItem
              calories={item.calories}
              description={item.description}
              id={item.id}
              overLimit={item.overLimit}
              navigation={navigation}
            />
          );
        }}
      />

    </View>
  )
}

const styles = StyleSheet.create({


})