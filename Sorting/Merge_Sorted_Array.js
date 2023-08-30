// https://leetcode.com/problems/merge-sorted-array/

const mergeArray = (nums1, m, nums2, n) => {
	let i = 0;
	let j = 0;

	const temp = [];

	while (i < m && j < n) {
		if (nums1[i] <= nums2[j]) {
			temp.push(nums1[i]);
			i++;
		} else {
			temp.push(nums2[j]);
			j++;
		}
	}

	while (i < m) {
		temp.push(nums1[i]);
		i++;
	}

	while (j < n) {
		temp.push(nums2[j]);
		j++;
	}

	for (let i = 0; i < temp.length; i++) {
		nums1[i] = temp[i];
	}

	return nums1;
};

const nums1 = [4, 5, 6, 0, 0, 0];
const nums2 = [1, 2, 3];
const m = 3;
const n = 3;

console.log(mergeArray(nums1, m, nums2, n));

