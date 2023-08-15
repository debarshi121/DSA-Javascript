/*
input: [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

Output: [
    [7,4,1],
    [8,5,2],
    [9,6,3]
]
*/

const rotateMatrix = (matrix) => {
	const rotatedmatrix = [];

	for (let row = 0; row < matrix.length; row++) {
		rotatedmatrix.push([]);
	}

	for (let col = 0; col < matrix.length; col++) {
		let index = 0;
		for (let row = matrix.length - 1; row >= 0; row--) {
			rotatedmatrix[col][index] = matrix[row][col];
			index++;
		}
	}

	for (let row = 0; row < rotatedmatrix.length; row++) {
		for (let col = 0; col < rotatedmatrix.length; col++) {
			matrix[row][col] = rotatedmatrix[row][col];
		}
	}

	return matrix;
};

console.log(
	rotateMatrix([
		[5, 1, 9, 11],
		[2, 4, 8, 10],
		[13, 3, 6, 7],
		[15, 14, 12, 16],
	])
);
