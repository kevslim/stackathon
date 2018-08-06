import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { withAuthenticator } from 'aws-amplify-react-native';
import Home from './src/Home';
import AddPage from './src/Add';
import Patient from './src/Patient';

class App extends Component<Props> {
  render() {
    return <RootStack />;
  }
}

const MainStack = createStackNavigator(
  {
    HomePage: Home,
    Add: AddPage,
    PatientPage: Patient,
  },
  {
    initialRouteName: 'HomePage',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#0080FF',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainStack,
    },
  },
  {
    mode: 'card',
    headerMode: 'none',
  }
);

export default withAuthenticator(App);
