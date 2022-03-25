function sumFibs(num) {
    let i=0;
    let arr=[1,1];
    let sum=0;
    while (arr[i]<=num) {
        if(arr[i]%2==1){
            sum+=arr[i];
        }
        arr.push(arr[i]+arr[i+1]);
        i++;
    }
    return sum;
  }
  console.log(sumFibs(4));
  
  sumFibs(4);