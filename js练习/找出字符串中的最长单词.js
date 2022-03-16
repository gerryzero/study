function findLongestWordLength(str) {
    let arr=str.match(/\S+/g);
    let longest=0;
    for (let i=0;i<arr.length;i++){
        if(longest<arr[i].length){
            longest=arr[i].length
        }
    }
    return longest
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
  