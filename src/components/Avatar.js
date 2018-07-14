//@flow

import type { contact } from '../data/contacts'

import React, { PureComponent } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import randomColor from 'randomcolor'
import Color from 'color'
import _ from 'lodash'

type Props = {
  contact: contact
}
export default class Avatar extends PureComponent<Props> {
  render() {
    const backgroundColor = randomColor({
      seed: this.props.contact.givenName + this.props.contact.familyName,
      luminosity: 'bright'
    })
    const colorQuery = Color(backgroundColor)
    const color = colorQuery.isLight()
      ? colorQuery.darken(0.5).rgb().string()
      : '#fff'
    return (
      <View style={[styles.container, { backgroundColor }]}>
        <Text style={[styles.initial, { color }]}>
          {_.upperCase(
            _.first(this.props.contact.givenName) +
              _.first(this.props.contact.familyName)
          )}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 50,
    height: 50,
    flexGrow: 0,
    flexShrink: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f00',
    borderRadius: 10
  },
  initial: {
    color: '#fff',
    fontSize: 20
  }
})
