

    function solveProblem() {
        var inputCharacters = document.getElementById('inputCharacters').value;
        document.getElementById('result').innerHTML=isAnyPermutationPalindrome(inputCharacters);
    }

    var letterConcurrency={
        concurrency:0,
        letter:'',
        isEven: function (){this.concurrency %2 ===0 ? true : false}
    };

    function isAnyPermutationPalindrome(word)
    {
        var wordCharacters=Array.from(word);
        var arrayOfLetters=[];

        wordCharacters.forEach(function(letter){

            //console.log(letter);
             if(arrayOfLetters.hasOwnProperty(letter))
             {
                 arrayOfLetters[letter] = arrayOfLetters[letter]+1;
             }
             else
             {
                 //  var letterCurrency= new Object();
                 //  letterCurrency.letter = letter;
                 //  letterCurrency.concurrency = 1;
                 //
                 // arrayOfLetters[letter] = Object.create(letterCurrency);
                 arrayOfLetters[letter] = 1;
             }

           // console.log('key:'+ letter +' value: '+arrayOfLetters[letter]);

         });

        var numberOfUnevenLetters=0;


        for(var key in arrayOfLetters)
        {
            if(arrayOfLetters[key]) {

                console.log('K: ' + key +' V:'+ arrayOfLetters[key]);

                //If it is uneven
                if(arrayOfLetters[key] % 2 !== 0)
                {
                    numberOfUnevenLetters +=1;
                }
            }
        }


        return (numberOfUnevenLetters > 1) ? false : true;
    }

