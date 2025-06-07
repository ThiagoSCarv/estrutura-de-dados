import { defaultEquals } from './defaultEquals.js'
import { Node } from './node.js'
import LinkedList from './linkedList.js'

class CircularLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn)
  }

  insert(element, index){
    if (index >= 0 && index <= this.count){
      const node = new Node(element)
      let current = this.head
      const last = this.getElementByIndex(this.size())
      if (index === 0){
        if (this.head === undefined){ 
          this.head = node
          node.next = this.head
        } else {
          node.next = current
          this.head = node
          last.next = this.head
        }
      } else {
        const previous = this.getElementByIndex(index - 1)
        current = previous.next
        node.next = current
        previous.next = node
      }
      this.count++
      return true
    }
    return false
  }
   
  removeAt(index){
    if (index >= 0 && index <= this.count){
      // biome-ignore lint/style/useConst: <explanation>
      let current = this.head
      const last = this.getElementByIndex(this.size())
      if (index === 0){
        if (this.count === 1){
          this.head = undefined
        } else {
          const removed = this.head
          const next = removed.next 
          this.head = next
          last.next = this.head
          current = removed
        }
      } else {
        const previous = this.getElementByIndex(index - 1)
        current = previous.next
        const next = current.next
        previous.next = next
      }
      this.count--
      return current.element      
    }
    return undefined
  }

}

const newCircularLinkedList = new CircularLinkedList()

newCircularLinkedList.push(1)
newCircularLinkedList.push(2)
newCircularLinkedList.push(3)
newCircularLinkedList.push(4)
newCircularLinkedList.push(5)
newCircularLinkedList.insert(6, 0)
newCircularLinkedList.insert(7, 1)
newCircularLinkedList.insert(8, 2)

newCircularLinkedList.removeAt(2)


console.log(newCircularLinkedList.toString())