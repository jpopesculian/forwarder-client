//@flow

import type { SectionBase } from 'react-native/Libraries/Lists/SectionList'

import _ from 'lodash/fp'
import { curry2, curry3 } from './curry'

export type SectionWithTitle<T> = SectionBase<T> & { title: string }
export type SectionItemProps<T> = {
  item: T,
  index: number,
  section: SectionWithTitle<T>
}
export type SectionHeaderProps<T> = {
  section: SectionWithTitle<T>
}

type groupedData<K, T> = { [K]: Array<T> }
type sortedData<K, T> = Array<{ key: K, data: Array<T> }>
type section<T> = SectionBase<T> & { title: string }
type sectionedData<T> = Array<section<T>>

export const groupData = curry2(
  <K, T>(keyFunc: T => K, items: Array<T>): groupedData<K, T> => {
    return _.reduce(
      (result: groupedData<K, T>, item: T): groupedData<K, T> => {
        const key = keyFunc(item)
        const itemsAtKey = result[key]
        return _.set(
          key,
          _.isArray(itemsAtKey) ? _.concat(itemsAtKey, item) : [item],
          result
        )
      },
      {},
      items
    )
  }
)

export const sortGroupedData = curry3(<K, T>(
  mapValues: Array<T> => Array<T>,
  order: string,
  groupedData: groupedData<K, T>
): sortedData<K, T> => {
  return _.orderBy(
    'key',
    [order],
    _.zipWith(
      (key, data) => {
        return { key, data }
      },
      _.keys(groupedData),
      mapValues(_.values(groupedData))
    )
  )
})

export const createSections = curry2(<K, T>(
  mapKey: K => string,
  items: sortedData<K, T>
): sectionedData<T> => {
  return _.map(({ key, data }) => ({ title: mapKey(key), data }), items)
})
