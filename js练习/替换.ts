function myReplace(str, before, after) {
    let upcase=/^[A-Z]/;
    let newAfter;
    if(upcase.test(before)){
        newAfter=after[0].toUpperCase()+after.slice(1);
    }else{
        newAfter=after[0].toLowerCase()+after.slice(1);
    }
    return str.replace(before,newAfter);
  }
  console.log(  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
  
  
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");