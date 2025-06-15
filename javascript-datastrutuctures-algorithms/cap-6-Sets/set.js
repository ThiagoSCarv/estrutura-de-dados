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
}
