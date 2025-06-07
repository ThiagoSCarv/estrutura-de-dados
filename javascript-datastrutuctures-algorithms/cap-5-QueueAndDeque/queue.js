class Queue {
  constructor() {
    this.count = 0
    this.lowestCount = 0
    this.items = {}
  }
  enqueue(element) {
    this.items[this.count] = element
    this.count++
  }

  isEmpty() {
    return this.lowestCount - this.count === 0
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined
    }
    const result = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++
    return result
  }

  peek() {
    if (this.isEmpty()) {
      return undefined
    }

    return this.items[this.lowestCount]
  }

  size() {
    if (this.isEmpty()) {
      return undefined
    }

    return this.count - this.lowestCount
  }

  clear() {
    this.items = {}
    this.count = 0
    this.lowestCount = 0
  }

  toString() {
    if (this.isEmpty()) {
      return undefined
    }

    let objString = `${this.items[this.lowestCount]}`
    for (let item = this.lowestCount + 1; item < this.count; item++) {
      objString = `${objString}, ${this.items[item]}`
    }
    return objString
  }
}

const queue = new Queue()

console.log(queue.isEmpty())

queue.enqueue(5)
queue.enqueue(8)
console.log(queue.items)

queue.dequeue()

console.log(queue.items)
console.log(`O Item no topo da pilha é ${queue.peek()}`)
console.log(`A Fila tem ${queue.size()} elementos`)
console.log(typeof queue.toString())
queue.clear()
console.log(queue.items, queue.count, queue.lowestCount)
