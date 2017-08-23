
    function solveProblem() {
        var sum = document.getElementById('sum').value;
        var array= [6,4,3,2,1,7];
        document.getElementById('result').innerHTML=methodWithSet(array, sum);
    }

    // From a unsorted array, check whether there are any two numbers that will sum up to a given number?
    //sumFinder([6,4,3,2,1,7], 9);



    //Using array
    function methodWithArray(array, sum)
    {
        var dictionary={};
        var subtraction=0;


        for (var i=0; i<array.length; i++)
        {
            subtraction= sum-array[i];
            console.log(sum +' - ' +array[i]+' ='+subtraction);

            console.log(dictionary[subtraction]);

            if(dictionary[subtraction])
            {

                return true;
            }
            else
            {
                dictionary[array[i]]=subtraction;
            }
        }
        return false;
    }


    //Using SET
    function methodWithSet(array, sum)
    {
        var dictionary=new Set();
        var subtraction=0;


        for (var i=0; i<array.length; i++)
        {
            subtraction= sum-array[i];
            console.log(sum +' - ' +array[i]+' ='+subtraction);

            if(dictionary.has(array[i]))
            {

                return true;
            }
            else
            {
                dictionary.add(subtraction);
            }
        }
        return false;
    }
