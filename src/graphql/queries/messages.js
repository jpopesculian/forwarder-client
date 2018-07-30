//@flow

import type { queryResult } from '../../utils/gqlTypes'
import type { message } from '../../data/messages'
import gql from 'graphql-tag'

export type messagesQueryData = { texts: Array<message> }
export type messagesQueryResult = queryResult<messagesQueryData>

export default gql`
  {
    texts {
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
