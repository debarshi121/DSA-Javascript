const bubbleSort = (arr, n) => {
	if (n === 1) {
		return arr;
	}
	let swap = false;
	for (let i = 0; i < n - 1; i++) {
		if (arr[i] > arr[i + 1]) {
			let temp = arr[i];
			arr[i] = arr[i + 1];
			arr[i + 1] = temp;
			swap = true;
		}
	}
	if (!swap) {
		return arr;
	}

	return bubbleSort(arr, n - 1);
};


console.log(time)
const array = [4, 7, 2, 3, 1, 6];
console.log(bubbleSort(array, array.length));