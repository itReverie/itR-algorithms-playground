 //What is the output
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

//write the words
let result=asciiArrToString([72, 101, 108, 108, 111, 33]); // "Hello!"
console.log(result);
 result=asciiArrToString([52, 50]); // "42"
console.log(result);
function asciiArrToString(array){
    let result='';
    for(let i=0; i < array.length; i++)
    {
        result+=String.fromCharCode(array[i]);
    }
    return result;
}