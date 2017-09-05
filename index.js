

    function solveProblem() {
        var inputCharacters = document.getElementById('inputCharacters').value;
        document.getElementById('result').innerHTML=bits(5,1);//getPermutations(inputCharacters);
    }


    function bits(x, y)
    {
        console.log(x ^ y);
    }

    function testingStuff()
    {
  var a= add(5,4);
  console.log(a);
        var b= add(0,3);
        console.log(b);

    }


    function add (x, y)
    {
        x = x|| 10;
        console.log(x);
        y = y|| 10;
        console.log(y);

        return (x + y);
    }

    function testingSlice()
    {
        var text= "ana";
        return text.slice(1);
    }


    function getPermutations(string) {
       //console.log('input: '+string);
        // base case
        if (string.length <= 1) {
            return new Set(string);
        }

        var allCharsExceptLast = string.slice(0,-1);
        //console.log('allCharsExceptLast: '+allCharsExceptLast);
        var lastChar = string.slice(-1);//[string.length - 1];
        //console.log('lastChar: '+lastChar);

        //Initialize
        var permutationOfAllCharsExceptLast = getPermutations(allCharsExceptLast);

        var permutations = new Set();



        permutationOfAllCharsExceptLast.forEach(
            function getPermutations(permutationOfAllCharsExceptLast) {
                console.log('call to get permutations for:     '+permutationOfAllCharsExceptLast);
            for (var position = 0; position <= allCharsExceptLast.length; position++) {
                //console.log('permutationOfAllCharsExceptLast  '+permutationOfAllCharsExceptLast);
                //console.log(permutationOfAllCharsExceptLast.slice(0, position));
                //console.log(lastChar);
                //console.log(permutationOfAllCharsExceptLast.slice(position));
                var permutation = permutationOfAllCharsExceptLast.slice(0, position)
                                    + lastChar
                                    + permutationOfAllCharsExceptLast.slice(position);
                console.log('permutation: '+permutation);
                permutations.add(permutation);
            }
        });

        console.log(permutations);
        return permutations;
    }