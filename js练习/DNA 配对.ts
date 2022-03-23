function pairElement(str) {
    let arr1=[];
    for(let i=0;i<str.length;i++){
        arr1.push(str[i]);
    }
    let newArr=arr1.reduce((arr2,value)=>{
                        let arr3=[value];
                        switch(value){
                            case "A":arr3.push("T");break;
                            case "T":arr3.push("A");break;
                            case "G":arr3.push("C");break;
                            case "C":arr3.push("G");break;
                        }
                        arr2.push(arr3);
                        return arr2;
                    },[])
    console.log(newArr);
    return newArr;
}
let fruits = [];

fruits.push(36565,[23]);

console.log(fruits);
console.log(pairElement("GCG"));

  
 