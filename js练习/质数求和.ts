function sumPrimes(num) {
    let sum=2;
    for (let i = 2; i <= num; i++) {
        for (let j = 2; j < i; j++) {
              if(i%j==0){
                break;
              }else if(j==i-1){
                  sum+=i;
              }
        }
        
    }
    return sum;
  }
 
  
  sumPrimes(10);