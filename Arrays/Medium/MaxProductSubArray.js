const findMaxProduct = (nums) => {
	let maxProduct = nums[0];
	let currentMax = nums[0];
	let currentMin = nums[0];

	for (let i = 1; i < nums.length; i++) {
		if (nums[i] < 0) {
			const temp = currentMax;
			currentMax = currentMin;
			currentMin = temp;
		}

		currentMax = Math.max(nums[i], currentMax * nums[i]);
		currentMin = Math.min(nums[i], currentMin * nums[i]);

		maxProduct = Math.max(maxProduct, currentMax);
	}

	return maxProduct;
};

console.log(findMaxProduct([1,2,-3,0,-4,-5]));
