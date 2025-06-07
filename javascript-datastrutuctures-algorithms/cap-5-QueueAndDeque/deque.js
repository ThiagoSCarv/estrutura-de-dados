class Deque {
  constructor() {
    this.items = {}
    this.count = 0
    this.lowestCount = 0
  }

  isEmpty() {
    return this.count - this.lowestCount === 0
  }

  addFront(element) {
    if (this.isEmpty()) {
      this.addBack(element)
    } else if (this.lowestCount > 0) {
      this.lowestCount--
      this.items[this.lowestCount] = element
    } else {
      for (let item = this.count; item > 0; item--) {
        this.items[item] = this.items[item - 1]
      }
      this.count++
      this.lowestCount = 0
      this.items[0] = element
    }
  }

  addBack(element) {
    this.items[this.count] = element
    this.count++
  }

  removeFront() {
    if (this.isEmpty()) {
      return undefined
    }

    const result = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++
    return result
  }

  removeBack() {
    if (this.isEmpty()) {
      return undefined
    }

    this.count--
    const result = this.items[this.count]
    delete this.items[this.count]
    return result
  }

  peek() {
    if (this.isEmpty()) {
      return undefined
    }

    return this.items[this.lowestCount]
  }

  peekBack() {
    if (this.isEmpty()) {
      return undefined
    }

    return this.items[this.count]
  }

  size() {
    if (this.isEmpty()) {
      return undefined
    }

    return this.count - this.lowestCount
  }

  toString() {
    if (this.isEmpty()) {
      return undefined
    }

    let objetctString = `${this.items[this.lowestCount]}`
    for (let item = this.lowestCount + 1; item < this.count; item++) {
      objetctString = `${objetctString}, ${this.items[item]}`
    }
    return objetctString
  }
}

const deque = new Deque()

console.log(deque.isEmpty())
deque.addBack('Thiago')
deque.addBack('Thais')
console.log(deque.toString())
deque.addBack('Marisa')
console.log(deque.toString())
console.log(deque.size())
console.log(deque.isEmpty())
deque.removeFront()
console.log(deque.toString())
deque.removeBack()
console.log(deque.toString())
deque.addFront('Thiago')
console.log(deque.toString())
