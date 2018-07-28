//@flow

import type { action, asyncAction } from '../utils/reduxTypes'
import type { message, keyedMessages } from '../data/messages'
import type { e164number } from '../utils/parseNumber'

import { ERR_MESSAGES, LOAD_MESSAGES, UPDATE_MESSAGES } from '../types/messages'

export type loadMessagesAction = action & {
  number: e164number,
  loading: boolean
}
export type errMessagesAction = action & {
  number: e164number,
  error: string | void
}
export type updateMessagesAction = action & {
  number: e164number,
  messages: keyedMessages
}

export const loadMessages = (
  number: e164number,
  loading: boolean
): loadMessagesAction => ({
  type: LOAD_MESSAGES,
  number,
  loading
})

export const errMessages = (
  number: e164number,
  error: string | void
): errMessagesAction => ({
  type: ERR_MESSAGES,
  number,
  error
})

export const updateMessages = (
  number: e164number,
  messages: keyedMessages
): updateMessagesAction => ({
  type: UPDATE_MESSAGES,
  number,
  messages
})
