import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  
  {
    /* creating state and a function that will change it */
  }
  const [name, setName] = useState("-");
  const [age, setAge] = useState(' 0')
  const clickHandler = () => {
    setName('YEEETETET')
  }
  return (
    <View style={styles.container}>
      
      <Text style={styles.hometext}>What is your name?</Text>
      {/* allowing changable inputs/values */}
      <TextInput multiline style={styles.input} onChangeText={(val) => setName(val)}/>
      <Text style={styles.hometext}>And your age</Text>
      {/* allowing changable inputs/values */}
      <TextInput keyboardType="numeric" style={styles.input} onChangeText={(val) => setAge(val)}/>
      <View style={styles.buttoncontainer}>
        {/* buttons are self closing and have props 
        */}
        <Button title="change your name" onPress={clickHandler} />

<Text style={styles.hometext}>Hello {name}, my nigga</Text>
<Text style={styles.hometext}>And you are:{age}</Text>
      </View>
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
