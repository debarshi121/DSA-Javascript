let num = 1634;
const temp = num;
let res = 0;
const digits = num.toString().length;

while(num > 0){
    rem = num % 10;
    res += Math.pow(rem, digits);
    num = Math.floor(num / 10);
}

if(temp === res){
    console.log('Armstrong');
} else {
    console.log('Not Armstrong');
}