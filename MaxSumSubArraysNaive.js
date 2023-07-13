const findMaxSum = (arr) => {
	let maxSum = -Infinity;
    
	for (let i = 0; i < arr.length; i++) {
		let currentSum = 0;

		for (let j = i; j < arr.length; j++) {
			currentSum += arr[j];
			maxSum = Math.max(maxSum, currentSum);
		}
	}

    return maxSum
};

console.log(findMaxSum([5, 4, -1, 7, 8]));
console.log(findMaxSum([4, -1, -2, -3, -4]));
console.log(findMaxSum([-4, -1, -2, -3, -4]));