function duplicateCount(text){
   let dictionary=[];
   let duplicates=0;
   for(let i=0; i<text.length;i++)
   {
       let currentChar=text[i].toLowerCase();
       if(!dictionary[currentChar])
       {
           dictionary[currentChar] =1;
       }
       else
       {
           if(dictionary[currentChar] ===1)
           {
               duplicates ++;
           }

           dictionary[currentChar] +=1;
       }
   }

   return duplicates;
}


function duplicateCountWithASet(text){
    let set=new Set();
    let duplicates=0;

    text=text.toLowerCase();
    let chars=text.split('');

    chars.forEach(function(char){
        if(!set.has(char)) {
            let firstOcurrence = text.indexOf(char);
            let lastOccurence = text.lastIndexOf(char);
            if (firstOcurrence !== lastOccurence) {
                set.add(char);
                duplicates++;
            }
        }
    });
    return duplicates;
}


console.log(duplicateCountWithASet('Indivisibilities'));