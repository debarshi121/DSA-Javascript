/*
Input: 3
Output:

3 3 3 3 3 
3 2 2 2 3 
3 2 1 2 3 
3 2 2 2 3 
3 3 3 3 3

*/

const helper = (n) => {
	for (let i = 0; i < n * 2 - 1; i++) {
		let str = "";
		for (let j = 0; j < n * 2 - 1; j++) {
			let top = i;
			let left = j;
			let bottom = 2 * n - 2 - i;
			let right = 2 * n - 2 - j;

			let min = Math.min(top, left, bottom, right);
			str += n - min + " ";
		}
		console.log(str);
	}
};

helper(3);
