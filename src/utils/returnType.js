// @flow

type Return_<R, Fn: () => R> = R
export type Return<T> = Return_<*, T>
