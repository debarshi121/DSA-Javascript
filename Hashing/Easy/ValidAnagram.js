const isAnagram = (s, t) => {
	if (s.length === t.length) {
		const map1 = new Map();
		const map2 = new Map();

		for (let i of s) {
			if (map1.has(i)) {
				map1.set(i, map1.get(i) + 1);
			} else {
				map1.set(i, 1);
			}
		}

		for (let i of t) {
			if (map2.has(i)) {
				map2.set(i, map2.get(i) + 1);
			} else {
				map2.set(i, 1);
			}
		}

		for (let i of map2.keys()) {
			if (map1.get(i) === undefined || map1.get(i) !== map2.get(i)) {
				return false;
			}
		}

		return true;
	} else {
		return false;
	}
};

console.log(isAnagram("anagram", "nagaram"));
