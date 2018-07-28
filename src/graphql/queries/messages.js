//@flow

import type { queryResult } from '../../utils/gqlTypes'
import type { message } from '../../data/messages'
import gql from 'graphql-tag'

export type messagesQueryResult = queryResult<{ texts: Array<message> }>

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
