const num = 36;
const divisors = [];

for(let i=1; i<=Math.sqrt(num); i++){
    if(num % i === 0){
        divisors.push(i);
        let res = num / i;
        divisors.push(res);
    }
}

console.log(divisors);