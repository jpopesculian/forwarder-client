// @flow

const oldErrorFn = console.error
//$FlowFixMe
console.error = console.warn
export default oldErrorFn
