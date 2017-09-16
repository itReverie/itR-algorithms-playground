{
    var permutations = new Set();


    function getPermutationsPerSet(set) {
        // base case
        if (set.length <= 1) {
            return new Set(set);
        }

        var allCharsExceptLast = set.slice(0, -1);
        //console.log('allCharsExceptLast: ' + allCharsExceptLast);
        var lastChar = set.slice(-1);//[set.length - 1];
        //console.log('lastChar: ' + lastChar);



        //Initialize
        var permutationOfAllCharsExceptLast = getPermutationsPerSet(allCharsExceptLast);

        var permutations =new Set();

        permutationOfAllCharsExceptLast.forEach(
            function getPermutationsPerSet(permutationOfAllCharsExceptLast) {
                //console.log('call to get permutations for:     '+permutationOfAllCharsExceptLast);
                for (var position = 0; position <= allCharsExceptLast.length; position++) {
                    //console.log('permutationOfAllCharsExceptLast  '+permutationOfAllCharsExceptLast);
                    //console.log(permutationOfAllCharsExceptLast.slice(0, position));
                    //console.log(lastChar);
                    //console.log(permutationOfAllCharsExceptLast.slice(position));
                    var permutation = permutationOfAllCharsExceptLast.slice(0, position)
                        + lastChar
                        + permutationOfAllCharsExceptLast.slice(position);

                    if (parseInt(permutation) <= 255) {
                        //console.log('permutation: ' + permutation);
                        permutations.add(permutation);
                    }

                }
            }
        );

       // console.log(permutations);
        return permutations;
    }

    function getIps(string) {

        let set1, set2, set3, set4;
        let ipSet= new Set();

        //Divide the string in sets of 4
        set1 = string.slice(0, 3);
        //var resultSet1 = getPermutationsPerSet(set1);
        //ipSet=[...resultSet1];
        set2 = string.slice(3, 6);
        //var resultSet2 = getPermutationsPerSet(set2);
        //ipSet=[...resultSet2];
        set3 = string.slice(6, 9);
        //var resultSet3 = getPermutationsPerSet(set3);
        //ipSet=[...resultSet3];
        set4 = string.slice(9, string.length + 1);
        //var resultSet4 = getPermutationsPerSet(set4);
        //ipSet=[...resultSet1,...resultSet2,...resultSet3,...resultSet4];

        for(let i=0; i < string.length; i=i+3) {

            let getSet=string.slice(i,i+3);
            //console.log(getSet);
            var resultSet = getPermutationsPerSet(getSet);

            for (let item of resultSet) {

                // if(i===0)
                // {
                //     set1=item;
                // }
                // if(i===3)
                // {
                //     set2=item;
                // }
                // if(i===6)
                // {
                //     set3=item;
                // }
                // if(i===9)
                // {
                //     set4=item;
                // }

                //let combination = item + '.' + set2 + '.' + set3 + '.' + set4;
                //console.log(combination);


                ipSet.add(item);
            }
        }

        console.log(ipSet);

    }

    getIps('12325525525');
}
