const binarySearch = (nums, search) => {
	let start = 0;
	let end = nums.length - 1;

	while (start <= end) {
		let mid = Math.floor((start + end) / 2);
		if (nums[mid] === search) return mid;
		if (search > nums[mid]) {
			start = mid + 1;
		} else {
			end = mid - 1;
		}
	}
	return -1;
};

const search = 8;
console.log(binarySearch([3, 8, 9, 12, 15, 19], search));
