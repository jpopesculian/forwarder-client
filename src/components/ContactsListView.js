//@flow

import type { Props } from '../containers/ContactsList'

import React, { PureComponent } from 'react'
import { Text, View, ActivityIndicator, SectionList } from 'react-native'
import ContactsListItem from './ContactsListItem'
import SectionListHeader from './SectionListHeader'
import SectionListItemSeparator from './SectionListItemSeparator'
import Loading from './Loading'
import _ from 'lodash/fp'

export default class ContactsListView extends PureComponent<Props> {
  render() {
    if (this.props.isLoading || !this.props.isInitialized) return <Loading />
    if (this.props.hasError) return <Text>No Contacts...</Text>
    return (
      <SectionList
        initialNumToRender={10}
        renderItem={props => <ContactsListItem {...props} />}
        renderSectionHeader={props => <SectionListHeader {...props} />}
        ItemSeparatorComponent={SectionListItemSeparator}
        sections={this.props.sections}
        keyExtractor={({ recordID }) => recordID}
      />
    )
  }
}
