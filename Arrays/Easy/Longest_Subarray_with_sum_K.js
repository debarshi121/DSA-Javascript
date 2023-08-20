const findLongest = (nums, k) => {
	let i = 0;
	let j = 0;
	let max = 0;

	let sum = 0;

	while (i < nums.length) {
		sum += nums[j];
		if (sum === k) {
			max = Math.max(max, j - i + 1);
		}
		if (j === nums.length - 1) {
			break;
		}
		if (sum > k) {
			i++;
			j = i;
			sum = 0;
		} else {
			j++;
		}
	}

	return max;
};

nums = [1, 2, 3, 1, 1, 1, 1];
k = 3;
console.log(findLongest(nums, k));
