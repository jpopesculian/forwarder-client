//@flow

import type { contactsState } from './contacts'
import type { messagesState } from './messages'
import type { conversationsState } from './conversations'

export type state = {
  contacts: contactsState,
  messages: messagesState,
  conversations: conversationsState
}
