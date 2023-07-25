const num = 1;
let count = 0;

if(num < 2){
    console.log("Not Prime");
    return;
}

for(let i=2; i<=Math.sqrt(num); i++){
    if(num % i === 0){
        count++;
    }
}

if(count===0){
    console.log("Prime");
} else {
    console.log("Not Prime");
}