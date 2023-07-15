const arraySum = (arr) => {
   return calculateArraySum(arr, arr.length);
}

const calculateArraySum = (arr, n) => {
    if(n==0)
        return 0;
    return arr[n-1] + arraySum(arr, n-2);
}

console.log(arraySum([1,2,3,4,5]));

//5 + 