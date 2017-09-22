//You have a list of integers, and for each index you want to find the product of every integer except the integer at that index. Write a function get_products_of_all_ints_except_at_index() that takes a list of integers and returns a list of the products.
//or example, given:
//[1, 7, 3, 4]
//Your function should return:
//[84, 12, 28, 21]


function calculateProductsExceptIndex(array){

    let result=[];

    //We multiply the values until the array length
    let productSoFar=1; // We initialize in one so when we multiply in that index it returns its own: 3 X 1 = 3
    for(let i=0; i < array.length; i++)
    {
        result[i] = productSoFar;
        productSoFar *= array[i];
    }

    //We multiply the values reading the array backwards
    productSoFar=1; //We need to initialize teh product again to 1
    for(let j= array.length-1; j>=0;j--)
    {
        result[j] *= productSoFar;
        productSoFar *= array[j];
    }

    return result;
}



console.log(calculateProductsExceptIndex([1, 7, 3, 4]));