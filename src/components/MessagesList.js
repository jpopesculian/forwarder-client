//@flow

import React, { PureComponent } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Query } from 'react-apollo'
import query from '../graphql/queries/messages'
import { humanizeDate, removeTime, dateKey } from '../utils/parseDate'
import { groupData, sortGroupedData, createSections } from '../utils/sectionify'
import moment from 'moment'
import _ from 'lodash/fp'

type Props = {}
export default class MessagesList extends PureComponent<Props> {
  render() {
    return (
      <Query query={query}>
        {({ loading, error, data }) => {
          if (loading) return <Text>Loading...</Text>
          if (error) return <Text>Error :(</Text>

          const texts = data.texts.map(text => {
            const args = {
              indexedTime: text.receivedTime || text.sentTime,
              key: dateKey(text.indexedTime)
            }
            return _.merge(_.clone(text), args)
          })
          const sections = groupData(_.get('key'), texts)
          console.log(sections)

          return data.texts.map(({ id, body, from }) => (
            <View key={id}>
              <Text>{`${from}: ${body}`}</Text>
            </View>
          ))
        }}
      </Query>
    )
  }
}
