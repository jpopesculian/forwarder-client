//@flow

import React, { PureComponent } from 'react'
import { Text } from 'react-native'
import Conversation from '../containers/Conversation'
import { fullName } from '../data/contacts'

Conversation.navigationOptions = ({ navigation }) => {
  const contact = navigation.getParam('contact')
  const title = contact
    ? fullName(contact)
    : navigation.getParam('number', 'Conversation')
  return {
    title
  }
}

export default Conversation
