/*
Pattern

ABCDE
ABCD
ABC
AB
A

*/

const n = 5;

for (let i = 1; i <= n; i++) {
	let str = "";
	for (let j = 0; j < n-i+1; j++) {
		str += String.fromCharCode(j + 65);
	}

	console.log(str);
}