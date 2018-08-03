//@flow

import type { queryResult } from '../../utils/gqlTypes'
import type { message } from '../../data/messages'
import gql from 'graphql-tag'

export default gql`
  subscription onMessageFetched($number: String!) {
    messageFetched(number: $number) {
      body,
      direction,
      to,
      from
    }
  }
`
