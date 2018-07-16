//@flow

import type { Props } from '../containers/ContactsList'

import React, { PureComponent } from 'react'
import { Text, View, ActivityIndicator, SectionList } from 'react-native'
import ContactsListItem from './ContactsListItem'
import SectionListHeader from './SectionListHeader'
import SectionListItemSeparator from './SectionListItemSeparator'
import _ from 'lodash/fp'

export default class ContactsListView extends PureComponent<Props> {
  render() {
    if (this.props.hasError) return <Text>No Contacts...</Text>
    return (
      <SectionList
        initialNumToRender={15}
        renderItem={props => <ContactsListItem {...props} />}
        renderSectionHeader={props => <SectionListHeader {...props} />}
        ItemSeparatorComponent={SectionListItemSeparator}
        refreshing={!this.props.isReady}
        onRefresh={this.props.reload}
        sections={this.props.sections}
        keyExtractor={({ recordID }) => recordID}
      />
    )
  }
}
