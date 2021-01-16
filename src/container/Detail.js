import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const Detail = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>This is Home Page </Text>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <View style={{ backgroundColor: 'red', padding: 10, borderRadius: 5 }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
          Go Back To Home
        </Text>
      </View>
    </TouchableOpacity>
  </View>
);

export default Detail;
