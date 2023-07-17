const hashMap = new Map();

const findIndexes = (arr, target) => {
    for(let i=0; i<arr.length-1; i++){
        let val = target - arr[i];
        if(hashMap.has(val)){
            return [i, hashMap.get(val)];
        } else {
            hashMap.set(arr[i], i)
        }
    }
    return [];
}

console.log(findIndexes([2, 5, 7, -4, -2, 6], 3));