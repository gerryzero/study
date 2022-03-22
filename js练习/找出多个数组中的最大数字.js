function largestOfFour(arr) {
    
    let arr1=[];
    for(let i=0;i<arr.length;i++){
        let bigest=arr[i][0];
        for (let j=0;j<arr[i].length;j++){
            if(bigest<=arr[i][j]){
                bigest=arr[i][j]
            }
        }
        arr1.push(bigest);
    }
    return arr1;
  }
  
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
 