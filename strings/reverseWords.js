//Given a sentence as a string reverse it including spaces and everything.
// For example: "  the   sky is     blue    "
// Result: "blue     is     sky   the   "

(function reverse(sentence) {
    let end = sentence.length;
    let reverseWord='';

    for (let start = end; start >= -1; start--) {
        let previousChar = sentence[start-1];
        if ((previousChar === ' ') ||(start === 0) ) {
            reverseWord += sentence.substring(start, end);
            end=start;
        }
    }
    return reverseWord;
})("The   sky is blue");

