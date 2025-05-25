class Stack {
  constructor() {
    this.items = []
  }

  push(elements){
    this.items.push(elements)
  }

  pop() {
    return this.items.pop()
  }

  peek() {
    const lastItemPosition = this.items.length - 1
    const lastItem = this.items[lastItemPosition]
    return lastItem
  }

  isEmpty() {
    if (this.items.length === 0){
      return true
    }

    return false
  }

  clear() {
    this.items = []
  }

  size() {
    const sizeOfStack = this.items.length
    return sizeOfStack
  }

}

const stack = new Stack()

//console.log(stack.isEmpty())

stack.push(5)

stack.push(8)

//console.log(stack.peek())

stack.push(11)

//console.log(stack.size())

//console.log(stack.isEmpty())

stack.push(15)

stack.pop()

stack.pop()

console.log(stack.size())
