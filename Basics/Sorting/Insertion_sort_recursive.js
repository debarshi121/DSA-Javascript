const helper = (arr, i, n) => {
	if (i === n) {
		return arr;
	}
	let pos = arr[i];
	let j = i - 1;
	while (j >= 0) {
		if (pos < arr[j]) {
			let temp = arr[j + 1];
			arr[j + 1] = arr[j];
			arr[j] = temp;
		} else {
			break;
		}
		j--;
	}

	return helper(arr, i + 1, n);
};

const arr = [4, 1, 7, 3, 2, 8];
console.log(helper(arr, 1, arr.length));