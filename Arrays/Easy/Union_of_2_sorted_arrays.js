const findUnion = (arr1, arr2) => {
	let i = 0;
	let j = 0;
	let k = 0;
	const union = [];

	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] <= arr2[j]) {
			if (k === 0 || union[k - 1] !== arr1[i]) {
				union.push(arr1[i]);
				k++;
			}
			i++;
		} else {
			if (k === 0 || union[k - 1] !== arr2[j]) {
				union.push(arr2[j]);
				k++;
			}
			j++;
		}
	}

	while (i < arr1.length) {
		if (k === 0 || union[k - 1] !== arr1[i]) {
			union.push(arr1[i]);
			k++;
		}
		i++;
	}

	while (j < arr2.length) {
		if (k === 0 || union[k - 1] !== arr2[j]) {
			union.push(arr2[j]);
			k++;
		}
		j++;
	}

	return union;
};

const arr1 = [1, 2, 3, 4, 6];
const arr2 = [2, 3, 5];

console.log(findUnion(arr1, arr2));
