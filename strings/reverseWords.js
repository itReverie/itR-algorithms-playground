//Given a sentence as a string reverse it including spaces and everything.
// For example: "  the   sky is     blue    "
// Result: "blue     is     sky   the   "

(function reverse(sentence) {
    let array = Array.from(sentence);
    let start=array.length-1,end = array.length-1;
    let reverseWord='';

    for (let i = array.length; i > 0; i--) {
        let currentChar = array[start] - array[end];
        if (currentChar === ' ') {
                end++;
        }
        else {
            reverseWord += sentence.slice(end, start+1);
            start=end-1;
            end=start;
        }
    }

    console.log(reverseWord);
    return reverseWord;
})("The     sky     is     blue");


