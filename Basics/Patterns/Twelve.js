/*
Pattern

1      1
12    21
123  321
12344321

*/

const n = 5;

for(let i=1; i<=n; i++){
    let str = '';
    for(let j=1; j<=i; j++){
        str += j;
    }
    for(let j=1; j<=n-i; j++){
        str += " ";
    }

    let rev = '';
    
    for(let j=str.length-1; j>=0; j--){
        rev += str.charAt(j);
    }

    str += rev;

    console.log(str);
}