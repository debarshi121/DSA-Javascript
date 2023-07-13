const findMaxProduct = (arr) => {
	let maxProduct = -Infinity;
    
	for (let i = 0; i < arr.length; i++) {
		let currentProduct = 1;

		for (let j = i; j < arr.length; j++) {
			currentProduct *= arr[j];
			maxProduct = Math.max(maxProduct, currentProduct);
		}
	}

    return maxProduct
};

console.log(findMaxProduct([5, 2, 3, -2, 4, 5]));
console.log(findMaxProduct([4, -1, -2, -3, -4]));