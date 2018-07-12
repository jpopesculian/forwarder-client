//@flow

const devTools: () => any = typeof window.__REDUX_DEVTOOLS_EXTENSION__ !==
  'undefined'
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : f => f

export default devTools
