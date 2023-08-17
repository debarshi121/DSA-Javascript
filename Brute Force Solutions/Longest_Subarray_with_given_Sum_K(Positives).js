const findLongest = (a, k) => {
	let max = 0;
	for (let i = 0; i < a.length; i++) {
		let sum = 0;
		for (let j = i; j < a.length; j++) {
			sum += a[j];
			if (sum == k) {
				max = Math.max(max, j - i + 1);
			}
			if (sum > k) {
				break;
			}
		}
	}
	return max;
};

const a = [1, 2, 3, 1, 1, 1, 1];
const k = 3;

console.log(findLongest(a, k));