function fearNotLetter(str) {
    let wholestr="abcdefghijklmnopqrstuvwxyz";
    let head=wholestr.indexOf(str[0]);
    let tali=wholestr.indexOf(str[str.length-1]);
    let realstr=wholestr.slice(head,tali+1);
    let arr=realstr.split("");
    if (realstr===str){
        return undefined
    }
    return arr.filter(letter=>str.includes(letter)==false).join("");
  }
  console.log(fearNotLetter("abce"));
  
console.log("abcde");
