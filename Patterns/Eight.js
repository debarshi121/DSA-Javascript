/*
Pattern

*********
 *******
  *****
   ***
    *

*/

const n = 5;

for(let i=1; i<=n; i++){
    let str = "";
    
    for(let j=1; j<i; j++){
        str += " ";
    }

    for(let k=i; k<=n*2-i; k++){
        str += "*";
    }

    for(let j=1; j<i; j++){
        str += " ";
    }

    console.log(str);
}