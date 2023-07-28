const helper = (n) => {
	if (n == 1) return 1;
	return n + helper(n - 1);
};

console.log(helper(10));