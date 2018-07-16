//@flow

import type { Props } from '../containers/Conversation'

import React, { Component } from 'react'
import { Text } from 'react-native'
import NavigationService from '../utils/NavigationService'

export default class ConversationView extends Component<Props> {
  render() {
    return <Text>Hello</Text>
  }
  componentDidMount() {
    this.props.navigation.setParams({
      contact: this.props.contact,
      number: this.props.number
    })
  }
}
