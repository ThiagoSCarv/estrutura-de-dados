import { DoubleLinkedList } from './doubleLinkedList.js'

class StackLinkedList {
  constructor(){
    this.items = new DoubleLinkedList()
  }

  push(element){
    this.items.push(element)
  }
  pop(){
    if (this.isEmpty()){
      return undefined
    }

    return this.items.removeAt(this.items.size() - 1)
  }

  peek(){
    if (this.isEmpty()){
      return undefined
    }

    return this.items.removeAt(this.items.size() - 1)
  }

  isEmpty(){
    return this.items.isEmpty()
  }

  size(){
    return this.items.size()
  }

  toString(){
    this.items.toString()
  }
}