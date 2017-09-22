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

console.log(duplicateCount('aa11cdrc'));