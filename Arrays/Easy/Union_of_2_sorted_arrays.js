const findUnion = (arr1, arr2) => {
	let i = 0;
	let j = 0;
	const set = new Set();

	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] <= arr2[j]) {
			if (!set.has(arr1[i])) {
				set.add(arr1[i]);
			}
			i++;
		} else {
			if (!set.has(arr1[j])) {
				set.add(arr2[j]);
			}
			j++;
		}
	}

    while (i < arr1.length) {
		if (!set.has(arr1[i])) {
            set.add(arr1[i]);
        }
        i++;
	}

    while (j < arr2.length) {
		if (!set.has(arr2[j])) {
            set.add(arr1[j]);
        }
        j++;
	}

	return Array.from(set);
};

const arr1 = [1, 2, 3, 4, 6];
const arr2 = [2, 3, 5];

console.log(findUnion(arr1, arr2));
