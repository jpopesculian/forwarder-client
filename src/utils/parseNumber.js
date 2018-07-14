//@flow

import PhoneNumber from 'awesome-phonenumber'

export default (number: string) => PhoneNumber(number, 'US').getNumber()
