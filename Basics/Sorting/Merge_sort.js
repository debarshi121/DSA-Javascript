const merge = (arr, start, mid, end) => {
	const temp = [];
	while (start <= mid && mid + 1 <= end) {
		if (arr[start] <= arr[mid + 1]) {
			temp.push(arr[start]);
			start++;
		} else {
			temp.push(arr[mid + 1]);
			mid++;
		}
	}

	while (start <= mid) {
		temp.push(arr[start]);
		start++;
	}

	while (mid + 1 <= end) {
		temp.push(arr[mid + 1]);
		mid++;
	}

	for (let i = start; i <= end; i++) {
		arr[i] = temp[i];
	}
};

const mergeSort = (arr, start, end) => {
	if (start >= end) {
		return;
	}
	const mid = Math.floor((start + end) / 2);
	mergeSort(arr, start, mid);
	mergeSort(arr, mid + 1, end);
	merge(arr, start, mid, end);
};

const arr = [5, 2, 3, 1];
const start = 0;
const end = arr.length - 1;
mergeSort(arr, start, end)

for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}