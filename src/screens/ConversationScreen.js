//@flow

import React, { PureComponent } from 'react'
import { Text } from 'react-native'

type Props = {}
export default class ConversationScreen extends PureComponent<Props> {
  static navigationOptions = {
    title: 'Conversation'
  }
  render() {
    return <Text>Hello</Text>
  }
}
