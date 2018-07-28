//@flow

import type { e164number } from '../utils/parseNumber'

import _ from 'lodash/fp'

export type messageDirection = 'inbound' | 'outbound'

export type message = {
  id?: string,
  twilioId?: string,
  time?: string,
  status?: string,
  direction?: messageDirection,
  from?: e164number,
  to?: e164number,
  body?: string
}

export type keyedMessages = {
  [string]: Array<message>
}

export type conversationState = {
  loading: boolean,
  error: string,
  messages: keyedMessages
}

export type messagesState = {
  [e164number]: conversationState
}

const INBOUND_DIRECTION: messageDirection = 'inbound'
const OUTBOUND_DIRECTION: messageDirection = 'outbound'

export const isInbound = (message: message): boolean =>
  message.direction === INBOUND_DIRECTION

export const isOutbound = (message: message): boolean =>
  message.direction === OUTBOUND_DIRECTION
