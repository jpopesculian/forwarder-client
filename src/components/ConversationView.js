//@flow

import type { Props } from '../containers/Conversation'

import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import NavigationService from '../utils/NavigationService'
import MessagesList from '../containers/MessagesList'
import MessageInput from './MessageInput'
import MessagesProvider from '../containers/MessagesProvider'

export default class ConversationView extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.messagesContainer}>
          <MessagesProvider number={this.props.number} />
          <MessagesList />
        </View>
        <View style={styles.inputContainer}>
          <MessageInput />
        </View>
      </View>
    )
  }
  componentDidMount() {
    this.props.navigation.setParams({
      contact: this.props.contact,
      number: this.props.number
    })
    this.props.setCurrentConversation(this.props.number)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  inputContainer: {
    flex: 0,
    padding: 10
  },
  messagesContainer: {
    flex: 1
  }
})
