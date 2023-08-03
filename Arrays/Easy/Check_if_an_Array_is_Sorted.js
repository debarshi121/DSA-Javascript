const arr = [5, 4, 6, 7, 8];

let sorted = true;

for (let i = 1; i < arr.length; i++) {
	if (arr[i] < arr[i - 1]) {
		sorted = false;
		break;
	}
}

console.log(sorted);