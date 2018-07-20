//@flow

import { curryN } from 'lodash/fp'

type Curried1<A, R> = (...r: [A]) => R

type Curried2<A, B, R> = ((...r: [A]) => Curried1<B, R>) & ((...r: [A, B]) => R)

type Curried3<A, B, C, R> = ((...r: [A]) => Curried2<B, C, R>) &
  ((...r: [A, B]) => Curried1<C, R>) &
  ((...r: [A, B, C]) => R)

type Curried4<A, B, C, D, R> = ((...r: [A]) => Curried3<B, C, D, R>) &
  ((...r: [A, B]) => Curried2<C, D, R>) &
  ((...r: [A, B, C]) => Curried1<D, R>) &
  ((...r: [A, B, C, D]) => R)

type Curried5<A, B, C, D, E, R> = ((...r: [A]) => Curried4<B, C, D, E, R>) &
  ((...r: [A, B]) => Curried3<C, D, E, R>) &
  ((...r: [A, B, C]) => Curried2<D, E, R>) &
  ((...r: [A, B, C, D]) => Curried1<E, R>) &
  ((...r: [A, B, C, D, E]) => R)

type Curried6<A, B, C, D, E, F, R> = ((
  ...r: [A]
) => Curried5<B, C, D, E, F, R>) &
  ((...r: [A, B]) => Curried4<C, D, E, F, R>) &
  ((...r: [A, B, C]) => Curried3<D, E, F, R>) &
  ((...r: [A, B, C, D]) => Curried2<E, F, R>) &
  ((...r: [A, B, C, D, E]) => Curried1<F, R>) &
  ((...r: [A, B, C, D, E, F]) => R)

type Curry = (<A, R>((...r: [A]) => R) => Curried1<A, R>) &
  (<A, B, R>((...r: [A, B]) => R) => Curried2<A, B, R>) &
  (<A, B, C, R>((...r: [A, B, C]) => R) => Curried3<A, B, C, R>) &
  (<A, B, C, D, R>((...r: [A, B, C, D]) => R) => Curried4<A, B, C, D, R>) &
  (<A, B, C, D, E, R>(
    (...r: [A, B, C, D, E]) => R
  ) => Curried5<A, B, C, D, E, R>) &
  (<A, B, C, D, E, F, R>(
    (...r: [A, B, C, D, E, F]) => R
  ) => Curried6<A, B, C, D, E, F, R>)

export function curry2<A, B, C>(fn: (A, B) => C): Curried2<A, B, C> {
  return curryN(2, fn)
}

export function curry3<A, B, C, D>(fn: (A, B, C) => D): Curried3<A, B, C, D> {
  return curryN(3, fn)
}

export function curry4<A, B, C, D, E>(
  fn: (A, B, C, D) => E
): Curried4<A, B, C, D, E> {
  return curryN(4, fn)
}

export function curry5<A, B, C, D, E, F>(
  fn: (A, B, C, D, E) => F
): Curried5<A, B, C, D, E, F> {
  return curryN(5, fn)
}

export function curry6<A, B, C, D, E, F, G>(
  fn: (A, B, C, D, E, F) => G
): Curried6<A, B, C, D, E, F, G> {
  return curryN(6, fn)
}
