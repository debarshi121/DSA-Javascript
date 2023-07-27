const printFibonacci = (n) => {
	let prev = 0; 
	let cur = 1; 

	console.log(prev);

	if (n > 0) {
		console.log(cur);
	}

	for (let i = 2; i <= n; i++) {
		let fibo = prev + cur;
		console.log(fibo); 
		prev = cur;
		cur = fibo;
	}
};

printFibonacci(5);