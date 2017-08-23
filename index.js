

    function solveProblem() {
        var inputCharacters = document.getElementById('inputCharacters').value;
        document.getElementById('result').innerHTML=getPermutations(inputCharacters);
    }

    function getPermutations(string) {

        // base case
        if (string.length <= 1) {
            return new Set(string);
        }

        var allCharsExceptLast = string.slice(0, -1);
        console.log('allCharsExceptLast: '+allCharsExceptLast);
        var lastChar = string[string.length - 1];
        console.log('lastChar: '+lastChar);



        var permutationOfAllCharsExceptLast = getPermutations(allCharsExceptLast);

        var permutations = new Set();

        permutationOfAllCharsExceptLast.forEach(
            function getPermutations(permutationOfAllCharsExceptLast) {
            for (var position = 0; position <= allCharsExceptLast.length; position++) {
                var permutation = permutationOfAllCharsExceptLast.slice(0, position)
                                    + lastChar
                                    + permutationOfAllCharsExceptLast.slice(position);
                console.log(permutation);
                permutations.add(permutation);
            }
        });

        return permutations;
    }