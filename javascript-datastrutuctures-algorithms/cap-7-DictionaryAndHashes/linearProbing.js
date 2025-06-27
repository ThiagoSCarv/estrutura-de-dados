import { LinkedList } from '../cap-5-LinkedList/linkedList'
import { defaultToString } from '../utils/defaultToSting'
import { ValuePair } from './valuePair'

class LinearProbing {
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
    const position = this.hashCode(key)
    if (key !== null && value !== null) {
      if (this.table[position] === null) {
        this.table[position] = new ValuePair(key, value)
      } else {
        let index = position + 1
        while (this.table[index] !== null) {
          index++
        }
        this.table[index] = new ValuePair()
      }
      return true
    }
    return false
  }

  get(key) {
    const position = this.hashCode(key)
    if (this.table[position] !== null) {
      if (this.table[position].key === key) {
        return this.table[position].value
      }
    }
    let index = position + 1
    while (this.table[index] !== null && this.table[index] !== key) {
      index++
    }
    if (this.table[index] !== null && this.table[index] === key) {
      return this.table[index].value
    }
    return undefined
  }

  verifyRemoveSideEffect(key, removedPosition) {
    const hash = this.hashCode(key)
    let index = removedPosition + 1
    while (this.table[index] !== null) {
      const posHash = this.hashCode(this.table[index].key)
      if (posHash <= hash || posHash <= removedPosition) {
        this.table[removedPosition] = this.table[index]
        delete this.table[index]
        removedPosition = index
      }
      index++
    }
  }

  remove(key) {
    const position = this.hashCode(key)
    if (this.table[position] !== null) {
      if (this.table[position].key === key) {
        delete this.table[position]
        this.verifyRemoveSideEffect(key, position)
        return true
      }
      let index = position + 1
      while (this.table[index] !== null && this.table[index] !== key) {
        index++
      }
      if (this.table[index] !== null && this.table[index].key === key) {
        delete this.table[index]
        this.verifyRemoveSideEffect(key, index)
        return true
      }
    }
    return false
  }
}
