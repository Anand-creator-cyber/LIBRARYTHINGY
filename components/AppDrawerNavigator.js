import {AppTabNavigator} from './AppTabNavigator';
import CustomSideBarMenu from './CustomSideBarMenu';
import {createDrawerNavigator} from 'react-navigation-drawer';
import React from 'react';

export const AppDrawerNavigator = createDrawerNavigator({
  Home: {
      screen : AppTabNavigator

  },
},

  {
      contentComponent : CustomSideBarMenu
  },

  {
      initialRouteName : 'Home'
    })



