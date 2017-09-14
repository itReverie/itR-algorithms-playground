var resultLoop= fibonacciLoop(5);
console.log(resultLoop);
var resultMemo=fibonacciMemoization(5, {});
console.log(resultMemo);


// Time Complexity  O(n)
// Space complexity O(1)
function fibonacciLoop(n) {

    // Validation. Edge cases:
    if (n < 0) {
        throw new Error('Index was negative. No such thing as a negative index in a series.');
    } else if (n === 0 || n === 1) {
        return n;
    }

    //Initialization
    // we'll be building the fibonacci series from the bottom up
    // so we'll need to track the previous 2 numbers at each step
    var prevPrev = 0,// 0th fibonacci
     prev = 1,      // 1st fibonacci
     current;       // Declare current

    // To get nth fibonacci ... do n-1 iterations. change the i <= n to i < n
    for (var i = 1; i <= n; i++) {
        current = prev + prevPrev;
        prevPrev = prev;
        prev = current;
    }

    return current;
}

// Time Complexity  2 O(n)
// Space complexity   O(n)
function fibonacciMemoization(num, memo) {
    memo = memo || {};

    if (memo[num]) return memo[num];
    if (num <= 1) return 1;

    return memo[num] = fibonacciMemoization(num - 1, memo) + fibonacciMemoization(num - 2, memo);
}
