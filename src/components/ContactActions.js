//@flow

import type { contact } from '../data/contacts'

import React, { PureComponent } from 'react'
import { View, Text, TouchableNativeFeedback, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

type Props = {
  contact: contact
}
export default class ContactActions extends PureComponent<Props> {
  render() {
    const iconStyle = {
      size: 25,
      color: '#5E35B1'
    }
    return (
      <View style={styles.container}>
        <TouchableNativeFeedback
          useForeground={true}
          style={styles.actionContainer}
        >
          <View style={styles.action}>
            <Icon name="call" {...iconStyle} />
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          useForeground={true}
          style={styles.actionContainer}
        >
          <View style={styles.action}>
            <Icon name="message" {...iconStyle} />
          </View>
        </TouchableNativeFeedback>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  actionContainer: {
    flex: 1,
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  action: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
