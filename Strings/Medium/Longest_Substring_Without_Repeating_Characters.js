// https://leetcode.com/problems/longest-substring-without-repeating-characters/

const findLongest = (s) => {
    let left = 0;
    let right = 0;
    const map = new Map();
    let max = 0;

    while(right < s.length){
        if(!map.has(s[right])){
            map.set(s[right], right);
            right++;
        }
        max = Math.max(max, right-left+1);
    }

    return max;
}

console.log(findLongest("abcabcbb"));