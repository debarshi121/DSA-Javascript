// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

const moveZeros = (arr) => {
	let i = 0;
	for (let j = 1; j < arr.length; j++) {
		if (arr[i] === 0) {
			if (arr[j] !== 0) {
				arr[i] = arr[j];
				arr[j] = 0;
				i++;
			}
		} else {
            i++;
        }
	}
	return arr;
};

console.log(moveZeros([0, 1, 0, 3, 12]));
