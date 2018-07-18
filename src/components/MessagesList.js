//@flow

import React, { PureComponent } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Query } from 'react-apollo'
import query from '../graphql/queries/messages'

type Props = {}
export default class MessagesList extends PureComponent<Props> {
  render() {
    return (
      <Query query={query}>
        {({ loading, error, data }) => {
          if (loading) return <Text>Loading...</Text>
          if (error) return <Text>Error :(</Text>

          console.log(data)

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
