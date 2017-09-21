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
    let valuesSmallerThanTarget = [];


    //Initializing the values I am interested to search. They should be all the ones smaller than the target
    for (let i = 0; i < array.length; i++) {
        if (array[i] < target) {
            //valuesSmallerThanTarget.push(array[i]);
            var result = binarySearch(array, target-array[i] , i+1);
            results.push(result);
        }
    }

    //For those values smaller than the target I do a binary search to find the pair that makes the sum
    // for (let i = 0; i < valuesSmallerThanTarget.length; i++) {
    //     var result = binarySearch(valuesSmallerThanTarget, target - valuesSmallerThanTarget[i], i + 1);
    //     results.push(result);
    // }

    console.log(results);
    return results;
}


//hui1021@gmail.com
//mckenzie.andrea.m@gmail.com
//adaomatu@gmail.com
function binarySearch(array, target, start) {

    let low = start;
    let hight = array.length - 1;

    let lastValueOnArray = array[hight];

    while ((low < hight) && (lastValueOnArray <= target)) {
        let distance = hight - low;
        if (distance === 1)
        {
            var test=array[hight];

            if (test === target) {
                //Yay we fond itauxV

                console.log('yay');
                return ;
            }
        }

        let halfDistance = Math.floor(distance / 2);

        let auxK = low + halfDistance;
        let auxV = array[auxK];


        if (auxV === target) {
            //Yay we fond itauxV
            var r={number1: start, number2: auxK + 1};
            console.log({number1: start, number2: auxK + 1});
            return r;
        }
        else if (lastValueOnArray === auxV) {
            //We have reach the end and the number is not here
            return;
        }

        if (auxV < target) {
            //the target might be on the right
            low = auxK;
            //console.log(low);
        }
        else {
            //the target might be on the left
            hight = auxK;
        }
    }

}

findSumInOrderArray();