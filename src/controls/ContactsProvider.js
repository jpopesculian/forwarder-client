//@flow

import type { contact } from '../data/contacts'

export default class ContactsProvider {
  static getAll(
    callback: (err: Error | null, contacts: Array<contact>) => any
  ) {
    this._delay(() => callback(null, defaultContacts), 0)
  }

  static _delay(cb: () => any, delay: number) {
    setTimeout(() => cb(), Math.random() * 1000 * delay)
  }
}

const defaultContacts = [
  {
    recordID: '1000000000000000',
    company: '',
    emailAddresses: [
      {
        label: 'work',
        email: 'jpopesculian@gmail.com'
      }
    ],
    familyName: 'Number',
    givenName: '_Pixel',
    jobTitle: '',
    middleName: '',
    phoneNumbers: [
      {
        label: 'mobile',
        number: '(916) 585-4267'
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
  },
  {
    recordID: '6b2237ee0df85982',
    company: '',
    emailAddresses: [
      {
        label: 'work',
        email: 'chuck-norris@example.com'
      }
    ],
    familyName: 'Norris',
    givenName: 'Chuck',
    jobTitle: '',
    middleName: '',
    phoneNumbers: [
      {
        label: 'mobile',
        number: '(000) 000-0000'
      }
    ],
    hasThumbnail: true,
    thumbnailPath: 'content://com.android.contacts/display_photo/1',
    postalAddresses: [
      {
        street: '916 Franklin Dr',
        city: 'Vienna',
        state: 'NY',
        region: 'NY',
        postCode: '55555',
        country: 'USA',
        label: 'home'
      }
    ],
    birthday: { year: 1960, month: 2, day: 20 }
  },
  {
    recordID: 'b6dc3eb81f54128e',
    company: '',
    emailAddresses: [
      { label: 'work', email: 'defamatory-panel beater@example.com' }
    ],
    familyName: 'Dragons',
    givenName: 'Tenacious',
    jobTitle: '',
    middleName: '',
    phoneNumbers: [{ label: 'mobile', number: '(467) 130-7702' }],
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
    recordID: 'a34c1f8375f5b4eb',
    company: '',
    emailAddresses: [
      { label: 'work', email: 'defamatory-panel beater@example.com' }
    ],
    familyName: 'Stick figures',
    givenName: 'Dilatory',
    jobTitle: '',
    middleName: '',
    phoneNumbers: [{ label: 'mobile', number: '(467) 130-7702' }],
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
    recordID: '3886f91253192f3c',
    company: '',
    emailAddresses: [
      { label: 'work', email: 'defamatory-panel beater@example.com' }
    ],
    familyName: 'Wheelwright',
    givenName: 'Irksome',
    jobTitle: '',
    middleName: '',
    phoneNumbers: [{ label: 'mobile', number: '(467) 130-7702' }],
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
    recordID: '5a7ebcd5fd7daacb',
    company: '',
    emailAddresses: [
      { label: 'work', email: 'defamatory-panel beater@example.com' }
    ],
    familyName: 'Circus',
    givenName: 'Sagacious',
    jobTitle: '',
    middleName: '',
    phoneNumbers: [{ label: 'mobile', number: '(467) 130-7702' }],
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
    recordID: '4c1248f38561c3b9',
    company: '',
    emailAddresses: [
      { label: 'work', email: 'defamatory-panel beater@example.com' }
    ],
    familyName: 'Artist',
    givenName: 'Mendacious',
    jobTitle: '',
    middleName: '',
    phoneNumbers: [{ label: 'mobile', number: '(467) 130-7702' }],
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
    recordID: 'a57b9473fd1354bd',
    company: '',
    emailAddresses: [
      { label: 'work', email: 'defamatory-panel beater@example.com' }
    ],
    familyName: 'Circus',
    givenName: 'Baleful',
    jobTitle: '',
    middleName: '',
    phoneNumbers: [{ label: 'mobile', number: '(467) 130-7702' }],
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
    recordID: '9c4fe8594c83dd14',
    company: '',
    emailAddresses: [
      { label: 'work', email: 'defamatory-panel beater@example.com' }
    ],
    familyName: 'Statue',
    givenName: 'Animistic',
    jobTitle: '',
    middleName: '',
    phoneNumbers: [{ label: 'mobile', number: '(467) 130-7702' }],
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
    recordID: 'c548d9ac49c118f1',
    company: '',
    emailAddresses: [
      { label: 'work', email: 'defamatory-panel beater@example.com' }
    ],
    familyName: 'Plant operator',
    givenName: 'Serpentine',
    jobTitle: '',
    middleName: '',
    phoneNumbers: [{ label: 'mobile', number: '(467) 130-7702' }],
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
    recordID: 'f3b7aa94898ca21f',
    company: '',
    emailAddresses: [
      { label: 'work', email: 'defamatory-panel beater@example.com' }
    ],
    familyName: 'Colorist',
    givenName: 'Equanimous',
    jobTitle: '',
    middleName: '',
    phoneNumbers: [{ label: 'mobile', number: '(467) 130-7702' }],
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
    recordID: 'd7c754449854b46f',
    company: '',
    emailAddresses: [
      { label: 'work', email: 'defamatory-panel beater@example.com' }
    ],
    familyName: 'Carrot',
    givenName: 'Bilious',
    jobTitle: '',
    middleName: '',
    phoneNumbers: [{ label: 'mobile', number: '(467) 130-7702' }],
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
    recordID: '83bffd1e618ab722',
    company: '',
    emailAddresses: [
      { label: 'work', email: 'defamatory-panel beater@example.com' }
    ],
    familyName: 'Flatter',
    givenName: 'Effulgent',
    jobTitle: '',
    middleName: '',
    phoneNumbers: [{ label: 'mobile', number: '(467) 130-7702' }],
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
    recordID: '66c6585791bbe2ef',
    company: '',
    emailAddresses: [
      { label: 'work', email: 'defamatory-panel beater@example.com' }
    ],
    familyName: 'Circus',
    givenName: 'Voluble',
    jobTitle: '',
    middleName: '',
    phoneNumbers: [{ label: 'mobile', number: '(467) 130-7702' }],
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
    recordID: '827d6264bc7ac6d7',
    company: '',
    emailAddresses: [
      { label: 'work', email: 'defamatory-panel beater@example.com' }
    ],
    familyName: 'Soaper',
    givenName: 'Comely',
    jobTitle: '',
    middleName: '',
    phoneNumbers: [{ label: 'mobile', number: '(467) 130-7702' }],
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
    recordID: '23124cae9a4d81ca',
    company: '',
    emailAddresses: [
      { label: 'work', email: 'defamatory-panel beater@example.com' }
    ],
    familyName: 'Beader',
    givenName: 'Zealous',
    jobTitle: '',
    middleName: '',
    phoneNumbers: [{ label: 'mobile', number: '(467) 130-7702' }],
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
    recordID: 'c3aaca3beb553b67',
    company: '',
    emailAddresses: [
      { label: 'work', email: 'defamatory-panel beater@example.com' }
    ],
    familyName: 'Beets',
    givenName: 'Baleful',
    jobTitle: '',
    middleName: '',
    phoneNumbers: [{ label: 'mobile', number: '(467) 130-7702' }],
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
    recordID: '1bf3a3222d7af4bf',
    company: '',
    emailAddresses: [
      { label: 'work', email: 'defamatory-panel beater@example.com' }
    ],
    familyName: 'Leadman',
    givenName: 'Jejune',
    jobTitle: '',
    middleName: '',
    phoneNumbers: [{ label: 'mobile', number: '(467) 130-7702' }],
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
    recordID: '9685a413ebfb72fa',
    company: '',
    emailAddresses: [
      { label: 'work', email: 'defamatory-panel beater@example.com' }
    ],
    familyName: 'Set decorator',
    givenName: 'Tremulous',
    jobTitle: '',
    middleName: '',
    phoneNumbers: [{ label: 'mobile', number: '(467) 130-7702' }],
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
    recordID: '5db636e1a62732b5',
    company: '',
    emailAddresses: [
      { label: 'work', email: 'defamatory-panel beater@example.com' }
    ],
    familyName: 'Bunny',
    givenName: 'Platitudinous',
    jobTitle: '',
    middleName: '',
    phoneNumbers: [{ label: 'mobile', number: '(467) 130-7702' }],
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
    recordID: '33cffb927e3ead53',
    company: '',
    emailAddresses: [
      { label: 'work', email: 'defamatory-panel beater@example.com' }
    ],
    familyName: 'Make-up artist',
    givenName: 'Caustic',
    jobTitle: '',
    middleName: '',
    phoneNumbers: [{ label: 'mobile', number: '(467) 130-7702' }],
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
    recordID: '586255a53fa529b7',
    company: '',
    emailAddresses: [
      { label: 'work', email: 'defamatory-panel beater@example.com' }
    ],
    familyName: 'Plant operator',
    givenName: 'Minatory',
    jobTitle: '',
    middleName: '',
    phoneNumbers: [{ label: 'mobile', number: '(467) 130-7702' }],
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
    recordID: '8dca2a8ba4f733a2',
    company: '',
    emailAddresses: [
      { label: 'work', email: 'defamatory-panel beater@example.com' }
    ],
    familyName: 'Salad',
    givenName: 'Mendacious',
    jobTitle: '',
    middleName: '',
    phoneNumbers: [{ label: 'mobile', number: '(467) 130-7702' }],
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
    recordID: '5cab7259a9558814',
    company: '',
    emailAddresses: [
      { label: 'work', email: 'defamatory-panel beater@example.com' }
    ],
    familyName: 'Woodworkers',
    givenName: 'Garrulous',
    jobTitle: '',
    middleName: '',
    phoneNumbers: [{ label: 'mobile', number: '(467) 130-7702' }],
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
    recordID: 'ca74cc981843cd65',
    company: '',
    emailAddresses: [
      { label: 'work', email: 'defamatory-panel beater@example.com' }
    ],
    familyName: 'Animator',
    givenName: 'Feckless',
    jobTitle: '',
    middleName: '',
    phoneNumbers: [{ label: 'mobile', number: '(467) 130-7702' }],
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
    recordID: '14aabe75aa2d9342',
    company: '',
    emailAddresses: [
      { label: 'work', email: 'defamatory-panel beater@example.com' }
    ],
    familyName: 'Dolls',
    givenName: 'Boorish',
    jobTitle: '',
    middleName: '',
    phoneNumbers: [{ label: 'mobile', number: '(467) 130-7702' }],
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
    recordID: 'd47b9ad88a4ceb1b',
    company: '',
    emailAddresses: [
      { label: 'work', email: 'defamatory-panel beater@example.com' }
    ],
    familyName: 'Woodworkers',
    givenName: 'Insidious',
    jobTitle: '',
    middleName: '',
    phoneNumbers: [{ label: 'mobile', number: '(467) 130-7702' }],
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
    recordID: '79e493557efaf6f9',
    company: '',
    emailAddresses: [
      { label: 'work', email: 'defamatory-panel beater@example.com' }
    ],
    familyName: 'Ninja',
    givenName: 'Hubristic',
    jobTitle: '',
    middleName: '',
    phoneNumbers: [{ label: 'mobile', number: '(467) 130-7702' }],
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
    recordID: '168a65ec27a223b7',
    company: '',
    emailAddresses: [
      { label: 'work', email: 'defamatory-panel beater@example.com' }
    ],
    familyName: 'Cookies',
    givenName: 'Spasmodic',
    jobTitle: '',
    middleName: '',
    phoneNumbers: [{ label: 'mobile', number: '(467) 130-7702' }],
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
    recordID: '56cac912762d2cf5',
    company: '',
    emailAddresses: [
      { label: 'work', email: 'defamatory-panel beater@example.com' }
    ],
    familyName: 'Bunny',
    givenName: 'Pendulous',
    jobTitle: '',
    middleName: '',
    phoneNumbers: [{ label: 'mobile', number: '(467) 130-7702' }],
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
    recordID: '4a9a35f5dbe568a8',
    company: '',
    emailAddresses: [
      { label: 'work', email: 'defamatory-panel beater@example.com' }
    ],
    familyName: 'Soaper',
    givenName: 'Lachrymose',
    jobTitle: '',
    middleName: '',
    phoneNumbers: [{ label: 'mobile', number: '(467) 130-7702' }],
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
    recordID: 'bcca913cf6551cc4',
    company: '',
    emailAddresses: [
      { label: 'work', email: 'defamatory-panel beater@example.com' }
    ],
    familyName: 'Soaper',
    givenName: 'Boorish',
    jobTitle: '',
    middleName: '',
    phoneNumbers: [{ label: 'mobile', number: '(467) 130-7702' }],
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
    recordID: '9bde827736b5fab3',
    company: '',
    emailAddresses: [
      { label: 'work', email: 'defamatory-panel beater@example.com' }
    ],
    familyName: 'Artisan',
    givenName: 'Irksome',
    jobTitle: '',
    middleName: '',
    phoneNumbers: [{ label: 'mobile', number: '(467) 130-7702' }],
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
    recordID: '93aeb99c2a8d9227',
    company: '',
    emailAddresses: [
      { label: 'work', email: 'defamatory-panel beater@example.com' }
    ],
    familyName: 'Plant operator',
    givenName: 'Judicious',
    jobTitle: '',
    middleName: '',
    phoneNumbers: [{ label: 'mobile', number: '(467) 130-7702' }],
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
    recordID: '658a82142e9587d4',
    company: '',
    emailAddresses: [
      { label: 'work', email: 'defamatory-panel beater@example.com' }
    ],
    familyName: 'Colorist',
    givenName: 'Amatory',
    jobTitle: '',
    middleName: '',
    phoneNumbers: [{ label: 'mobile', number: '(467) 130-7702' }],
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
    recordID: '7d3e6c3aa827f719',
    company: '',
    emailAddresses: [
      { label: 'work', email: 'defamatory-panel beater@example.com' }
    ],
    familyName: 'Flatter',
    givenName: 'Pernicious',
    jobTitle: '',
    middleName: '',
    phoneNumbers: [{ label: 'mobile', number: '(467) 130-7702' }],
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
    recordID: '2a7fc29de53ac137',
    company: '',
    emailAddresses: [
      { label: 'work', email: 'defamatory-panel beater@example.com' }
    ],
    familyName: 'Laser',
    givenName: 'Crapulous',
    jobTitle: '',
    middleName: '',
    phoneNumbers: [{ label: 'mobile', number: '(467) 130-7702' }],
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
    recordID: 'e1cb5cfcd228bc8a',
    company: '',
    emailAddresses: [
      { label: 'work', email: 'defamatory-panel beater@example.com' }
    ],
    familyName: 'Musician',
    givenName: 'Boorish',
    jobTitle: '',
    middleName: '',
    phoneNumbers: [{ label: 'mobile', number: '(467) 130-7702' }],
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
    recordID: 'db66b9bfdb587714',
    company: '',
    emailAddresses: [
      { label: 'work', email: 'defamatory-panel beater@example.com' }
    ],
    familyName: 'Trampoline',
    givenName: 'Judicious',
    jobTitle: '',
    middleName: '',
    phoneNumbers: [{ label: 'mobile', number: '(467) 130-7702' }],
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
    recordID: '316ef6a576bc97ef',
    company: '',
    emailAddresses: [
      { label: 'work', email: 'defamatory-panel beater@example.com' }
    ],
    familyName: 'Circus',
    givenName: 'Withering',
    jobTitle: '',
    middleName: '',
    phoneNumbers: [{ label: 'mobile', number: '(467) 130-7702' }],
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
    recordID: '79dfefa2eb2f36ef',
    company: '',
    emailAddresses: [
      { label: 'work', email: 'defamatory-panel beater@example.com' }
    ],
    familyName: 'Snakes',
    givenName: 'Meretricious',
    jobTitle: '',
    middleName: '',
    phoneNumbers: [{ label: 'mobile', number: '(467) 130-7702' }],
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
    recordID: '1517d49a8232ecb5',
    company: '',
    emailAddresses: [
      { label: 'work', email: 'defamatory-panel beater@example.com' }
    ],
    familyName: 'Plant operator',
    givenName: 'Contumacious',
    jobTitle: '',
    middleName: '',
    phoneNumbers: [{ label: 'mobile', number: '(467) 130-7702' }],
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
    recordID: 'f5fa68a4b777d6ca',
    company: '',
    emailAddresses: [
      { label: 'work', email: 'defamatory-panel beater@example.com' }
    ],
    familyName: 'Director',
    givenName: 'Irksome',
    jobTitle: '',
    middleName: '',
    phoneNumbers: [{ label: 'mobile', number: '(467) 130-7702' }],
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
    recordID: 'aafe6e654f3494de',
    company: '',
    emailAddresses: [
      { label: 'work', email: 'defamatory-panel beater@example.com' }
    ],
    familyName: 'Apples',
    givenName: 'Voracious',
    jobTitle: '',
    middleName: '',
    phoneNumbers: [{ label: 'mobile', number: '(467) 130-7702' }],
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
    recordID: '8b58a221654527ee',
    company: '',
    emailAddresses: [
      { label: 'work', email: 'defamatory-panel beater@example.com' }
    ],
    familyName: 'Gnomes',
    givenName: 'Boorish',
    jobTitle: '',
    middleName: '',
    phoneNumbers: [{ label: 'mobile', number: '(467) 130-7702' }],
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
    recordID: 'a18f8223efe69481',
    company: '',
    emailAddresses: [
      { label: 'work', email: 'defamatory-panel beater@example.com' }
    ],
    familyName: 'Stationary engineer',
    givenName: 'Judicious',
    jobTitle: '',
    middleName: '',
    phoneNumbers: [{ label: 'mobile', number: '(467) 130-7702' }],
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
    recordID: '6278b185d2db7f1b',
    company: '',
    emailAddresses: [
      { label: 'work', email: 'defamatory-panel beater@example.com' }
    ],
    familyName: 'Limner',
    givenName: 'Sagacious',
    jobTitle: '',
    middleName: '',
    phoneNumbers: [{ label: 'mobile', number: '(467) 130-7702' }],
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
    recordID: '27135ae77eeeb4b8',
    company: '',
    emailAddresses: [
      { label: 'work', email: 'defamatory-panel beater@example.com' }
    ],
    familyName: 'Rainbows',
    givenName: 'Propitious',
    jobTitle: '',
    middleName: '',
    phoneNumbers: [{ label: 'mobile', number: '(467) 130-7702' }],
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
    recordID: '9d7d489b2e2dd683',
    company: '',
    emailAddresses: [
      { label: 'work', email: 'defamatory-panel beater@example.com' }
    ],
    familyName: 'Scenographer',
    givenName: 'Nefarious',
    jobTitle: '',
    middleName: '',
    phoneNumbers: [{ label: 'mobile', number: '(467) 130-7702' }],
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
    recordID: 'e41cabf7539c2b26',
    company: '',
    emailAddresses: [
      { label: 'work', email: 'defamatory-panel beater@example.com' }
    ],
    familyName: 'Colorist',
    givenName: 'Turgid',
    jobTitle: '',
    middleName: '',
    phoneNumbers: [{ label: 'mobile', number: '(467) 130-7702' }],
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
    recordID: '21118d9d56fcd984',
    company: '',
    emailAddresses: [
      { label: 'work', email: 'defamatory-panel beater@example.com' }
    ],
    familyName: 'Set decorator',
    givenName: 'Egregious',
    jobTitle: '',
    middleName: '',
    phoneNumbers: [{ label: 'mobile', number: '(467) 130-7702' }],
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
    recordID: 'a4ca32e1f721ee87',
    company: '',
    emailAddresses: [
      { label: 'work', email: 'defamatory-panel beater@example.com' }
    ],
    familyName: 'Panel beater',
    givenName: 'Defamatory',
    jobTitle: '',
    middleName: '',
    phoneNumbers: [{ label: 'mobile', number: '(467) 130-7702' }],
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
  }
]
