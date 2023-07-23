/*
Pattern (Binary)

1
0 1
1 0 1
0 1 0 1
1 0 1 0 1

*/

const n = 5;

for(let i=1; i<=n; i++){
    let start = i%2==0 ? 1 : 0;
    let str="";
    
    for(let j=1; j<=i; j++){
        if(start==0){
            str += 1;
            str += " ";
            start = 1;
        } else {
            str += 0;
            str += " ";
            start = 0;
        }
    }

    console.log(str);
}