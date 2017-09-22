function SeriesSum(n)
{
    let result=0, counter=0;
    for (let i=1; counter< n; i=i+3)
    {
        //let currentValue=Math.round( (1/i) * 100) / 100;
        let currentValue=parseFloat(1/i);
        result += currentValue;
        counter++;
    }
    return result.toFixed(2);
}

console.log(SeriesSum(4));