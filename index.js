

    function solveProblem() {
        var inputCharacters = document.getElementById('inputCharacters').value;
        document.getElementById('result').innerHTML=isValid(inputCharacters);
    }



    //The keeping a simple array with key value will help us to avoid the iterator method (getKeyOfCloser)
    // var validOpenersMap = new Map();
    // validOpenersMap.set('{', '}');
    // validOpenersMap.set('[', ']');
    // validOpenersMap.set('(', ')');
    // //get me the opener for a closer
    // function getKeyOfCloser(closerCharacterFound) {
    //     var keyValue;
    //     validOpenersMap.forEach(function(value, key) {
    //         if (value === closerCharacterFound) {
    //             keyValue = key;
    //         }
    //     });
    //     return keyValue;
    // };


    function isValid(code) {

        //Dictionary of objects
        // var openersToClosers = [
        //     {key:'(', value: ')'},
        //     {key:'[', value: ']'},
        //     {key:'{', value: '}'}
        // ];

        //Dictionary
        var openersToClosers = {
            '(': ')',
            '[': ']',
            '{': '}'
        };

        var openers = new Set(['(', '[', '{']);
        var closers = new Set([')', ']', '}']);

        openersStack = [];

        for (var i = 0; i < code.length; i++) {
            var char = code.charAt(i);

            if (openers.has(char)) {
                openersStack.push(char);
            } else if (closers.has(char)) {
                if (!openersStack.length) {
                    return false;
                } else {
                    lastUnclosedOpener = openersStack.pop();

                    // if this closer doesn't correspond to the most recently
                    // seen unclosed opener, short-circuit, returning false

                    console.log(openersToClosers.hasOwnProperty(lastUnclosedOpener));
                    if (openersToClosers[lastUnclosedOpener] !== char) {
                        return false;
                    }
                }
            }
        }
        return openersStack.length === 0;
    }
