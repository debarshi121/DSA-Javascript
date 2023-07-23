/*
Pattern
*
**
***
****
*****
****
***
**
*

*/

const n = 5;

for(let i=1; i<=n*2-1; i++){
    let str="";
    
    if(i<=5){
        for(let j=1; j<=i; j++){
            str += "*";
        }
    } else {
        for(let j=1; j<=n*2-i; j++){
            str += "*";
        }
    }

    console.log(str);
}