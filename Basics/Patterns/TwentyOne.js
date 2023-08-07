/*
Input: 3
Output:

***
* *
***

*/

const n = 6;

for (let i = 1; i <= n; i++) {
	let str = "";
	if (i === 1 || i === n) {
		for (let j = 1; j <= n; j++) {
			str += "*";
		}
	} else {
		str += "*";
		for (let j = 1; j <= n - 2; j++) {
			str += " ";
		}
		str += "*";
	}
	console.log(str);
}
