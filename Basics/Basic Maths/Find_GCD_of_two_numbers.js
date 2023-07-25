let num1 = 100;
let num2 = 75;

let gt = 1;

for (let i = 1; i <= Math.min(num1, num2); i++) {
	if (num1 % i === 0 && num2 % i === 0) {
		gt = i;
	}
}

console.log(gt);
