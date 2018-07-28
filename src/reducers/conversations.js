// @flow

import type { currentConversationAction } from '../actions/conversations'
import type { conversationsState } from '../data/conversations'
import type { reducerMap } from '../utils/createReducer'

import { CURRENT_CONVERSATION } from '../types/conversations'
import createReducer from '../utils/createReducer'

const reducers: reducerMap<conversationsState> = {
  [CURRENT_CONVERSATION]: (
    state,
    { conversation }: currentConversationAction
  ) => {
    return {
      ...state,
      current: conversation
    }
  }
}

export default createReducer(reducers, {})
