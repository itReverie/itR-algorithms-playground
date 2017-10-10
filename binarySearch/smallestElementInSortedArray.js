//Find the smallest element in a sorted rotated array
//The inputs could be:
//[10 20 30 40 50 60]
//[60 10 20 30 40 50]
//Input: [50 60 10, 20, 30,40]
//Output: 10
//To solve this problem we will user binary search as the array is already sorted.

(function smallestElementInSortedArray(array) {

    //initializing headers of my binary search
    let left= 0;
    let right= Math.floor(array.length/2);

    //while my left is smaller to the right this is we carry on with the length of our array
    //and while the positions on the left are greater that the right one we have not found the smallest one yet so we carry on
    //Otherwise when the value on the left is smallest or equal that the right we have found the SMALLEST one
    while (left < right && array[left] >= array[right]) {

        let medium = Math.floor((left + right) / 2);

        //as we are searching for the smallest, if the left side is greater than the right
        // it means that the smaller one is on the left so we will move our head to the left
        if (array[medium] > array[right]) {
            left = medium + 1;
        }
        else {
            right = medium;
        }
    }
    console.log(array[left]);
    return array[left];
})([ 50, 60, 10, 20, 30, 40])
