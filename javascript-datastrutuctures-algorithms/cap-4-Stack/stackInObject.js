class Stack {
	constructor() {
		this.count = 0;
		this.items = {};
	}

	push(element) {
		this.items[this.count] = element;
		this.count++;
	}

	size() {
		const sizeOfStack = this.count;
		return sizeOfStack;
	}

	isEmpty() {
		return this.count === 0;
	}

	pop() {
		if (this.isEmpty()) {
			return undefined;
		}
		this.count--;
		const result = this.items[this.count];
		delete this.items[this.count];
		return result;
	}

	peek() {
		if (this.isEmpty()) {
			return undefined;
		}

		this.count--;
		const lastItem = this.items[this.count];
		return lastItem;
	}

	clear() {
		this.count = 0;
		this.items = {};
	}

	toString() {
		if (this.isEmpty()) {
			return "";
		}

		let objectString = `${this.items[0]}`;

		for (let i = 1; i < this.count; i++) {
			objectString = `${objectString}, ${this.items[i]}`;
		}

		return objectString;
	}
}

const stack = new Stack();

stack.push(5);
stack.push(8);

//stack.pop();

//console.log(stack.peek());

//stack.clear();

console.log(stack.toString());
