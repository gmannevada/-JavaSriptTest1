function isEven(theNum)   
{
    return (theNum % 2 === 0);
}

function filterArrayOddNumber(arr, callback){
    var odds = [];

    arr.forEach((num) => {
        if(!callback(num)){
            odds.push(num);     
        }
    });
    console.log(odds)  
  };

 filterArrayOddNumber([8, 19, 5, 6, 14, 9, 13], isEven);