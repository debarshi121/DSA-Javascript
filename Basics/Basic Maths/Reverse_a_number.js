let n = 123;
let rev = 0; //3

while (n > 0) {
	rem = n % 10;
	n = Math.floor(n / 10);
	rev = rev * 10 + rem;
}

console.log(rev);