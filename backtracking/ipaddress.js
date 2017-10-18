function permutationSegment(base,word, uniqueNumbers)
{
    if (word.length === 0)//undefined || isNaN(base))
    {
        let ipNumber=parseInt(base);

        if(ipNumber<=255 && !uniqueNumbers.has(ipNumber) ) {
            uniqueNumbers.add(ipNumber);
            console.log(uniqueNumbers);
        }
    }
    else
    {
        for(let position=0; position < word.length; position++)
        {
            //choose


            let letter = word[position];
            base +=letter;
            let newWord =word.replace(letter, '');

            //explore
            permutationSegment(base,newWord, uniqueNumbers);

            //un-chose
            //I am using another variable for word so no need to backtrack
            //I just need to back track the base

            base = base.replace(letter,'');
        }
    }
}

function permute(word){
    let uniqueNumbers=new Set();
    permutationSegment('',word, uniqueNumbers);
}

permute('135.123');

