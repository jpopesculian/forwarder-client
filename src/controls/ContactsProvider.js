//@flow

import type { contact } from '../data/contacts'

const defaultContacts = [
  {
    recordID: '6b2237ee0df85980',
    company: '',
    emailAddresses: [
      {
        label: 'work',
        email: 'carl-jung@example.com'
      }
    ],
    familyName: 'Jung',
    givenName: 'Carl',
    jobTitle: '',
    middleName: '',
    phoneNumbers: [
      {
        label: 'mobile',
        number: '(555) 555-5555'
      }
    ],
    hasThumbnail: true,
    thumbnailPath: 'content://com.android.contacts/display_photo/3',
    postalAddresses: [
      {
        street: '123 Fake Street',
        city: 'Sample City',
        state: 'CA',
        region: 'CA',
        postCode: '90210',
        country: 'USA',
        label: 'home'
      }
    ],
    birthday: { year: 1988, month: 0, day: 1 }
  },
  {
    recordID: '6b2237ee0df85981',
    company: '',
    emailAddresses: [
      {
        label: 'home',
        email: 'sig-freud@example.com'
      }
    ],
    familyName: 'Freud',
    givenName: 'Sigmund',
    jobTitle: '',
    middleName: '',
    phoneNumbers: [
      {
        label: 'home',
        number: '(123) 456-7890'
      }
    ],
    hasThumbnail: false,
    thumbnailPath: '',
    postalAddresses: [
      {
        street: '456 Sesame Street',
        city: 'Atlanta',
        state: 'GA',
        region: 'GA',
        postCode: '23456',
        country: 'USA',
        label: 'home'
      }
    ],
    birthday: { year: 2001, month: 10, day: 12 }
  }
]

export default class ContactsProvider {
  static getAll(
    callback: (err: Error | null, contacts: Array<contact>) => any
  ) {
    this._delay(() => callback(null, defaultContacts), 3)
  }

  static _delay(cb: () => any, delay: number) {
    setTimeout(() => cb(), Math.random() * 1000 * delay)
  }
}
