function dropElements(arr, func) {
    let falseIndex=0;
    while (func(arr[falseIndex])) {
        falseIndex++;
    }
    falseIndex
     let trueIndex=falseIndex+1;
    while (func(arr[trueIndex])==false) {
         trueIndex++;
     }
     trueIndex
     arr.splice(falseIndex,trueIndex)
     return arr;
     }
  console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}));
  
  