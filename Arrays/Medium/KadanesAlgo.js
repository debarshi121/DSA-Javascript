// Maximum subarray sum
const findSum = (nums) => {
    let maxSum = nums[0];
    let currentSum = 0;

    for(let i=0; i<nums.length; i++){
 
        currentSum += nums[i];

        maxSum = Math.max(maxSum, currentSum);

        if(currentSum < 0)
            currentSum = 0;
        
    }

    return maxSum;
}


console.log(findSum([-2]));
console.log(findSum([-2,-1]));
console.log(findSum([5,4,-1,7,8]));
console.log(findSum([-2,1,-3,4,-1,2,1,-5,4]));