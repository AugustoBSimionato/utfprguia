import React from 'react';
import { StyleSheet, Image, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import Board from './src/components/BoardHome';
import List from './src/components/ListHome';
import Map from './src/Screens/Mapa';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Image source={require("./assets/utfpr-logo-home.png")} style={styles.logo} />
      <Stack.Navigator 
        initialRouteName="Board" 
        screenOptions={{ 
          headerShown: false,
          cardStyle: { backgroundColor: 'white' },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS 
        }}
      >
        <Stack.Screen name="Board" component={Board} />
        <Stack.Screen name="Map" component={Map} />
      </Stack.Navigator>
      <List />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logo: {
    width: 200,
    height: 100,
    marginTop: 25,
    marginLeft: 15,
    resizeMode: 'contain',
  },
});
