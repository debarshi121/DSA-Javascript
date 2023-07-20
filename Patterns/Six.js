/* 
Pattern -

12345
1234
123
12
1

*/

const n = 5;

for (let i = n; i >= 1; i--) {
	let str = "";
	for (let j = 1; j <= i; j++) {
		str += j;
	}
	console.log(str);
}
