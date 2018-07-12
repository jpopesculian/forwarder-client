// @flow

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { ApolloProvider } from 'react-apollo'
import store from './src/store'
import Root from './src/Root'
import client from './src/apollo'

type Props = {}
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <ApolloProvider client={client}>
          <Root />
        </ApolloProvider>
      </Provider>
    )
  }
}
