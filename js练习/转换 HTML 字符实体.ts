function convertHTML(str) {
    let obj={   
        "&":"&amp;",
        "<":"&lt;",
        ">":"&gt;",
        "'":"&apos;",
        "\"":"&quot;",
        }
    let arr=Object.keys(obj);
    return arr.reduce((newStr,symbol)=>{
        let reg=new RegExp(symbol,"g")
       return newStr=newStr.replace(reg,obj[symbol]).slice()
    },str)
  }
  console.log(convertHTML("Hamburgers < Pizza < Tacos"));
  
  
  convertHTML("Dolce & Gabbana");