function palindrome(str) {
   let word=str.match(/[a-zA-Z0-9]/g);
   let mid;
   let arr=[];
   if(word.length%2==1){
       mid=(word.length-1)/2;
       for(let i=word.length-1;i>mid;i--){
        arr.push(word[i])
   }
   }else{
        mid=word.length/2;
        for(let i=word.length-1;i>=mid;i--){
            arr.push(word[i])
    }
    }
   let newWord=word.join("");
   if(newWord.slice(0,mid).toLowerCase()===arr.join("").toLowerCase()){
       return true;
   }
   return false
   
  }
  console.log(palindrome("My age is 0, 0 si ega ym."));
  
  