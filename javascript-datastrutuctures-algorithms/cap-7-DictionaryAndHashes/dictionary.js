import { defaultToString } from '../utils/defaultToSting'
import { ValuePair } from './valuePair'

export default class Dictionary {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn
    this.table = {}
  }

  hasKey(key) {
    return this.table[this.toStrFn(key)] != null
  }

  set(key, value) {
    if (key != null && value != null) {
      const tableKey = this.toStrFn(key)
      this.table[tableKey] = new ValuePair(key, value)
      return true
    }
    return false
  }

  remove(key) {
    if (this.hasKey(key)) {
      delete this.table[this.toStrFn(key)]
      return true
    }
    return false
  }

  get(key) {
    const valuePair = this.table[this.toStrFn(key)]
    return valuePair === null ? undefined : valuePair.value
  }

  keyValues() {
    const valuePairs = []
    for (const item in this.table) {
      if (this.hasKey(item)) {
        valuePairs.push(this.table[item])
      }
    }
    return valuePairs
  }

  keys() {
    return this.keyValues().map((valuePair) => valuePair.key)
  }

  values() {
    return this.keyValues().map((valuePair) => valuePair.value)
  }

  size() {
    return Object.keys(this.table).length
  }

  clear() {
    this.table = {}
  }

  isEmpty() {
    return this.size === 0
  }

  toString() {
    if (this.isEmpty()) {
      return ''
    }

    const valuePairs = this.keyValues()
    let objectString = `${valuePairs[0].toString()}`
    for (let item = 1; item < valuePairs.length; item++) {
      objectString = `${objectString}, ${valuePairs[item].toString()}`
    }
    return objectString
  }
}

export class HashTable {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn
    this.table = {}
  }

  loseLoseHash(key) {
    if (key === 'number') {
      return key
    }

    const tableKey = this.toStrFn(key)
    let hash = 0
    for (let letter = 0; letter < tableKey.length; i++) {
      hash += tableKey.charCodeAt(letter)
    }
    return hash % 37
  }

  hashCode(key) {
    return this.loseLoseHash(key)
  }

  put(key, value) {
    if (key != null && value != null) {
      const position = this.hashCode(key)
      this.table[position] = new ValuePair(key, value)
      return true
    }
    return false
  }

  get(key) {
    const valuePair = this.table[this.hashCode(key)]
    return valuePair === null ? undefined : valuePair.value
  }

  remove(key) {
    const position = this.hashCode(key)
    const valuePair = this.table[position]
    if (valuePair !== null) {
      delete this.table[position]
      return true
    }
    return false
  }
}
