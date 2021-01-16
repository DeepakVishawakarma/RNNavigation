import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const Home = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>This is Home Page </Text>
    <TouchableOpacity onPress={() => navigation.navigate('detail')}>
      <View style={{ backgroundColor: 'red', padding: 10, borderRadius: 5 }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Go to Detail</Text>
      </View>
    </TouchableOpacity>
  </View>
);

export default Home;
