//@flow

import moment from 'moment'
import _ from 'lodash/fp'

type momentable = string | moment

export function removeTime(dateArg: momentable): moment {
  return moment(_.pick(['years', 'months', 'date'], moment(dateArg).toObject()))
}

export function humanizeDate(dateArg: momentable): string {
  const date = moment(dateArg)
  const today = removeTime(moment())
  const day = removeTime(date)
  const days = moment.duration(today.diff(day)).asHours()
  if (days < 1) {
    return 'Today'
  } else if (days < 2) {
    return 'Yesterday'
  } else if (days < 5) {
    return date.format('dddd')
  } else {
    return date.format('MMMM Do')
  }
  // TODO figure out over year humanize
}

export function dateKey(dateArg: momentable): number {
  return parseInt(moment(dateArg).format('YYYYMMDD'))
}
