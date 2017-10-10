var array = [1, 2, 3, 4, 1, 5];

var result = findRepeat(array);
console.log('the result is: '+result);


function findRepeat(theArray) {

    var floor = -1;
    var ceiling = theArray.length - 1;

    while (floor < ceiling) {
        console.log('floor: ' + floor + '  -> ceil: ' + ceiling);
        // divide our range 1..n into an upper range and lower range
        // (such that they don't overlap)
        // lower range is floor..midpoint
        // upper range is midpoint+1..ceiling
        var midpoint = Math.floor(floor + ((ceiling - floor) / 2));
        var lowerRangeFloor = floor;
        var upperRangeFloor = midpoint + 1;

        var lowerRangeCeiling = midpoint;
        var upperRangeCeiling = ceiling;

        console.log('lowerRangeFloor: ' + (lowerRangeFloor + 1) + ' -> lowerRangeCeiling:' + lowerRangeCeiling);

        var numbersToExpect = lowerRangeCeiling - lowerRangeFloor + 1;
        console.log('numbersToExpect: ' + numbersToExpect);

        // count number of items in lower range
        var numbersInRange = 0;

        theArray.forEach(function (item) {
            console.log('item: ' + item + '  >= LF: ' + lowerRangeFloor + ' <= TF:' + lowerRangeCeiling);
            // is it in the lower range?
            if (item >= lowerRangeFloor && item <= lowerRangeCeiling) {
                numbersInRange += 1;
            }
        });

        console.log('numbersInRange: ' + numbersInRange);
        if (numbersInRange > numbersToExpect) {

            console.log('there must be a duplicate in the lower range as numbersInRange ' + numbersInRange + ' > ' + numbersToExpect + ' numbersToExpect');
            // there must be a duplicate in the lower range
            // so use the same approach iteratively on that range
            floor = lowerRangeFloor;
            ceiling = lowerRangeCeiling;
        }
        else {

            console.log('there must be a duplicate in the upper range');
            // there must be a duplicate in the upper range
            // so use the same approach iteratively on that range
            floor = upperRangeFloor;
            ceiling = upperRangeCeiling;
        }
    }

    // if(floor+1 === theArray.length )
    // {
    //     return new Error('There are not duplicates ');
    // }

    //floor and ceiling have converged
    //we found a number that repeats!
    return floor;
}
