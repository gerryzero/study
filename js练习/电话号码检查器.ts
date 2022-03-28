function telephoneCheck(str) {
    let reg=/^(1\s)?(\(\d{3}\)|\d{3})(\s\d{3}\s|-\d{3}-|\d{3})\d{4}|^1?\s?\(\d{3}\)\s?\d{3}-\d{4}/
    let result=reg.test(str);
    let num=str.match(/\d/g);
    if (/^1/.test(str)==true) {
        if (num.length==11&&result) {
            return true;
        } else {
            return false;
        }
    } else {
        if (num.length==10&&result) {
            return true;
        } else {
            return false;
        }        
    }
  }
  console.log(telephoneCheck("27576227382"));
  
  telephoneCheck("27576227382");