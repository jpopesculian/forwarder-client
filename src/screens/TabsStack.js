//@flow

import {
  createMaterialBottomTabNavigator
} from 'react-navigation-material-bottom-tabs'
import HomeScreen from './HomeScreen'
import ContactsScreen from './ContactsScreen'

export default createMaterialBottomTabNavigator(
  {
    Home: HomeScreen,
    Contacts: ContactsScreen
  },
  {
    initialRouteName: 'Contacts',
    shifting: true
  }
)
