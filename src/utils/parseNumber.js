//@flow

import PhoneNumber from 'awesome-phonenumber'

export type e164number = string

export default (number: e164number) => PhoneNumber(number, 'US').getNumber()
