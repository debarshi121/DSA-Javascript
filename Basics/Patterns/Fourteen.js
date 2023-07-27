/*
Pattern

A
AB
ABC
ABCD
ABCDE

*/

const n = 5;

for (let i = 1; i <= n; i++) {
    let str = '';
	for (let j = 0; j < i; j++) {
        str += String.fromCharCode(j+65)
    }

    console.log(str);
}