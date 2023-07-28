const helper = (arr, start, end) => {
	if (end < start) return arr;
	let temp = arr[start];
	arr[start] = arr[end];
	arr[end] = temp;
	return helper(arr, start + 1, end - 1);
};

console.log(helper([1, 2, 3, 4, 5], 0, 4));