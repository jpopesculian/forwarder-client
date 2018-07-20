//@flow

import React, { PureComponent } from 'react'
import { View, StyleSheet, SectionList, Text } from 'react-native'
import { Query } from 'react-apollo'
import moment from 'moment'
import _ from 'lodash/fp'

import query from '../graphql/queries/messages'
import {
  humanizeDate,
  removeTime,
  dateKey,
  reverseDateKey
} from '../utils/parseDate'
import { groupData, sortGroupedData, createSections } from '../utils/sectionify'
import MessageListHeader from './MessageListHeader'
import MessageListItem from './MessageListItem'

type Props = {}
export default class MessagesList extends PureComponent<Props> {
  render() {
    return (
      <Query query={query}>
        {({ loading, error, data }) => {
          if (loading) return <Text>Loading...</Text>
          if (error) return <Text>Error :(</Text>

          const sections = _.compose(
            _.compose(
              createSections(_.compose(humanizeDate, reverseDateKey)),
              sortGroupedData(_.orderBy('indexedTime', ['desc']), 'desc'),
              groupData(_.get('key'))
            ),
            _.map(
              _.compose(
                text => _.merge(text, { key: dateKey(text.indexedTime) }),
                text =>
                  _.merge(text, {
                    indexedTime: text.receivedTime || text.sentTime
                  }),
                _.clone
              )
            )
          )(data.texts)

          return (
            <SectionList
              initialNumToRender={15}
              renderItem={props => <MessageListItem {...props} />}
              renderSectionFooter={props => <MessageListHeader {...props} />}
              sections={sections}
              inverted={true}
              keyExtractor={({ id }) => id}
            />
          )
        }}
      </Query>
    )
  }
}
