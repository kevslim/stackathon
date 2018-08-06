import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Patient extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('name', 'User Profile'),
    };
  };
  render() {
    return (
      <View>
        <Text>User Information Goes Here</Text>
      </View>
    );
	}
}
