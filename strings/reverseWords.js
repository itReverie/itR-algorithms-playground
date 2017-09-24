//Given a sentence as a string reverse it including spaces and everything.
// For example: "  the   sky is     blue    "
// Result: "blue     is     sky   the   "

// (function reverse(sentence) {
//     let end = sentence.length;
//     let reverseWord='';
//
//     for (let start = end; start >= -1; start--) {
//         let previousChar = sentence[start-1];
//         if ((previousChar === ' ') ||(start === 0) ) {
//             reverseWord += sentence.substring(start, end);
//             end=start;
//         }
//     }
//     return reverseWord;
// })("The   sky is blue");


//Function that returns the words in a text
function listOfFWordsInText(text) {
    //Using spaces as separators for words
    //Note: we need to deal with () and punctions later

    //There could be a couple of ways to solve this:
    // 1. reading each char which might be quite expensive
    // 2. Making substrings based on the spaces and then deal with the punctuations
    // I will go for the first approach
    let start = 0;
    let dictionary = [];

    text = text.toLowerCase();
    for (let end = 1; end < text.length; end++) {
        let nextChar = text[end + 1];
        if ((nextChar === ' ') || (end === text.length)) {
            let word = text.substring(start, end + 1);
            //Dealing with punctuations
            if (word.trim().length >= 1) {
                let cleanWord = cleanPunctutation(word.trim());
                if (cleanWord !== null) {
                    if (!dictionary[cleanWord] && (cleanWord.length >= 1)) {
                        dictionary[cleanWord] = 1;
                    }
                    else {
                        dictionary[cleanWord] += 1;
                    }
                    start = end + 2;
                }
            }
        }
    }
    return dictionary;
}


//If time permits I would add more testing on this function
//This function returns the word withouth punctuation
function cleanPunctutation(word) {

    // Some of the punctuations
    let regex = /([^ .,:;!?()/ª\º \n]+)|([.,:;!?()/ª\º \n]+)/gi
    let wordWithPunctuation = word.match(regex);

    if (wordWithPunctuation !== null && wordWithPunctuation.length === 1) {
        //Check that it is not a number
        if (!containsNumber(word)) {
            //There are not punctuations, just return the word
            return word;
        }
    }

    for (let i = 0; i < wordWithPunctuation.length; i++) {
        if (wordWithPunctuation[i].length > 1) {
            //It is a word
            if (!containsNumber(wordWithPunctuation[i])) {
                return wordWithPunctuation[i];
            }
        }
    }

    return null;
}


//Evaluates if a word contains a number
function containsNumber(word) {
    let hasNumber = /\d/.test(word)
    return hasNumber;
}


function SaveInFile(content)
{
    let fs = require("fs");
    let fileContent = "hello";

    fs.writeFile("./object.json", JSON.stringify(content), (err) => {
        if (err) {
            console.error(err);
            return;
        };
        console.log("File has been created");
    });
}


function RunDictionary(content)
{
    let dictionary= listOfFWordsInText(content);

    SaveInFile(dictionary);
}

console.log(listOfFWordsInText('    Adult beavers have long flat tails that are about a foot long. Beavers slap their tails on the water surface as an alarm to alert the colony when they sense danger. Female beavers are larger than male beavers of the same age. Prior to European immigration there were over 60 million beavers in North America. Due primarily to over trapping beavers were an endangered species in the early part of the 20th Century. Beavers are very active on Pinterest and often are considered social media mavens. Tiny beavers (Microtheriomys brevirhinus) lived in Oregon 28 Million Years Ago. They were 1/10 the size of modern beavers.'));//