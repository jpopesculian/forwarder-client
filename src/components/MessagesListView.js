//@flow

import type { Props } from '../containers/MessagesList'

import React, { PureComponent } from 'react'
import { View, StyleSheet, SectionList, Text } from 'react-native'
import { Query } from 'react-apollo'
import moment from 'moment'
import _ from 'lodash/fp'

import { groupData, sortGroupedData, createSections } from '../utils/sectionify'
import MessageListHeader from './MessageListHeader'
import MessageListItem from './MessageListItem'

export default class MessagesListView extends PureComponent<Props> {
  render() {
    if (this.props.hasError) return <Text>Error :(</Text>
    if (!this.props.isReady) return <Text>Loading...</Text>
    return (
      <SectionList
        initialNumToRender={15}
        renderItem={props => <MessageListItem {...props} />}
        renderSectionFooter={props => <MessageListHeader {...props} />}
        sections={this.props.sections}
        inverted={true}
        keyExtractor={({ id }) => id}
      />
    )
  }
}
