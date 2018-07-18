//@flow

import gql from 'graphql-tag'

export default gql`
  {
    texts {
      id,
      body,
      from,
      to,
      receivedTime,
      sentTime
    }
  }
`
