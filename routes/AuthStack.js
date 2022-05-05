import React, {Component} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './../screens/LoginScreen';
import Loading from '../screens/Loading';

const Stack = createNativeStackNavigator();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }

  render() {
    if (this.state.isLoading) {
      return <Loading />;
    } else {
      // Render either OnBoarding Screen or LoginScreen Based on isFirstAppUse state.

      return (
        <Stack.Navigator
          initialRouteName="LOGIN-SCREEN"
          screenOptions={{headerShown: false}}>
          <Stack.Screen component={LoginScreen} name="LOGIN-SCREEN" />
        </Stack.Navigator>
      );
    }
  }
}
