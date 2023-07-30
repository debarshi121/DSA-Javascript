const helper = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		let swap = false;
		for (let j = 0; j < arr.length - i + 1; j++) {
			if (arr[j] > arr[j + 1]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
				swap = true;
			}
		}
		if(swap == false){
			break;
		}
	}
	return arr;
};

console.log(helper([64, 34, 25, 12, 22, 11, 90]));