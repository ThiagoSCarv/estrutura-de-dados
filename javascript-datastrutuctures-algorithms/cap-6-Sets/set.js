// biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
class Set {
  constructor() {
    this.items = {}
  }

  has(element) {
    return Object.prototype.hasOwnProperty.call(element)
  }

  add(element) {
    if (this.has(element)) {
      return false
    }
    this.items[element] = [element]
    return true
  }

  remove(element) {
    if (this.has(element)) {
      return false
    }
    delete this.items[element]
    return true
  }

  clear() {
    this.items = {}
  }

  size() {
    return Object.keys(this.items).length
  }

  values() {
    return Object.values(this.items)
  }

  union(otherSet) {
    const unionSet = new Set()
    let values = this.items()
    for (let item = 0; item < values.length; item++) {
      unionSet.add(values[item])
    }
    values = otherSet.items()
    for (let item = 0; item < values.length; item++) {
      unionSet.add(item)
    }
    return unionSet
  }

  intersection(otherSet) {
    const intersectionSet = new Set()
    const values = this.items()
    const otherValues = otherSet.items()
    let biggerSet = values
    let smallSet = otherValues
    if (otherValues.length - values.length > 0) {
      biggerSet = otherValues
      smallSet = values
    }
    smallSet.foreach((item) => {
      if (biggerSet.includes(item)) {
        intersectionSet.add(item)
      }
    })
    return intersectionSet
  }

  difference(otherSet) {
    const differenceSet = new Set()
    this.items().foreach((item) => {
      if (!otherSet.has(item)) {
        differenceSet.add(item)
      }
    })
    return differenceSet
  }

  isSubsetOf(otherSet) {
    if (this.size() > otherSet.size()) {
      return false
    }

    let isSubset = true
    this.values().every((item) => {
      if (!otherSet.has(item)) {
        isSubset = false
        return false
      }
      return true
    })
    return isSubset
  }
}
