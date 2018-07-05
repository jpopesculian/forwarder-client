// @flow

export type emailAddress = {
  label: string,
  email: string
}

export type phoneNumber = {
  label: string,
  number: string
}

export type postalAddress = {
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
  emailAddresses: Array<emailAddress>,
  familyName: string,
  givenName: string,
  jobTitle: string,
  middleName: string,
  phoneNumbers: Array<phoneNumber>,
  hasThumbnail: boolean,
  thumbnailPath: string,
  postalAddresses: Array<postalAddress>,
  birthday: {
    year: number,
    month: number,
    day: number
  }
}

export type contactsState = {
  contacts: Array<contact>
}
