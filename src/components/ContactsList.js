//@flow
import React, { Component } from 'react'
import { Text, View, ActivityIndicator, SectionList } from 'react-native'
import Contacts from './Contacts'
import ContactsListItem from './ContactsListItem'
import SectionListHeader from './SectionListHeader'
import SectionListItemSeparator from './SectionListItemSeparator'
import Loading from './Loading'
import _ from 'lodash/fp'

type Props = {}
export default class ContactsList extends Component<Props> {
  render() {
    return (
      <Contacts>
        {({ loading, error, contacts }) => {
          if (loading) return <Loading />
          if (error) return <Text>No Contacts...</Text>
          return (
            <SectionList
              initialNumToRender={2}
              renderItem={props => <ContactsListItem {...props} />}
              renderSectionHeader={props => <SectionListHeader {...props} />}
              ItemSeparatorComponent={SectionListItemSeparator}
              sections={_.map(({ key, data }) => {
                return { title: key, data }
              }, contacts)}
              keyExtractor={({ recordID }) => recordID}
            />
          )
        }}
      </Contacts>
    )
  }
}
