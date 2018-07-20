// @flow
import parseNumber from '../utils/parseNumber'
import _ from 'lodash/fp'

export type emailAddressT = {
  label: string,
  email: string
}

export type phoneNumberT = {
  label: string,
  number: string
}

export type postalAddressT = {
  street: string,
  city: string,
  state: string,
  region: string,
  postCode: string,
  country: string,
  label: string
}

export type contact = {
  recordID: string,
  company: string,
  emailAddresses: Array<emailAddressT>,
  familyName: string,
  givenName: string,
  jobTitle: string,
  middleName: string,
  phoneNumbers: Array<phoneNumberT>,
  hasThumbnail: boolean,
  thumbnailPath: string,
  postalAddresses: Array<postalAddressT>,
  birthday: {
    year: number,
    month: number,
    day: number
  }
}

export function getPhoneNumber(contact: contact): string {
  return parseNumber(phoneNumber(contact))
}

export function phoneNumber(contact: contact): string {
  return _.get('number', _.first(contact.phoneNumbers))
}

export function fullName(contact: contact): string {
  return _.trim(
    `${_.get('givenName', contact)} ${_.get('familyName', contact)}`
  )
}

export type contactsState = {
  contacts: Array<contact>,
  initialized: boolean,
  loading: boolean,
  allowed: boolean,
  error: Error | null,
  search: string
}
