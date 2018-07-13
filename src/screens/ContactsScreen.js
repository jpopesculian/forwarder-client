//@flow

import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'

type Props = {}
export default class ContactsScreen extends Component<Props> {
  static navigationOptions = {
    title: 'Contacts'
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello Contacts</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF'
  }
})
