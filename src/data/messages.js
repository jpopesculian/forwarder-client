//@flow

import _ from 'lodash/fp'

export type message = {
  id?: string,
  twilioId?: string,
  receivedTime?: string,
  sentTime?: string,
  from?: string,
  to?: string,
  body?: string
}

export const isInbound = (message: message): boolean =>
  !_.isEmpty(message.receivedTime)

export const isOutbound = (message: message): boolean =>
  !_.isEmpty(message.sentTime)
