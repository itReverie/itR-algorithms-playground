 //What is the output
 var outputScopes= function()
{
    let a = 1, b = 2, c = 3;
    {
        let b = 10;
        {
            c = 20;
        }
    }
    console.log( a + b + c ); //
}

var asciiToChar= function ()
 {
//write the words
     let result = asciiArrToString([72, 101, 108, 108, 111, 33]); // "Hello!"
     console.log(result);
     result = asciiArrToString([52, 50]); // "42"
     console.log(result);

     function asciiArrToString(array) {
         let result = '';
         for (let i = 0; i < array.length; i++) {
             result += String.fromCharCode(array[i]);
         }
         return result;
     }
 }

 var slicingWords= function()
 {
     //Playing with slices
     let word= 'bc';
     let word1= word.slice(0, 1);
     //let word2= 'Ana';
     let word3=  word.slice(1);

     console.log(word1);
     //console.log(word2);
     console.log(word3);
 }



 var slicingArrays= function()
 {
     //Playing with slices
     let word= ['A','n','a'];
     let word1= word.slice(0, 0);
     //let word2= 'Ana';
     let word3=  word.slice(0);

     console.log(word1);
     //console.log(word2);
     console.log(word3);
 }


 var addingRemovingLetters= function()
 {
     //Playing with slices
     let word= 'abc';
     let letter = word[0];
     console.log(letter);

     //Removing
     word=  word.replace(letter,'');
     console.log(word);
     //Adding
     word += letter ;
     console.log(word);


     //Removing
     word=  word.replace('abc','');
     console.log(word);

 }




 //Evaluates if a word contains a number
 function containsNumber(word) {
     let hasNumber = /\d/.test(word)
     return hasNumber;
 }