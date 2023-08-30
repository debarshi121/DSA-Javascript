const merge = (arr, start, mid, end) => {
	const temp = [];
	let arr1 = arr.slice(start, mid + 1);
	let arr2 = arr.slice(mid + 1, end + 1);

	let i = 0;
	let j = 0;

	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] <= arr2[j]) {
			temp.push(arr1[i]);
			i++;
		} else {
			temp.push(arr2[j]);
			j++;
		}
	}

	while (i < arr1.length) {
		temp.push(arr1[i]);
		i++;
	}

	while (j < arr2.length) {
		temp.push(arr1[j]);
		j++;
	}

	for (let k = start; k <= end; k++) {
		arr[k] = temp[k - start];
	}

	return arr;
};

const mergeSort = (arr, start, end) => {
	if (start >= end) {
		return;
	}
	const mid = Math.floor((start + end) / 2);
	mergeSort(arr, start, mid);
	mergeSort(arr, mid + 1, end);
	return merge(arr, start, mid, end);
};

const arr = [5, 2, 3, 1];
const start = 0;
const end = arr.length - 1;
console.log(mergeSort(arr, start, end));
