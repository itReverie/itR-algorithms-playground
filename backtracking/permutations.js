function permutationYay(base,word)
{
    if (word.length === 0)//undefined || isNaN(base))
    {
        console.log(base);
    }
    else
    {
        for(let position=0; position < word.length; position++)
        {
            //choose
            let letter = word[position];
            base +=letter;
            let newWord =word.replace(letter, '');

            //console.log('b-1: ',base);
            //console.log('w-1: ',newWord);

            //explore
            permutationYay(base,newWord);

            //un-chose
            //I am using another variable for word so no need to backtrack
            //I just need to back track the base

            base = base.replace(letter,'');
            //console.log('b-b: ',base);
            //console.log('w-b: ',word);
            //console.log('~~~~~~~~~~~~~~~~~~~~');
        }
    }
    //console.log('-------------------');
}

function permute(word){

    permutationYay('',word);
}

permute('abc');

