/*
Pattern

   A
  ABA
 ABCBA
ABCDCBA

*/

const n = 4;

for (let i = 1; i <= n; i++) {
	let str = "";

	for (let j = 1; j <= n - i; j++) {
		str += " ";
	}

	for (let j = 0; j < i; j++) {
		str += String.fromCharCode(j + 65);
	}

	let rev = "";

	for (let j = str.length - 2; j >= 0; j--) {
		rev += str.charAt(j);
	}

	str += rev;

	console.log(str);
}