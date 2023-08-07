/*
Input: 3
Output:

******
**  **
*    *
*    *
**  **
******

Input: 6
Output:

************
*****  *****
****    ****
***      ***
**        **
*          *
*          *
**        **
***      ***
****    ****
*****  *****
************

*/

const n = 5;

for (let i = 0; i < n; i++) {
	let str = "";
	for (let j = n - i; j >= 1; j--) {
		str += "*";
	}
	for (let j = 0; j < i * 2; j++) {
		str += " ";
	}
	for (let j = n - i; j >= 1; j--) {
		str += "*";
	}
	console.log(str);
}
for (let i = 0; i < n; i++) {
	let str = "";
	for (let j = 0; j < i + 1; j++) {
		str += "*";
	}
	for (let j = 0; j < 2 * n - 2 - i * 2; j++) {
		str += " ";
	}
	for (let j = 0; j < i + 1; j++) {
		str += "*";
	}
	console.log(str);
}
