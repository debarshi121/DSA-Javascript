let count = 1;

const helper = (n) => {
    if(count > n) return;

    console.log(count);
    count++;
    helper(n);
}

helper(5);