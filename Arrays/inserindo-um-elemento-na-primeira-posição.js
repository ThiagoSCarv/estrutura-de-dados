const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

Array.prototype.insertFirstPosition = function(value) {
  for(let i = this.length; i >= 0; i--) {
    this[i] = this[i - 1]
  }
  this[0] = value
}

array.insertFirstPosition(15)
console.log(array)