//@flow

import type { contact } from '../data/contacts'

import React, { PureComponent } from 'react'
import _ from 'lodash/fp'
import { View, Text, TouchableNativeFeedback, StyleSheet } from 'react-native'
import NavigationService from '../utils/NavigationService'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { getPhoneNumber } from '../data/contacts'

type Props = {
  contact: contact
}
export default class ContactActions extends PureComponent<Props> {
  render() {
    const iconStyle = {
      size: 25,
      color: '#5E35B1'
    }
    const number = getPhoneNumber(this.props.contact)
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
          onPress={() =>
            NavigationService.navigate('Conversation', {
              number,
              contact: this.props.contact
            })}
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
