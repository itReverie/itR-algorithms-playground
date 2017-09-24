/*
there is a function rand7() that generates numbers from 1-7
Use that function to generate rand5() which returns numbers from 1-5
* */

function rand7(){

    //Return values from max 7 to min 1 inclusive
    return Math.floor(Math.random() * (7 - 1 + 1)) + 1;
}

console.log(rand7());

function rand5(){}