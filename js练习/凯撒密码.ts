function rot13(str) {
    let letter="abcdefghijklmnopqrstuvwxyz".toUpperCase();
    let arr=str.split("")
    for (let index = 0; index < str.length; index++) {
        if(/[a-zA-Z]/.test(str[index])){
            if(letter.indexOf(str[index])<=12){
                arr[index]=letter[letter.indexOf(str[index])+13]
            }else{
                arr[index]=letter[letter.indexOf(str[index])-13]
            }
        }  
    }
   return arr.join("");
  }
  
  rot13("SERR CVMMN!");