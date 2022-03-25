function binaryAgent(str) {
    let arr=str.split(" ");
    let newArr=arr.map(value=>{
        let decimalismArr=[];
        for(let i=0;i<value.length;i++){
            decimalismArr.push(parseInt(value[i])*Math.pow(2,value.length-i-1));
        }
        decimalismArr
        return decimalismArr.reduce((sum,value)=>sum+value,0);
    })
    return newArr
                .map(value=>String.fromCodePoint(value))
                .join("")

  }
  console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110"));
  

  
  
  