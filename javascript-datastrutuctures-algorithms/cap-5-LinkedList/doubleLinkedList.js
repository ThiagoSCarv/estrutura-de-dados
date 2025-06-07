import { defaultEquals } from './defaultEquals.js'
import { DoubleNode } from './doubleNode.js'
import LinkedList from './linkedList.js'

class DoubleLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn)
    this.tail = undefined
  }

  push(element) {
    const node = new DoubleNode(element)
    if (this.head === undefined) {
      this.tail = node
      this.head = node
    } else {
      let current = this.head
      while (current.next != null) {
        current = current.next
      }
      current.next = node
      node.prev = current
      this.tail = current
    }
    this.count++
  }

  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new DoubleNode(element)
      // biome-ignore lint/style/useConst: <explanation>
      let current = this.head
      if (index === 0) {
        if (this.head === undefined) {
          this.head = node
          this.tail = node
        } else {
          node.next = this.head
          current.prev = node
          this.head = node
        }
      } else if (index === this.count) {
        current = this.tail
        current.next = node
        node.prev = current
        this.tail = node
      } else {
        const previous = this.getElementByIndex(index - 1)
        current = previous.next
        node.next = current
        previous.next = node
        current.prev = node
        node.prev = previous
      }
      this.count++
      return true
    }
    return false
  }

  removeAt(index) {
    if (index >= 0 && index <= this.count) {
      let current = this.head
      if (index === 0) {
        this.head = current.next
        if (this.count === 1) {
          this.tail = undefined
        } else {
          this.head.prev = undefined
        }
      } else if (index === this.count - 1) {
        current = this.tail
        const previous = current.prev
        this.tail = previous
        previous.next = undefined
      } else {
        current = this.getElementByIndex(index)
        const previous = current.prev
        const next = current.next
        previous.next = next
        next.previous = previous
      }
      this.count--
      return current.element
    }
    return undefined
  }
}

const newDoubleLinkedList = new DoubleLinkedList()

console.log(newDoubleLinkedList.isEmpty())

newDoubleLinkedList.insert(9, 0)
newDoubleLinkedList.insert(8, 0)
newDoubleLinkedList.insert(12, 0)
newDoubleLinkedList.insert(32, 4)
newDoubleLinkedList.push(32)
newDoubleLinkedList.insert(9, 0)
newDoubleLinkedList.insert(10, 1)
newDoubleLinkedList.insert(11, 2)
newDoubleLinkedList.insert(12, 3)
newDoubleLinkedList.insert(19, 4)

newDoubleLinkedList.removeAt(4)
newDoubleLinkedList.removeAt(1)
newDoubleLinkedList.removeAt(0)
newDoubleLinkedList.insert(24, 3)

console.log(newDoubleLinkedList.toString())
