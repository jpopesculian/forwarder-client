//@flow

import type { SectionBase } from 'react-native/Libraries/Lists/SectionList'

import _ from 'lodash/fp'

type groupedData<K, T> = { [K]: Array<T> }
type sortedData<K, T> = Array<{ key: K, data: Array<T> }>
type section<T> = SectionBase<T> & { title: string }
type sectionedData<T> = Array<section<T>>

export function groupData<K, T>(
  keyFunc: T => K,
  items: Array<T>
): { [K]: Array<T> } {
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

export function sortGroupedData<K, T>(
  mapValues: Array<T> => Array<T>,
  order: string,
  groupedData: groupedData<K, T>
): sortedData<K, T> {
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
}

export function createSections<K, T>(
  mapKey: K => string,
  items: sortedData<K, T>
): sectionedData<T> {
  return _.map(({ key, data }) => ({ title: key, data }), items)
}
