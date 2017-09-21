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


//Given an ordered array find the indexes of the pairs that would give you the sum of the target
//For example: [1,2,3,5,7,9,8,18,90 ]
//Target: 10
//Answer indexes:               [0,7], [1,6], [2,5]
//Answer belong to the pairs:   [1+9], [2+8], [3,7]

function findSumInOrderArray(array = [1, 2, 3, 5, 7, 8, 9, 18, 90], target = 10) {

    let results = [];

    for (let i = 0; i < array.length; i++) {
        //I am just interested to search in the smaller items than the target.
        if (array[i] < target) {
            var result = binarySearch(array, target-array[i] , i);
            if(result !== undefined) {
                results.push(result);
            }
        }
    }
    return results;
}


function binarySearch(array, target, start) {

    let low = start; //start in the coming value
    let hight = array.length;

    while (low +1 < hight) {
        let distance = hight - low;
        let halfDistance = Math.floor(distance / 2);

        let auxKey = low + halfDistance;
        let auxValue = array[auxKey];

        if (auxValue === target) {
            //Yay!! we found the complement
            return {indexNumber1: start, indexNumber2: auxKey + 1};
        }

        if (auxValue < target) {
            //the target might be on the right
            low = auxKey;
        }
        else {
            //the target might be on the left
            hight = auxKey;
        }
    }

}

console.log(findSumInOrderArray());