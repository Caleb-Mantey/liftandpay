import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Intro from './components/Intro';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Phone from './components/SignUp/phone';
import PasswordReset from './components/password-reset';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Intro" headerMode="none">
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="Signup" component={SignUp} />
        <Stack.Screen name="Signin" component={SignIn} />
        <Stack.Screen name="PasswordReset" component={PasswordReset} />
        <Stack.Screen name="Phone" component={Phone} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
