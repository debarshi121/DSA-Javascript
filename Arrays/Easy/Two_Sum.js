// Using Hashmap
const twoSum = (arr, target) => {
	const map = new Map();

	for (let i = 0; i < arr.length; i++) {
		num1 = arr[i];
		num2 = target - arr[i];

		if (map.has(num2)) {
			return [map.get(num2), i];
		}
		map.set(num1, i);
	}
};

const arr = [3, 2, 4];
const target = 6;
console.log(twoSum(arr, target));

// Using Two Pointers (The given array should be sorted)
const twoSumOnSorted = (arr, target) => {
	let start = 0;
	let end = arr.length - 1;

	while (start < end) {
		if (arr[start] + arr[end] === target) {
			return [start, end];
		}
		if (arr[start] + arr[end] < target) {
			start++;
		}
		if (arr[start] + arr[end] > target) {
			end--;
		}
	}
};

console.log(twoSumOnSorted([2,3,4], 6));
