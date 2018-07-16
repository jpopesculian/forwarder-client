//@flow

import type { ElementType } from 'react'
import type { NavigationContainer } from 'react-navigation'
import { StackActions, NavigationActions } from 'react-navigation'

type NavigationAction = () => any
type Navigator = NavigationContainer | null
type navigateOptions = { action?: {}, key?: string }

let _navigator

function dispatch(action: NavigationAction) {
  if (_navigator !== null) {
    _navigator.dispatch(action)
  }
}

export function setNavigator(navigatorRef: Navigator) {
  _navigator = navigatorRef
}

export function navigate(
  routeName: string,
  params: {} = {},
  options: navigateOptions = {}
) {
  dispatch(
    NavigationActions.navigate({
      routeName,
      params,
      ...options
    })
  )
}

export function back(key: ?string) {
  dispatch(NavigationActions.back({ key }))
}

export function setParams(params: {}, key: string) {
  dispatch(NavigationActions.setParams({ params, key }))
}

export function reset(
  index: number,
  actions: [NavigationAction],
  key: ?(string | null)
) {
  dispatch(StackActions.reset({ index, actions, key }))
}

export function replace(
  key: string,
  options: { newKey?: string, routeName?: string, params?: {}, action?: {} }
) {
  dispatch(StackActions.replace({ key, ...options }))
}

export function push(
  routeName: string,
  params: {} = {},
  options: { action?: {} } = {}
) {
  dispatch(StackActions.push({ routeName, params, ...options }))
}

export function pop(n: number = 1) {
  dispatch(StackActions.pop({ n }))
}

export function popToTop() {
  dispatch(StackActions.popToTop())
}

export default {
  setNavigator,
  navigate,
  back,
  setParams,
  reset,
  replace,
  push,
  pop,
  popToTop
}
