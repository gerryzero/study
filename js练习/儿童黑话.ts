function translatePigLatin(str) {
    if(/^[aeiou]+/.test(str)){
        str+="way";
        return str;
    }else{
        for(let i=1;i<str.length;i++){
            if(str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u"){
                let newStr=str.slice(i)+str.slice(0,i)+"ay";
                return newStr;
            }
        }
        str+="ay";
        return str;
    }
  }
  console.log(translatePigLatin("paragraphs"));

  console.log("paragraphs".slice(1));
  
  console.log();
  
  translatePigLatin("consonant");