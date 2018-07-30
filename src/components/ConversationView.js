//@flow

import type { Props } from '../containers/Conversation'

import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { NavigationEvents } from 'react-navigation'
import NavigationService from '../utils/NavigationService'
import MessagesList from '../containers/MessagesList'
import MessageInput from '../containers/MessageInput'
import MessagesProvider from '../containers/MessagesProvider'

export default class ConversationView extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <NavigationEvents
          onWillFocus={() =>
            this.props.setCurrentConversation(this.props.number)}
          onWillBlur={() =>
            true /* TODO this.props.unsetCurrentConversation() */}
        />
        <View style={styles.messagesContainer}>
          <MessagesProvider number={this.props.number} />
          <MessagesList />
        </View>
        <View style={styles.inputContainer}>
          <MessageInput number={this.props.number} />
        </View>
      </View>
    )
  }
  componentDidMount() {
    this.props.navigation.setParams({
      contact: this.props.contact,
      number: this.props.number
    })
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
