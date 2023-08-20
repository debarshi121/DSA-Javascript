const isHappy = (num) => {
	const set = new Set();
	let sum = 0;
	while (sum !== 1) {
		let n = num;
		let rem;
		while (n > 0) {
			rem = n % 10;
			n = Math.floor(n / 10);
			sum += rem * rem;
		}

		if (set.has(sum)) {
			break;
		} else {
			set.add(sum);
			num = sum;
			sum = 0;
		}
	}
	return sum === 1;
};

console.log(isHappy(19));
console.log(isHappy(2));
console.log(isHappy(13));
