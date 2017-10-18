function permutationYay(base,word)
{
    if (word.length === 0)//undefined || isNaN(base))
    {
        console.log('word:',base);
    }
    else
    {
        for(let position=0; position < word.length; position++)
        {
            let letter = word[position];
            base +=letter;
            let newWord =word.replace(letter, '');

            //explore
            permutationYay(base,newWord);

            //un-chose
            //I am using another variable for word so no need to backtrack
            //I just need to back track the base
            base = base.replace(letter,'');
        }
    }
}

function permute(word){

    permutationYay('',word);
}

permute('casa');

