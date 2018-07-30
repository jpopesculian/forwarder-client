//@flow

import type { action, asyncAction } from '../utils/reduxTypes'
import type { message, keyedMessages } from '../data/messages'
import type { e164number } from '../utils/parseNumber'
import type {
  sendMessageMutationResult
} from '../graphql/mutations/sendMessage'

import client from '../apollo'
import query from '../graphql/queries/messages'
import sendMessageMutation from '../graphql/mutations/sendMessage'
import { mapQueryToKeyedMessages, newOutboundMessage } from '../data/messages'
import {
  ERR_MESSAGES,
  LOAD_MESSAGES,
  UPDATE_MESSAGES,
  NEW_MESSAGE,
  INIT_SEND_MESSAGE,
  UPDATE_DRAFT
} from '../types/messages'

export type loadMessagesAction = action & {
  number: e164number
}
export type errMessagesAction = action & {
  number: e164number,
  error: string | void
}
export type updateMessagesAction = action & {
  number: e164number,
  messages: keyedMessages
}

export type newMessageAction = action & {
  number: e164number,
  message: message
}

export type initSendMessageAction = action & {
  number: e164number,
  message: message
}

export type updateDraftAction = action & {
  number: e164number,
  draft: string
}

export const loadMessages = (number: e164number): loadMessagesAction => ({
  type: LOAD_MESSAGES,
  number
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

export const newMessage = (
  number: e164number,
  message: message
): newMessageAction => ({
  type: NEW_MESSAGE,
  number,
  message
})

export const initSendMessage = (
  number: e164number,
  message: message
): initSendMessageAction => ({
  type: INIT_SEND_MESSAGE,
  number,
  message
})

export const updateDraft = (
  number: e164number,
  draft: string
): updateDraftAction => ({
  type: UPDATE_DRAFT,
  number,
  draft
})

export const fetchMessages = (number: e164number): asyncAction => {
  return async dispatch => {
    dispatch(loadMessages(number))
    try {
      const result = await client.query({ query })
      dispatch(updateMessages(number, mapQueryToKeyedMessages(result.data)))
    } catch (error) {
      dispatch(errMessages(number, error))
    }
  }
}

export const sendMessage = (number: e164number, body: string): asyncAction => {
  return async dispatch => {
    const message = newOutboundMessage(number, body)
    dispatch(initSendMessage(number, message))
    try {
      const result: sendMessageMutationResult = await client.mutate({
        mutation: sendMessageMutation,
        variables: { number, body }
      })
      dispatch(newMessage(number, result.data.sendMessage.text))
    } catch (error) {
      // TODO sendMessageError
      console.warn(error)
    }
  }
}
