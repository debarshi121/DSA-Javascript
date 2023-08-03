const arr = [1, 2, 3, 4, 5];
const num = 3;

let index = -1;

for (let i = 0; i < arr.length; i++) {
	if (arr[i] === num) {
		index = i;
		break;
	}
}

console.log(index);