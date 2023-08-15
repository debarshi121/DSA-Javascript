// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[1,4,7],[2,5,8],[3,6,9]]

const transpose = (matrix) => {
	const transposeMatrix = [];
	for (let row = 0; row < matrix[0].length; row++) {
		const newRow = [];
		for (let col = 0; col < matrix.length; col++) {
			newRow.push(matrix[col][row]);
		}
		transposeMatrix.push(newRow);
	}
	return transposeMatrix;
};

console.log(
	transpose([
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	])
);

console.log(
	transpose([
		[1, 2, 3],
		[4, 5, 6],
	])
);
