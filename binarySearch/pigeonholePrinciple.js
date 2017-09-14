var array = [1, 3];

var result = findMissing(array, 2);
console.log('the result is: ' + result);


// function findMissing(array, sizeArray) {
//
//     var total = (sizeArray+1) * ((sizeArray+2)/2);
//
//     console.log(total);
//
// }


function findMissing(a, sizeArray) {
    var i;
    var x1 = a[0];
    /* For xor of all the elements in array */
    var x2 = 1;
    /* For xor of all the elements from 1 to n+1 */

    for (i = 1; i < sizeArray; i++) {
        //console.log(parseInt(x1,2));
        //console.log(a[i]);
        x1 = x1 ^ a[i];
        console.log(x1.toString(2));
    }

    console.log('--------');

    for (i = 2; i <= sizeArray + 1; i++) {
        x2 = x2 ^ i;
        console.log(x2.toString(2));
    }

    var result = (x1 ^ x2);
    console.log(result.toString(2));
    return result;
}