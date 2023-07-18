const findSub = (arr) => {
    if(!arr.length) return 0;

    const set = new Set(arr);
    let maxLength = 1;
    for(let i=0; i<arr.length; i++){
        let inc = 1;
        while(set.has(arr[i]+inc)) {
            inc++;
        }
        if(inc>maxLength){
            maxLength = inc;
        }
    }

    return maxLength;
}


console.log(findSub([0,3,7,2,5,8,4,6,0,1]));
console.log(findSub([1, 2, 5, 6, 7]));
console.log(findSub([]));