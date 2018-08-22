// @flow

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { ApolloProvider } from 'react-apollo'
import ContactsProvider from './src/utils/ContactsProvider'
import { store } from './src/store'
import Main from './src/Main'
import client from './src/apollo'

type Props = {}
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <ApolloProvider client={client}>
          <ContactsProvider>
            <Main />
          </ContactsProvider>
        </ApolloProvider>
      </Provider>
    )
  }
}
