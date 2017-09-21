//Given an array find the indexes that would give you the sum
//For example: [1,2,5,9,8,5]
//Target: 10
//array with [2,8], [5,5]

function findSum(array = [1, 2, 5, 9, 8, 5], target = 10) {

    let results = [];
    let dictionary = [];
    let substraction = 0;

    for (let i = 0; i < array.length; i++) {
        substraction = target - array[i];
        if (!dictionary[substraction]) {
            dictionary[array[i]] = substraction;
        }
        else {
            results.push({number1: substraction, number2: dictionary[substraction]});
        }
    }

    console.log(dictionary);
    return results;
}

//let results=findSum();
//console.log(results);


//Given an ordered array find the indexes that would give you the sum
//For example: [1,2,3,5,7,9,8,18,90 ]
//Target: 10
//array with [2,8], [5,5]

function findSumInOrderArray(array = [1, 2, 3, 5, 7, 8, 9], target = 10) {

    let results = [];

    for (let i = 0; i < array.length; i++) {
        //I am just interested to search in the smaller items than the target.
        if (array[i] < target) {
            var result = binarySearch(array, target-array[i] , i+1);
            if(result !== undefined) {
                results.push(result);
            }
        }
    }
    console.log(results);
    return results;
}


function binarySearch(array, target, start) {

    let low = start;
    let hight = array.length - 1;

    while (low +1 < hight) {
        let distance = hight - low;
        let halfDistance = Math.floor(distance / 2);

        let auxK = low + halfDistance;
        let auxV = array[auxK];

        if (auxV === target) {
            //Yay!! we found the complement
            var r={number1: start, number2: auxK + 1};
            console.log({number1: start, number2: auxK + 1});
            return r;
        }

        if (auxV < target) {
            //the target might be on the right
            low = auxK;
        }
        else {
            //the target might be on the left
            hight = auxK;
        }
    }

}

findSumInOrderArray();