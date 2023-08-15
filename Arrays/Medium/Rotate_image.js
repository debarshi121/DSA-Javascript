// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]

const rotate = (matrix) => {
	for (let row = 0; row < matrix.length; row++) {
		for (let col = row + 1; col < matrix.length; col++) {
			let temp = matrix[col][row];
			matrix[col][row] = matrix[row][col];
			matrix[row][col] = temp;
		}
	}

	for (let row = 0; row < matrix.length; row++) {
		let left = 0;
		let right = matrix[row].length - 1;

		while (left < right) {
			let temp = matrix[row][left];
			matrix[row][left] = matrix[row][right];
			matrix[row][right] = temp;
			left++;
			right--;
		}
	}

	return matrix;
};

console.log(
	rotate([
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	])
);
