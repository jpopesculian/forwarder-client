//@flow

import type { conversationsState } from '../data/conversations'
import type { Selector } from 'reselect'
import type { state } from '../data/state'
import type { e164number } from '../utils/parseNumber'

import { createSelector } from 'reselect'

export const scope: Selector<state, null, conversationsState> = (
  state: state
): conversationsState => state.conversations

export const currentConversation: Selector<
  state,
  null,
  e164number
> = createSelector(scope, ({ current }: conversationsState) => current)
