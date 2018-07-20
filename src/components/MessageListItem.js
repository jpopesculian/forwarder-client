//@flow

import type { message } from '../data/messages'
import type { SectionItemProps } from '../utils/sectionify'

import React, { PureComponent } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { humanizeTimeSince } from '../utils/parseDate'
import { isOutbound } from '../data/messages'

type Props = SectionItemProps<message>
export default class MessageListItem extends PureComponent<Props> {
  render() {
    const { item } = this.props
    const styles = isOutbound(item) ? outboundStyles : inboundStyles
    return (
      <View style={[baseStyles.container, styles.container]}>
        <View style={[baseStyles.carrotContainer, styles.carrotContainer]}>
          <View style={[baseStyles.carrot, styles.carrot]} />
        </View>
        <View style={[baseStyles.messageContainer, styles.messageContainer]}>
          <Text style={[baseStyles.message, styles.message]}>{item.body}</Text>
          <Text style={[baseStyles.timestamp, styles.timestamp]}>
            {humanizeTimeSince(item.receivedTime || item.sentTime)}
          </Text>
        </View>
      </View>
    )
  }
}

const baseStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 10,
    paddingHorizontal: 5
  },
  carrotContainer: {
    flex: 0,
    backgroundColor: 'transparent'
  },
  carrot: {
    width: 0,
    height: 0,
    borderTopWidth: 10
  },
  messageContainer: {
    flex: 0,
    alignSelf: 'flex-start',
    maxWidth: '70%',
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5
  },
  message: {
    paddingVertical: 7,
    paddingHorizontal: 10
  },
  timestamp: {
    color: '#aaa'
  }
})

const outboundStyles = StyleSheet.create({
  container: {
    flexDirection: 'row-reverse'
  },
  carrotContainer: {},
  carrot: {
    borderTopColor: '#ddd',
    borderRightWidth: 5,
    borderRightColor: 'transparent'
  },
  messageContainer: {
    backgroundColor: '#ddd',
    borderTopLeftRadius: 5
  },
  message: {},
  timestamp: {}
})

const inboundStyles = StyleSheet.create({
  container: {},
  carrotContainer: {},
  carrot: {
    borderTopColor: '#fff',
    borderLeftWidth: 5,
    borderLeftColor: 'transparent'
  },
  messageContainer: {
    backgroundColor: '#fff',
    borderTopRightRadius: 5
  },
  message: {},
  timestamp: {}
})
