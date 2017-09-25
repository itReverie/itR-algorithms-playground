
//Function that returns the words in a text
function listOfFWordsInText(text) {

    let start = 0;
    let dictionary = new Map();

    text = text.toLowerCase();
    for (let end = 1; end <= text.length; end++) {
        let nextChar = text[end + 1];
        if ((nextChar === ' ') || (end === text.length)) {
            let word = text.substring(start, end + 1);
            //Dealing with punctuations
            if (word.trim().length >= 1) {
                let cleanWord = cleanPunctutation(word.trim());
                if (cleanWord !== null) {
                    if (!dictionary.has(cleanWord) && (cleanWord.length >= 1)) {
                        dictionary.set(cleanWord,{times:1});
                    }
                    else {
                        let currentValue=dictionary.get(cleanWord);
                        let newValue=currentValue.times+1;
                        dictionary.set(cleanWord,{times:newValue});
                    }
                    start = end + 2;
                }
            }
        }
    }
    return dictionary;
}

//This function returns the word without punctuation
function cleanPunctutation(word) {

    // Some of the punctuations
    let regex = /([^ .,:;!?()/ª\º \n]+)|([.,:;!?()/ª\º \n]+)/gi
    let wordWithPunctuation = word.match(regex);

    if (wordWithPunctuation !== null && wordWithPunctuation.length === 1) {
        //Check that it is not a number
        if (containsJustLetters(word)) {
            //There are not punctuations and it is not a number, just return the word
            return word;
        }
    }

    //The word could be among punctuations so we make sure to extract just the word. For example (Hello)
    for (let i = 0; i < wordWithPunctuation.length; i++) {
        if (wordWithPunctuation[i].length > 1) {
            //It is not a number so return the word
            if (containsJustLetters(wordWithPunctuation[i])) {
                return wordWithPunctuation[i];
            }
        }
    }
    return null;
}

//Checking that the word has just letters
function containsJustLetters(word)
{
    let justLetters = /^[a-zA-Z]+$/.test(word);
    return justLetters;
}

//Convert a map into an object I can use for JSON
function convertMapIntoValidObject(map)
{
    let obj = Object.create(null);
    for(let[key, value] of map){
        obj[key] = value.times;
    }

    return obj;
}


//Function to save a file with the specified content at the specified file.
const fs = require("fs");
function SaveInFile(content, fileName) {

    return new Promise(function(resolve, reject) {
        fs.writeFile(fileName, content, 'utf-8', function(err) {
            if (err) {
                reject(err);
            }
            else {
                console.log(`The dictionary was created on the file: ${fileName}`);
                resolve(content);
            };
        });
    });
}


(function RunDictionary(content, fileName) {

    let dictionaryMap = listOfFWordsInText(content);

    let obj=convertMapIntoValidObject(dictionaryMap);

    console.log(dictionaryMap);
    SaveInFile(JSON.stringify(obj), fileName);

})('Run this text 100 to create an amazing dictionary 1/10 of w0rds. Run me! Run me!', './dictionary.json');

//'Run this text 100 to create an amazing dictionary of w0rds. Run me! Run me!'



///    Adult beavers have long flat tails that are about a foot long. Beavers slap their tails on the water surface as an alarm to alert the colony when they sense danger. Female beavers are larger than male beavers of the same age. Prior to European immigration there were over 60 million beavers in North America. Due primarily to over trapping beavers were an endangered species in the early part of the 20th Century. Beavers are very active on Pinterest and often are considered social media mavens. Tiny beavers (Microtheriomys brevirhinus) lived in Oregon 28 Million Years Ago. They were 1/10 the size of modern beavers.'));
