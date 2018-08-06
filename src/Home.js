import React, { Component } from 'react';
import { ScrollView, View, TouchableOpacity, Button } from 'react-native';
import { API, Auth } from 'aws-amplify';
import { ListItem } from 'react-native-elements';
import list from '../Utils/data';

export default class Home extends Component {
  static navigationOptions = {
		title: 'Home Page',
		headerRight: (
			<Button
      onPress={() => Auth.signOut()}
      title='Sign Out'
      color='#0080FF'
      />
    )
  };
  async componentDidMount() {}
  render() {
    return (
      <View>
        <ScrollView>
          {list.map((listItem, i) => (
            <TouchableOpacity
              key={i}
              onPress={() =>
                this.props.navigation.navigate('PatientPage', { ...listItem })
              }
            >
              <ListItem key={i} title={listItem.name} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  }
}
