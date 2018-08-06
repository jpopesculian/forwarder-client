//@flow

export type queryResult<T> = {
  loading: boolean,
  error: string | void,
  data: T
}

export type mutationResult<T> = {
  data: T
}

export type subscriptionResult<T> = {
  data: T
}
