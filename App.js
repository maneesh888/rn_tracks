import React from 'react';
import {StyleSheet} from 'react-native'
import { createAppContainer, 
  createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack'

import AccountScreen from './src/screens/AccountScreen'
import SinginScreen from './src/screens/SigninScreen'
import SignupScreen from './src/screens/SignupScreen'
import TrackCreateScreen from './src/screens/TrackCreateScreen'
import TrackDetailScreen from './src/screens/TrackDetailScreen'
import TrackListScreen from './src/screens/TrackListScreen'



const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signup:SignupScreen,
    Signin:SinginScreen
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow:createStackNavigator({
      TrackList:TrackListScreen,
      TrackDetail:TrackDetailScreen
    }),
    TrackCreate:TrackCreateScreen,
    Account:AccountScreen
  })
})


export default createAppContainer(switchNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
