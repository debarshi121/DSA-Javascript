// https://leetcode.com/problems/missing-number/

const missingNumber = (nums) => {
	const sumOfN = (nums.length * (nums.length + 1)) / 2;
	let sum = 0;

	for (let i = 0; i < nums.length; i++) {
		sum += nums[i];
	}

	return sumOfN - sum;
};

console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
