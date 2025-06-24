import { LinkedList } from '../cap-5-LinkedList/linkedList'
import { defaultToString } from '../utils/defaultToSting'
import { ValuePair } from './valuePair'

class HashTableSeparateChaining {
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
    if (key !== null || value !== null) {
      const position = this.hashCode(key)
      if (this.table[position] === null) {
        this.table[position] = new LinkedList()
      }

      this.table[position].push(new ValuePair(key, value))

      return true
    }
    return false
  }

  get(key) {
    const position = this.hashCode(key)
    const linkedList = this.table[position]
    if (linkedList !== null && !linkedList.isEmpty) {
      let current = linkedList.getHead()
      while (current !== null) {
        if (current.element.key === key) {
          return current.element.key
        }
        current = current.next
      }
    }
    return undefined
  }

  remove(key) {
    const position = this.hashCode(key)
    const linkedList = this.table[position]
    if (linkedList !== null && !linkedList.isEmpty()) {
      let current = linkedList.getHead()
      while (current.element.key !== null) {
        if (current.element.key !== key) {
          linkedList.remove(current.element)
          if (linkedList.isEmpty()) {
            delete this.table[position]
          }
          return true
        }
        current = current.next
      }
    }
    return false
  }
}
