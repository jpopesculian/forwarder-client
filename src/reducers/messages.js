//@flow

import type {
  errMessagesAction,
  loadMessagesAction,
  updateMessagesAction,
  newMessageAction,
  initSendMessageAction,
  updateDraftAction
} from '../actions/messages'
import type { messagesState } from '../data/messages'
import type { reducerMap } from '../utils/createReducer'
import {
  ERR_MESSAGES,
  LOAD_MESSAGES,
  UPDATE_MESSAGES,
  NEW_MESSAGE,
  INIT_SEND_MESSAGE,
  UPDATE_DRAFT
} from '../types/messages'

import createReducer from '../utils/createReducer'

const reducers: reducerMap<messagesState> = {
  [ERR_MESSAGES]: (state, { error, number }: errMessagesAction) => {
    return {
      ...state,
      ...{
        [number]: {
          ...state[number],
          loading: false,
          error
        }
      }
    }
  },
  [LOAD_MESSAGES]: (state, { loading, number }: loadMessagesAction) => {
    return {
      ...state,
      ...{
        [number]: {
          ...state[number],
          loading: true,
          error: undefined
        }
      }
    }
  },
  [UPDATE_MESSAGES]: (state, { messages, number }: updateMessagesAction) => {
    return {
      ...state,
      ...{
        [number]: {
          ...state[number],
          loading: false,
          error: undefined,
          messages
        }
      }
    }
  },
  [UPDATE_DRAFT]: (state, { number, draft }: updateDraftAction) => {
    return {
      ...state,
      ...{
        [number]: {
          ...state[number],
          draft
        }
      }
    }
  },
  [INIT_SEND_MESSAGE]: (state, { number, message }: initSendMessageAction) => {
    return {
      ...state,
      ...{
        [number]: {
          ...state[number],
          draft: ''
        }
      }
    }
  },
  [NEW_MESSAGE]: (state, { number, message }: newMessageAction) => {
    const numberState = state[number] || {}
    return {
      ...state,
      ...{
        [number]: {
          ...numberState,
          messages: {
            ...numberState.messages,
            [message.id]: message
          }
        }
      }
    }
  }
}

export default createReducer(reducers, {})
