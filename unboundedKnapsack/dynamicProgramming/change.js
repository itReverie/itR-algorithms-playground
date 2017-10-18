//Given a set of coins [1,2,3]
//and an amount to reach
//provide the number(just the number) of the possible combinations
//Result= 4
// O(n*m)
//NOTE: notice that we are asked for permutations not combinations.
//In the combinations we do not care about the order so it is usually smaller than the permutations and we can memoize
//Note: look at your notes and the table in regards dynamic programming.

//If we need to display all possible combinations we might need to use recursion.
//As in permutations we are interested in all the possible combinations. Memoization is still possible but with recursion.

function changePossibilitiesBottomUp(amount, denominations) {

    // intialize an array of zeros with indices up to amount
    var waysOfDoingNcents = [];
    //as any dynamic programming problem we do a bottom-up apprach hence we need to initialize our data
    for (var i = 0; i <= amount; i++) {
        waysOfDoingNcents[i] = 0;
    }
    waysOfDoingNcents[0] = 1;

    denominations.forEach(function(coin) {
        for (var higherAmount = coin; higherAmount <= amount; higherAmount++) {

            //We are using memoization making reference to the dynamic programming table
            var higherAmountRemainder = higherAmount - coin;
            waysOfDoingNcents[higherAmount] += waysOfDoingNcents[higherAmountRemainder];
        }
    });

    console.log(waysOfDoingNcents);
    return waysOfDoingNcents[amount];
}

//Refer to the dynamic programing table and ho

changePossibilitiesBottomUp(4,[1,2,3]);