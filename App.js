import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View ><Text style={styles.header}>My app > your app</Text></View>
      <Text style={styles.hometext}>React-native, Beeyotch</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkslateblue',
   
  },
  hometext: {
color: 'white',
fontSize: 48,
justifyContent: 'center'
  },
  header: {
    color: 'white',
    justifyContent: 'center',
    padding: 35,
    fontSize: 55
  }
});
