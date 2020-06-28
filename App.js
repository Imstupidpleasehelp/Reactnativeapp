import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [people, setPeople] = useState([
{name: 'man', key: '1'},
{name: 'woman', key: '2'},
{name: 'roman', key: '3'},
{name: 'slowman', key: '4'},
{name: 'goman', key: '5'},
{name: 'drowman', key: '6'},
  ]);
 
  return (
    <View style={styles.container}>
      
      
        <Text style={styles.hometext}>SAMPLETEXT</Text>
      </View>
    

  );
}

/* all styles are like this */ 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "darkslateblue",
  },
  hometext: {
    color: "white",
    fontSize: 36,
    marginLeft: 50,
    marginTop: 30
  },
  input: {
backgroundColor: 'white',
padding: 10,
borderWidth: 1,
marginLeft: 50,
width: 250,
borderColor: 'grey'
  },
  header: {
    color: "white",
    justifyContent: "center",
    padding: 35,
    marginTop: 50,
    fontSize: 35,
  },
  buttoncontainer: {
    position: 'absolute', left: 0, right: 0, bottom: 0
  }
});
