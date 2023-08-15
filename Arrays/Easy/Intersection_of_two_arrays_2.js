// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]

const intersect = (nums1, nums2) => {
	const intersectArr = [];
	const map = new Map();
	for (let i = 0; i < nums1.length; i++) {
		if (map.has(nums1[i])) {
			map.set(nums1[i], map.get(nums1[i]) + 1);
		} else {
			map.set(nums1[i], 1);
		}
	}

	for (let i = 0; i < nums2.length; i++) {
		if (map.has(nums2[i])) {
			intersectArr.push(nums2[i]);
			if (map.get(nums2[i]) - 1 === 0) {
				map.delete(nums2[i]);
			} else {
				map.set(nums2[i], map.get(nums2[i]) - 1);
			}
		}
	}

	return intersectArr;
};

console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
