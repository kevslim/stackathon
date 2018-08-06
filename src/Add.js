import React, { Component } from 'react';
import { View, Button, TextInput } from 'react-native';
import { API } from 'aws-amplify';

export default class Add extends Component {
  state = { text: 'place text here' };
  render() {
    return (
      <View>
        <TextInput
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
        <Button
          title="Add"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}
