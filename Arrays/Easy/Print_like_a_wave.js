const arr = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
	[10, 11, 12]
];

const row = 4;
const col = 3;

// 00 10 20 30 31 21 11 01 02 12 22 32 - Indexes of the output
const output = [];

for (let i = 0; i < col; i++) {
	if (i % 2 === 0) {
		for (let j = 0; j < row; j++) {
			output.push(arr[j][i]);
		}
	} 
	else {
		for (let j = row-1; j >= 0; j--) {
			output.push(arr[j][i]);
		}
	}
}

console.log(output);