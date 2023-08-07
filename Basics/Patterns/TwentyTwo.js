/*
Input: 3
Output:

3 3 3 3 3 
3 2 2 2 3 
3 2 1 2 3 
3 2 2 2 3 
3 3 3 3 3

*/

const n = 3;

for (let i = 1; i < n * 2; i++) {
	let str = "";
	if (i == 1 || i == n * 2 - 1) {
		for (let j = 1; j < n * 2; j++) {
			str += n;
		}
	} else {
		for (let j = 1; j < n * 2; j++) {
			if (j == 1 || j == n * 2 - 1) {
                str += n;
			} else {
                
            }
		}
	}

	console.log(str);
}
