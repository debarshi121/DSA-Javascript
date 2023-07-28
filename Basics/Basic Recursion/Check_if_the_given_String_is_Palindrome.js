const helper = (str, left, right) => {
    if(left === right) return true;
    
    if(str.charAt(left) === str.charAt(right)){
        return helper(str, left+1, right-1);
    } else {
        return false;
    }
}

const checkPalindrome = (str) => {
    return helper(str, 0, str.length-1);
}

console.log(checkPalindrome('TAKE U FORWARD'));