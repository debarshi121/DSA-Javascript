const arr = [13, 46, 24, 52, 20, 9];

for (let i = 1; i < arr.length; i++) {
	let pos = arr[i];
	let j = i - 1;
	while (j >= 0) {
		if (pos < arr[j]) {
			let temp = arr[j + 1];
			arr[j + 1] = arr[j];
			arr[j] = temp;
		} else{
            break;
        }
        j--;
	}
}

console.log(arr);