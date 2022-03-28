function convertToRoman(num) {
    let roman=[
        ["I","II","III","IV","V","VI","VII","VIII","IX"],
        ["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"],
        ["C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],
        ["M","MM","MMM"]];
   let arr=num.toPrecision().split("");
   let newArr=[];
   for (let index = 0; index < arr.length; index++) {
       newArr.unshift(roman[index][arr[arr.length-1-index]-1])
       
   }
   return newArr.join("")
   }
   
   convertToRoman(36);