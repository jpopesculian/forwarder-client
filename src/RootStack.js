//@flow

import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation'
import {
  createMaterialBottomTabNavigator
} from 'react-navigation-material-bottom-tabs'
import HomeScreen from './screens/HomeScreen'
import ContactsScreen from './screens/ContactsScreen'

export default createMaterialBottomTabNavigator(
  {
    Home: HomeScreen,
    Messages: ContactsScreen
  },
  {
    initialRouteName: 'Messages',
    shifting: true
  }
)

// export default createStackNavigator(
//   {
//     Home: Home
//   },
//   {
//     initialRouteName: 'Home',
//     navigationOptions: {
//       headerStyle: {
//         backgroundColor: '#fff'
//       },
//       headerTintColor: '#333',
//       headerTitleStyle: {
//         color: '#333',
//         fontWeight: 'normal'
//       }
//     }
//   }
// )
