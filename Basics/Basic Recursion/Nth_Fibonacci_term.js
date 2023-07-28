// Input: N = 6
// Output:8

const printFibo = (n) => {
	if (n === 0) {
		return 0;
	}
	if (n === 1) {
		return 1;
	}

	return printFibo(n - 1) + printFibo(n - 2);
};

console.log(printFibo(6));