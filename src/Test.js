import React, { Component } from 'react'
import { Text, View } from 'react-native'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { url } from './apollo'
import query from './graphql/query'

type Props = {}
export default class Test extends Component<Props> {
  render() {
    console.log(url)
    return (
      <Query query={query}>
        {({ loading, error, data }) => {
          console.log(error)
          console.log(data)
          if (loading) return <Text>Loading...</Text>
          if (error) return <Text>Error :(</Text>

          return data.texts.map(({ body, from }) => (
            <View key={from}>
              <Text>{`${from}: ${body}`}</Text>
            </View>
          ))
        }}
      </Query>
    )
  }
}
