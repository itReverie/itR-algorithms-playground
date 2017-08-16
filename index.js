

    function solveProblem() {
        var inputCharacters = document.getElementById('inputCharacters').value;
        document.getElementById('result').innerHTML=isAnyPermutationPalindrome(inputCharacters);
    }

    function isAnyPermutationPalindrome(word)
    {
        var wordCharacters=Array.from(word);
        var arrayOfLetters=[];
        var numberOfUnevenLetters=0;

        wordCharacters.forEach(function(letter){
             (arrayOfLetters.hasOwnProperty(letter)) ? arrayOfLetters[letter] = arrayOfLetters[letter] + 1
                                                     : arrayOfLetters[letter] = 1;
            //console.log('key:'+ letter +' value: '+arrayOfLetters[letter]);

         });


        for(var key in arrayOfLetters)
        {
             //console.log(key);
            if(numberOfUnevenLetters > 1){
                break;
            }

            //if(arrayOfLetters[key]) {
                //If it is uneven
                if(arrayOfLetters[key] % 2 !== 0)
                {
                    numberOfUnevenLetters +=1;
                }
            //}
        }


        return (numberOfUnevenLetters > 1) ? false : true;
    }

