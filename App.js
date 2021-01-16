import React from 'react';
import { Text, View } from 'react-native';
import AppNavigator from './src/navigator/AppNavigator';
const App = ({ params }) => (
  <View style={{ flex: 1 }}>
    <AppNavigator />
  </View>
);

export default App;
