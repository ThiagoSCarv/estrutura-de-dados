const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

/*for (let i = 0; i < array.length; i++) {
  console.log(array[i], array[i + 1]);
	array[i] = array[i + 1];
}*/


// biome-ignore lint/complexity/useArrowFunction: <explanation>
Array.prototype.reIndex = function(array) {
	const newArray = [];
	for (let i = 0; i < array.length; i++) {
		if (array[i] !== undefined) {
			newArray.push(array[1]);
		}
	}
	return newArray;
};

Array.prototype.removeFirstPosition = function() {
	for (let i = 0; i < this.length; i++) {
		this[i] = this[i + 1];
	}
	return this.reIndex(this);
};

array.removeFirstPosition();

console.log(array);
