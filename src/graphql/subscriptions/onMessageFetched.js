//@flow

import type { subscriptionResult } from '../../utils/gqlTypes'
import type { message } from '../../data/messages'
import gql from 'graphql-tag'

export type onMessageFetchedData = { messageFetched: message }
export type onMessageFetchedResult = subscriptionResult<onMessageFetchedData>

export default gql`
  subscription onMessageFetched($number: String!) {
    messageFetched(number: $number) {
      id,
      body,
      from,
      to,
      direction,
      time,
      status
    }
  }
`
