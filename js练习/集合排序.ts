function uniteUnique(...arr) {
    return arr.reduce((newArr,arr1)=>{
        return newArr.concat(
            arr1.filter(value=>!newArr.includes(value))
        )
    },[])

  }
  console.log(uniteUnique([1, 3, 2], [5,2, 1, 4],[1,2]));
  
