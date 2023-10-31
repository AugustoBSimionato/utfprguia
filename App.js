import React from 'react';
import { StyleSheet, Image, SafeAreaView, StatusBar } from 'react-native';
import Board from './src/components/BoardHome';
import List from './src/components/ListHome';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Image source={require("./assets/utfpr-logo-home.png")} style={{width: 200, height: 100, resizeMode: 'contain'}} />
      <Board />
      <List />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
