const helper = (arr) => {
    const map = new Map();

    for(let i=0; i<arr.length; i++){
        if(map.has(arr[i])){
            map.set(arr[i], map.get(arr[i])+1);
        } else {
            map.set(arr[i], 1);
        }
    }

    return map;
}


console.log(helper([10,5,10,15,10,5]));