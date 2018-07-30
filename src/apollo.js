//@flow

import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { onError } from 'apollo-link-error'
import { split } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { WebSocketLink } from 'apollo-link-ws'
import { ApolloLink } from 'apollo-link'
import { getMainDefinition } from 'apollo-utilities'
import { SubscriptionClient } from 'subscriptions-transport-ws'
import { HOST } from './config'

const errorHandler = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      console.warn(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    )
  }
  if (networkError) {
    console.warn(`[Network error]: ${networkError}`)
  }
  return null
})

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query)
    return kind === 'OperationDefinition' && operation === 'subscription'
  },
  new WebSocketLink(
    new SubscriptionClient(`ws://${HOST}`, {
      reconnect: true
    })
  ),
  new HttpLink({ uri: `https://${HOST}/graphql` })
)

const client = new ApolloClient({
  link: ApolloLink.from([errorHandler, link]),
  cache: new InMemoryCache()
})

// TODO remove
window.client = client

export default client
