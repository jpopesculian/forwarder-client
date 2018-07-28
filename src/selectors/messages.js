//@flow

import type {
  messagesState,
  conversationState,
  keyedMessages,
  message
} from '../data/messages'
import type { Selector } from 'reselect'
import type { state } from '../data/state'
import type { e164number } from '../utils/parseNumber'
import type { SectionBase } from 'react-native/Libraries/Lists/SectionList'

import { createSelector } from 'reselect'
import { currentConversation } from './conversations'
import { groupData, sortGroupedData, createSections } from '../utils/sectionify'
import {
  humanizeDate,
  removeTime,
  dateKey,
  reverseDateKey
} from '../utils/parseDate'
import _ from 'lodash/fp'

export type error = string | void
export type messages = Array<message>
export type groupedMessages = { [string]: messages }
export type sortedMessages = Array<{ key: string, data: messages }>
export type messageSection = SectionBase<message> & { title: string }
export type messageSections = Array<messageSection>

export const scope: Selector<state, null, messagesState> = (
  state: state
): messagesState => state.messages

export const currentMessages: Selector<
  state,
  null,
  keyedMessages
> = createSelector(
  scope,
  currentConversation,
  (messages: messagesState, conversation: e164number): conversationState =>
    _.getOr({}, conversation, messages)
)

export const currentMessagesLoading: Selector<
  state,
  null,
  boolean
> = createSelector(
  currentMessages,
  (messages: conversationState): boolean => messages.loading
)

export const currentMessagesError: Selector<
  state,
  null,
  error
> = createSelector(
  currentMessages,
  (messages: conversationState): error => messages.error
)

export const hasError: Selector<state, null, boolean> = createSelector(
  currentMessagesError,
  (error: error): boolean => !!error
)

export const isReady: Selector<state, null, boolean> = createSelector(
  hasError,
  currentMessagesLoading,
  (hasError: boolean, loading: boolean): boolean => !(hasError || loading)
)

export const currentMessagesMap: Selector<
  state,
  null,
  keyedMessages
> = createSelector(
  currentMessages,
  (messages: conversationState): keyedMessages => messages.messages
)

export const currentMessagesList: Selector<
  state,
  null,
  messages
> = createSelector(currentMessagesMap, (messages: keyedMessages): messages =>
  _.values(messages)
)

export const groupedMessagesList: Selector<
  state,
  null,
  groupedMessages
> = createSelector(currentMessagesList, (messages: messages): groupedMessages =>
  groupData(({ time }) => dateKey(time), messages)
)

export const sortedMessagesList: Selector<
  state,
  null,
  sortedMessages
> = createSelector(
  groupedMessagesList,
  (messages: groupedMessages): sortedMessages =>
    sortGroupedData(_.orderBy('time', ['desc']), 'desc', messages)
)

export const messagesSections: Selector<
  state,
  null,
  Array<messageSection>
> = createSelector(sortedMessagesList, (messages: sortedMessages): Array<
  messageSection
> => createSections(_.compose(humanizeDate, reverseDateKey), messages))
