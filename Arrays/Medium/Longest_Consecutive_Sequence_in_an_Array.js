const longestConsecutive = (nums) => {
	const set = new Set(nums);
	let longest = 1;

	if (!nums.length) return 0;

	for (n of set) {
		if (!set.has(n - 1)) {
			let count = 1;
			while (set.has(n + count)) {
				count++;
			}
			longest = Math.max(longest, count);
		}
	}

	return longest;
};

console.log(longestConsecutive([100, 200, 1, 3, 2, 4]));