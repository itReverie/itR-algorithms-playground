/*
*  Write a function that takes:

    an array of unsortedScores
    the highestPossibleScore in the game

and returns a sorted array of scores in less than O(nlgn)O(n\lg{n})O(nlgn) time. 
* */

function counteringSort(array=[37,89,41,65,91,53], highestValue=100){

    let tempResults=[], result=[];

    //Initialize a temp array to use later to keep the values of the numbers in the array passed as a parameter
    for(let i=0 ; i< highestValue; i++)
    {
        tempResults[i]=0;
    }

    //Populate the temp array with the actual values from the array
    for(let j=0; j<array.length; j++)
    {
        let currentValue= array[j];
        tempResults[currentValue] +=1;
    }

    //Pass the values of the temp array into the results
    for(let number=0; number<tempResults.length;number++){

        let howManyTimes= tempResults[number];

        for(let k=0; k<howManyTimes;k++)
        {
            result.push(number);
        }
    }

    return result;
}


console.log(counteringSort());