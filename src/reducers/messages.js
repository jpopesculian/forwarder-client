//@flow

import type {
  errMessagesAction,
  loadMessagesAction,
  updateMessagesAction
} from '../actions/messages'
import type { messagesState } from '../data/messages'
import type { reducerMap } from '../utils/createReducer'
import { ERR_MESSAGES, LOAD_MESSAGES, UPDATE_MESSAGES } from '../types/messages'

import createReducer from '../utils/createReducer'

const reducers: reducerMap<messagesState> = {
  [ERR_MESSAGES]: (state, { error, number }: errMessagesAction) => {
    return {
      ...state,
      ...{
        [number]: {
          ...state[number],
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
          loading
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
          messages
        }
      }
    }
  }
}

export default createReducer(reducers, {})
