
// function restoreIpAddresses( s) {
//     var res = [];
//     if (s.length<4||s.length>12) return res;
//     dfs(s,"",res,0);
//     return res;
// }
//
// function dfs( s,  tmp,  res,  count){
//     if (count == 3 && isValid(s)) {
//         res[tmp + s] = tmp + s;
//         return;
//     }
//     for(var i=1; i<4 && i<s.length; i++){
//         var substr = s.substring(0,i);
//         if (isValid(substr)){
//             dfs(s.substring(i), tmp + substr + '.', res, count+1);
//         }
//     }
// }
//
// function isValid( s){
//     if (s.charAt(0)=='0') return s.equals("0");
//     var num = parseInt(s);
//     return num<=255 && num>0;
// }
//
//     var a = "21325525565";
//     var s= restoreIpAddresses(a)
// console.log(s);



function getIps(string) {

    let set1, set2, set3, set4;
    let ipSet= new Set();

    //Divide the string in sets of 4
    set1 = string.slice(0, 3);
    var combinationsSet1 = getPermutations(set1);
    //ipSet=[...combinationsSet1];
    set2 = string.slice(3, 6);
    var combinationsSet2 = getPermutations(set2);
    //ipSet=[...combinationsSet2];
    set3 = string.slice(6, 9);
    var combinationsSet3 = getPermutations(set3);
    //ipSet=[...combinationsSet3];
    set4 = string.slice(9, string.length + 1);
    var combinationsSet4 = getPermutations(set4);
    //ipSet=[...combinationsSet1,...combinationsSet2,...combinationsSet3,...combinationsSet4];
    var result= [combinationsSet1, combinationsSet2, combinationsSet3, combinationsSet4];



    for(let i=0; i < result.length; i++) {
        var restIp='';
        //define the rest of the ips as that wont change for the items iteration
        if(i===1)
        {
            restIp= result[0]+'.';
        }
        if(i===2)
        {
            restIp= set1+'.'+ set2+'.';
        }
        if(i===3)
        {
            restIp= set1+'.'+set2+'.'+set3+'.';
        }

        for (let item of result[i]) {

            var ip =restIp+item;
            ipSet.add (ip);

        }
    }

    console.log(ipSet);

}
