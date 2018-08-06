//@flow

import type { queryResult } from '../../utils/gqlTypes'
import type { message } from '../../data/messages'
import gql from 'graphql-tag'

export type messagesData = { texts: Array<message> }
export type messagesResult = queryResult<messagesData>

export default gql`
  query texts($number: String) {
    texts(number: $number) {
      id,
      body,
      from,
      to,
      time,
      direction,
      status
    }
  }
`
