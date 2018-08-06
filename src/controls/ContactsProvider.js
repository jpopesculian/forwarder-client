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
    emailAddresses: [{ label: 'work', email: 'jpopesculian@gmail.com' }],
    familyName: 'Number',
    givenName: '_Pixel',
    jobTitle: '',
    middleName: '',
    phoneNumbers: [{ label: 'mobile', number: '(916) 585-4267' }],
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
    emailAddresses: [{ label: 'work', email: 'carl-jung@example.com' }],
    familyName: 'Jung',
    givenName: 'Carl',
    jobTitle: '',
    middleName: '',
    phoneNumbers: [{ label: 'mobile', number: '(376) 541-1782' }],
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
    emailAddresses: [{ label: 'home', email: 'sig-freud@example.com' }],
    familyName: 'Freud',
    givenName: 'Sigmund',
    jobTitle: '',
    middleName: '',
    phoneNumbers: [{ label: 'home', number: '(836) 013-0597' }],
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
    emailAddresses: [{ label: 'work', email: 'chuck-norris@example.com' }],
    familyName: 'Norris',
    givenName: 'Chuck',
    jobTitle: '',
    middleName: '',
    phoneNumbers: [{ label: 'mobile', number: '(495) 333-7927' }],
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
    phoneNumbers: [{ label: 'mobile', number: '(516) 666-5453' }],
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
    phoneNumbers: [{ label: 'mobile', number: '(464) 859-5865' }],
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
    phoneNumbers: [{ label: 'mobile', number: '(421) 878-4468' }],
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
    phoneNumbers: [{ label: 'mobile', number: '(666) 707-6691' }],
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
    phoneNumbers: [{ label: 'mobile', number: '(659) 299-5586' }],
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
    phoneNumbers: [{ label: 'mobile', number: '(279) 222-0993' }],
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
    phoneNumbers: [{ label: 'mobile', number: '(733) 362-9244' }],
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
    phoneNumbers: [{ label: 'mobile', number: '(613) 104-4670' }],
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
    phoneNumbers: [{ label: 'mobile', number: '(962) 777-6202' }],
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
    phoneNumbers: [{ label: 'mobile', number: '(843) 002-1028' }],
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
    phoneNumbers: [{ label: 'mobile', number: '(800) 733-1738' }],
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
    phoneNumbers: [{ label: 'mobile', number: '(174) 081-7888' }],
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
    phoneNumbers: [{ label: 'mobile', number: '(630) 242-3789' }],
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
    phoneNumbers: [{ label: 'mobile', number: '(353) 660-2886' }],
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
    phoneNumbers: [{ label: 'mobile', number: '(705) 643-3384' }],
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
    phoneNumbers: [{ label: 'mobile', number: '(145) 646-1820' }],
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
    phoneNumbers: [{ label: 'mobile', number: '(224) 292-3076' }],
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
    phoneNumbers: [{ label: 'mobile', number: '(912) 414-3424' }],
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
    phoneNumbers: [{ label: 'mobile', number: '(254) 140-9891' }],
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
    phoneNumbers: [{ label: 'mobile', number: '(524) 929-6719' }],
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
    phoneNumbers: [{ label: 'mobile', number: '(250) 117-1345' }],
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
    phoneNumbers: [{ label: 'mobile', number: '(302) 630-6809' }],
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
    phoneNumbers: [{ label: 'mobile', number: '(847) 627-6222' }],
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
    phoneNumbers: [{ label: 'mobile', number: '(754) 799-4398' }],
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
    phoneNumbers: [{ label: 'mobile', number: '(478) 130-4980' }],
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
    phoneNumbers: [{ label: 'mobile', number: '(345) 389-7750' }],
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
    phoneNumbers: [{ label: 'mobile', number: '(196) 199-8881' }],
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
    phoneNumbers: [{ label: 'mobile', number: '(272) 534-5194' }],
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
    phoneNumbers: [{ label: 'mobile', number: '(995) 478-3142' }],
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
    phoneNumbers: [{ label: 'mobile', number: '(711) 658-0597' }],
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
    phoneNumbers: [{ label: 'mobile', number: '(657) 945-1313' }],
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
    phoneNumbers: [{ label: 'mobile', number: '(651) 091-5907' }],
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
    phoneNumbers: [{ label: 'mobile', number: '(531) 243-1396' }],
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
    phoneNumbers: [{ label: 'mobile', number: '(467) 055-0450' }],
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
    phoneNumbers: [{ label: 'mobile', number: '(556) 870-8928' }],
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
    phoneNumbers: [{ label: 'mobile', number: '(389) 187-5304' }],
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
    phoneNumbers: [{ label: 'mobile', number: '(565) 433-3905' }],
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
    phoneNumbers: [{ label: 'mobile', number: '(858) 042-7746' }],
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
    phoneNumbers: [{ label: 'mobile', number: '(149) 678-8757' }],
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
    phoneNumbers: [{ label: 'mobile', number: '(488) 051-9121' }],
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
    phoneNumbers: [{ label: 'mobile', number: '(813) 357-5396' }],
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
    phoneNumbers: [{ label: 'mobile', number: '(688) 401-9435' }],
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
    phoneNumbers: [{ label: 'mobile', number: '(513) 709-1288' }],
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
    phoneNumbers: [{ label: 'mobile', number: '(689) 712-5558' }],
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
    phoneNumbers: [{ label: 'mobile', number: '(955) 746-1941' }],
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
    phoneNumbers: [{ label: 'mobile', number: '(522) 510-9976' }],
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
    phoneNumbers: [{ label: 'mobile', number: '(656) 972-6292' }],
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
    phoneNumbers: [{ label: 'mobile', number: '(385) 092-8932' }],
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
    phoneNumbers: [{ label: 'mobile', number: '(262) 008-0679' }],
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
    phoneNumbers: [{ label: 'mobile', number: '(428) 666-0994' }],
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
