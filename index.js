

    function solveProblem() {
        var inputCharacters = document.getElementById('inputCharacters').value;
        document.getElementById('result').innerHTML=hasPalindromePermutation(inputCharacters);
    }

    ///The problem is solved using a HASHTABLE
    function hasPalindromePermutation(theString) {

        // track characters we've seen an odd number of times
        var unpairedCharacters = new Set();

        for (var i = 0; i < theString.length; i++) {
            var char = theString[i];

            if (unpairedCharacters.has(char)) {
                unpairedCharacters.delete(char);
            } else {
                unpairedCharacters.add(char);
            }
        }

        // the string has a palindrome permutation if it
        // has one or zero characters without a pair
        return unpairedCharacters.size <= 1;
    }


