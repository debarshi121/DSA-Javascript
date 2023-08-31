// https://leetcode.com/problems/longest-substring-without-repeating-characters/

const findLongest = (s) => {
    let left = 0;
    let right = 0;
    const set = new Set();
    let max = 0;

    while(right < s.length){
        if(!set.has(s[right])){
            set.add(s[right]);
            max = Math.max(max, right-left+1);
            right++;
        } else {
            left++;
            right = left;
            set.clear();
        }
    }

    return max;
}

console.log(findLongest("dvdf"));