/*
Pattern

1
2 3
4 5 6
7 8 9 10
11 12 13 14 15

*/

const n = 5;

let last = 0;

for (let i = 1; i <= n; i++) {
	let str = "";
	for (let j = last + 1; j <= last + i; j++) {
		str += j;

		// Not include space at end
		if (j !== last + i) {
			str += " ";
		}
	}
	last += i;
	console.log(str);
}
