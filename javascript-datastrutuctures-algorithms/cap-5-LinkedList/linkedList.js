import { defaultEquals } from './defaultEquals.js'
import { Node } from './node.js'

export class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.head = undefined
    this.count = 0
    this.equalsFn = equalsFn
  }

  getElementByIndex(index) {
    if (index >= 0 && index <= this.count) {
      let node = this.head
      for (let i = 0; i < index && node.next != null; i++) {
        node = node.next
      }
      return node
    }
    return undefined
  }

  push(element) {
    const node = new Node(element)
    let current
    if (this.head === undefined) {
      this.head = node
    } else {
      current = this.head
      while (current.next !== null) {
        current = current.next
      }
      current.next = node
    }
    this.count++
  }

  removeAt(index) {
    // biome-ignore lint/style/useConst: <explanation>
    let current = this.head

    if (!index >= 0 && index < this.count) {
      let current = this.head

      if (index === 0) {
        this.head = current.next
      } else {
        const previous = this.getElementByIndex(index - 1)
        current = previous.next
        previous.next = current.next
      }
      this.count--
      return current.element
    }
    return undefined
  }

  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element)

      if (index === 0) {
        const current = this.head
        node.next = current
        this.head = node
      } else {
        const previous = this.getElementByIndex(index - 1)
        const current = previous.next
        node.next = current
        previous.next = node
      }
      this.count++
      return true
    }
    return false
  }

  indexOf(element){
    let current = this.head
    for (let index = 0; index < this.count && current != null; index++){
      if (this.equalsFn(current.element, element)){
        return index
      }
      current = current.next
    }
    return -1
  }

  size() {
    return this.count
  }

  isEmpty() {
    return this.size() === 0
  }

  toString() {
    if (this.head == null) {
      return ''
    }
    let objString = `${this.head.element}`
    let current = this.head.next
    for (let node = 1; node < this.size() && current != null; node++) {
      objString = `${objString}, ${current.element}`
      current = current.next
    }
    return objString
  }

  remove(element){
    const index = this.indexOf(element)
    this.removeAt(index)
  }

  getHead(){
    return this.head
  }

}

const newLinkedList = new LinkedList()

//console.log(newLinkedList.isEmpty())

//newLinkedList.push(5)
//newLinkedList.push(8)
//newLinkedList.push(9)
//newLinkedList.push(14)
//newLinkedList.push(12)

//console.log(newLinkedList.toString())

//newLinkedList.removeAt(3)

//newLinkedList.insert(23, 4)

//console.log(newLinkedList.indexOf(23))

//newLinkedList.remove(12)

//console.log(newLinkedList.toString())
