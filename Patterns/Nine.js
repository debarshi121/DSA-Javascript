/*
Pattern
    *
   ***
  *****
 *******
*********
*********
 *******
  *****
   ***
    *

*/

const n = 5;

for(let i=1; i<=n; i++){
    let str = "";
    
    for(let j=1; j<=n-i; j++){
        str += " ";
    }

    for(let k=1; k<=i*2-1; k++){ //
        str += "*";
    }

    for(let j=1; j<=n-i; j++){
        str += " ";
    }

    console.log(str);
}

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