//@flow

import { createStackNavigator } from 'react-navigation'
import {
  createMaterialBottomTabNavigator
} from 'react-navigation-material-bottom-tabs'
import TabsStack from './TabsStack'
import ConversationScreen from './ConversationScreen'

export default createStackNavigator(
  {
    Tabs: {
      screen: TabsStack,
      navigationOptions: ({ navigation }) => {
        // TODO not perfect name extraction (would like to get title)
        return {
          title: navigation.state.routes[navigation.state.index].routeName
        }
      }
    },
    Conversation: ConversationScreen
  },
  {
    initialRouteName: 'Tabs',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#fff'
      },
      headerTintColor: '#333',
      headerTitleStyle: {
        color: '#333',
        fontWeight: 'normal'
      }
    }
  }
)
