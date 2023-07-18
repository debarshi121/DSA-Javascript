const findAns = (arr) => {
    let longest = 1;
    let count = 1;
    let previousSmall = -Infinity;

    for(let i=0; i<arr.length; i++){

        if(arr[i]-1 > previousSmall){
            count = 1;
            previousSmall = arr[i];
        } else if(arr[i]-1 == previousSmall){
            count++;
            previousSmall = arr[i];
        }

        longest = Math.max(count, longest);
    }
    return longest;
}

console.log(findAns([1, 2, 5, 6, 7]));
console.log(findAns([1, 2, 4, 9, 10, 11, 12, 13]));
console.log(findAns([1, 1, 1, 2, 3, 3, 4, 9, 10, 11, 11, 12, 13, 14, 14, 15]));