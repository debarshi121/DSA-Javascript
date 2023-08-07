/*
Input: 3
Output:

*    *
**  **
******
**  **
*    *

*/

const n = 3;

for (let i = 1; i <= n - 1; i++) {
	let str = "";
	for (let j = 1; j <= i; j++) {
		str += "*";
	}
	for (let j = 1; j <= n * 2 - i * 2; j++) {
		str += " ";
	}
	for (let j = 1; j <= i; j++) {
		str += "*";
	}
	console.log(str);
}
let str = "";
for (let i = 1; i <= n * 2; i++) {
	str += "*";
}
console.log(str);
for (let i = 1; i <= n - 1; i++) {
	let str = "";
	for (let j = n - i; j > 0; j--) {
		str += "*";
	}
	for (let j = 1; j <= i * 2; j++) {
		str += " ";
	}
	for (let j = n - i; j > 0; j--) {
		str += "*";
	}
	console.log(str);
}
