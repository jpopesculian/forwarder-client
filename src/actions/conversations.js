//@flow

import type { action, asyncAction } from '../utils/reduxTypes'
import type { e164number } from '../utils/parseNumber'

import { CURRENT_CONVERSATION } from '../types/conversations'

export type currentConversationAction = action & {
  conversation: e164number
}

export const setCurrentConversation = (
  conversation: e164number
): currentConversationAction => ({
  type: CURRENT_CONVERSATION,
  conversation
})
