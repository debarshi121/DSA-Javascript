/*
Pattern

E               4
D E             3 4
C D E           2 3 4
B C D E         1 2 3 4
A B C D E       0 1 2 3 4

*/

const n = 5;

for (let i = 1; i <= n; i++) {
	let str = "";

	for (let j = n-i; j > n; j--) {
		// str += String.fromCharCode(j + 65);
        console.log(j)
	}

	console.log(str);
}