const missingNumber = (array, n) => {
	let sum = 0;
	for (let i = 0; i < n-1; i++) {
		sum += array[i];
	}
	const actualSum = (n * (n + 1)) / 2;
	return actualSum - sum;
};

console.log(missingNumber([1, 2, 3, 5], 5));
