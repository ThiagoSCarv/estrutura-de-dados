import { Node } from "./nodeBST.js";
import { defaultCompare, Compare } from "../utils/defaultCompare.js";

export class BinarySearchTree {
	constructor(compareFn = defaultCompare) {
		this.compareFn = compareFn;
		this.root = null;
	}

	insert(key) {
		if (this.root == null) {
			this.root = new Node(key);
		} else {
			this.insertNode(this.root, key);
		}
	}

	insertNode(node, key) {
		if (this.compareFn(key, node.key) == Compare.LESS_THAN) {
			if (node.left == null) {
				node.left = new Node(key);
			} else {
				this.insertNode(node.left, key);
			}
		} else {
			if (node.right == null) {
				node.right = new Node(key);
			} else {
				this.insertNode(node.right, key);
			}
		}
	}

	inOrderTravese(callback) {
		this.inOrderTravesseNode(this.root, callback);
	}

	inOrderTravesseNode(node, callback) {
		if (node != null) {
			this.inOrderTravesseNode(node.left, callback);
			callback(node.key);
			this.inOrderTravesseNode(node.right, callback);
		}
	}

	preOrderTravesse(callback) {
		this.preOrderTravesseNode(this.root, callback);
	}

	preOrderTravesseNode(node, callback) {
		if (node != null) {
			callback(node.key);
			this.preOrderTravesseNode(node.left, callback);
			this.preOrderTravesseNode(node.right, callback);
		}
	}

	posOrderTravesse(callback) {
		this.posOrderTravesseNode(this.root, callback);
	}

	posOrderTravesseNode(node, callback) {
		if (node != null) {
			this.posOrderTravesseNode(node.left, callback);
			this.posOrderTravesseNode(node.right, callback);
			callback(node.key);
		}
	}

  min(){
    return this.minNode(this.root)
  }

  minNode(node){
    let current = node 
    while (current != null && current.left != null){
      current = current.left
    }
    return current
  }

  max(){
    return this.maxNode(this.root)
  }

  maxNode(node){
    let current = node
    while (current != null && current.right != null) {
      current = current.right
    }
    return current
  }

  search(key){
    return this.searchNode(this.root, key)
  }

  searchNode(node, key){
    if(node == null) {
      return false
    }
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      return this.searchNode(node.left, key)
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN){
        return this.searchNode(node.right, key)
    } else {
      return true
    }
  }
}

const tree = new BinarySearchTree();

tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);
const printNode = (value) => console.log(value);
tree.inOrderTravese(printNode);
console.log("----------------------");
tree.preOrderTravesse(printNode);
console.log("----------------------");
tree.posOrderTravesse(printNode);
console.log(tree.min())
console.log(tree.max())
console.log(tree.search(1))
console.log(tree.search(8))

