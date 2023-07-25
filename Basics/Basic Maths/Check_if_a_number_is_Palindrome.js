let n = 1214;
let num = n;
let rev = 0; //3

while (n > 0) {
	rem = n % 10;
	n = Math.floor(n / 10);
	rev = rev * 10 + rem;
}
if(rev===num){
    console.log('Palindrome');
} else {
    console.log('Not Palindrome');
}