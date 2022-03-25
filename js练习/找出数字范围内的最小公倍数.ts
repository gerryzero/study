function smallestCommons(arr) {
    let minNum=Math.min(arr[0],arr[1]);
    let maxNum=Math.max(arr[0],arr[1]);
    let commonMultiple=minNum*(minNum+1);
    for(let i=minNum+2;i<=maxNum;i++){
        let cm=commonMultiple;
        while (commonMultiple%i!==0) {
            commonMultiple=commonMultiple+cm;
        }
    }
    return commonMultiple;
  }
  console.log(smallestCommons([1,13]));
  
  smallestCommons([1,5]);