 //What is the output
//  var outputScopes= function()
// {
//     let a = 1, b = 2, c = 3;
//     {
//         let b = 10;
//         {
//             c = 20;
//         }
//     }
//     console.log( a + b + c ); //
// }
//
// var asciiToChar= function ()
//  {
// //write the words
//      let result = asciiArrToString([72, 101, 108, 108, 111, 33]); // "Hello!"
//      console.log(result);
//      result = asciiArrToString([52, 50]); // "42"
//      console.log(result);
//
//      function asciiArrToString(array) {
//          let result = '';
//          for (let i = 0; i < array.length; i++) {
//              result += String.fromCharCode(array[i]);
//          }
//          return result;
//      }
//  }
//
//  var slicingWords= function()
//  {
//      //Playing with slices
//      let word= 'Ana';
//      let word1= word.slice(0, 0);
//      let word2= 'A';
//      let word3=  word.slice(0);
//
//      console.log(word1);
//      console.log(word2);
//      console.log(word3);
//  }

 function isWordWithPunctutation(word="hola)"){

     let regex = /([^ .,:;!?()]+)|([.,:;!?()]+)/gi
     let wordWithPunctuation = word.match(regex);
     for(let i=0; i< wordWithPunctuation.length ; i++)
     {
         if(wordWithPunctuation[i].length>1)
         {
             //It is a word
             return wordWithPunctuation[i];
         }
     }
 }

console.log(isWordWithPunctutation());


 //Check that it is not a number
 let regexNumbers =/^[\d\s]+$/
 let wordWithNumbers = word.match(regexNumbers);

 let x= parseInt(word);
 console.log(x);
