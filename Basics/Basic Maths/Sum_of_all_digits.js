const findSum = (num) => {
    let sum = 0;
    let rem;
    while(num > 0){
        rem = num % 10; // 3
        num = Math.floor(num / 10); // 12
        sum += rem;
    }

    return sum;
}


console.log(findSum(101));

