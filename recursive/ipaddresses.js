{
    function getPermutationsPerSet(set, permutationOfAllSetsExceptFirst) {

        // base case
        if(set.length<=1)
        {
            return new Set(set);
        }

        var firstSet = set.slice(0, 3);
        var combinations = set.slice(3, set.length + 1);



        if (combinations === undefined) {
            return new Set(set);
        }

        //Initialize
        permutationsFirstSet = getPermutationsPerSet(combinations, '');

        var permutations =[];

        //for (let k =0 ; k< permutationOfAllSetsExceptFirst.length; k++){
        permutationsFirstSet.forEach(
            function getPermutationsPerSet(set, combinations) {
                //console.log('call to get permutations for:     '+permutationOfAllSetsExceptFirst);
                for (var position = 0; position <= set.length; position++) {
                    //console.log('permutationOfAllSetsExceptFirst  '+permutationOfAllSetsExceptFirst);
                    //console.log(permutationOfAllSetsExceptFirst.slice(0, position));
                    //console.log(lastChar);
                    //console.log(permutationOfAllSetsExceptFirst.slice(position));
                    var permutation = set.slice(0, position)
                        + firstSet
                        + set.slice(position);

                    if (parseInt(permutation) <= 255) {
                        console.log('permutation: ' + permutation);
                        permutations.add(permutation+'.'+combinations);
                    }

                }
            })
        //}//for permutations

        console.log(permutations);
        return permutations;
    }



    getPermutationsPerSet('21325513465', '');
}
