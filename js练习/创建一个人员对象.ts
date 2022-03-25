const Person = function(firstAndLast) {
    // 只修改这一行下面的代码
    // 完成下面的方法，其余的执行类似
    
    this.getFullName = function() {
        return firstAndLast;
    };
    this.getFirstName=function(){
        return firstAndLast.split(" ")[0];
    }
    this.getLastName=function(){
        return firstAndLast.split(" ")[1];
    }
    this.setFirstName=function(newFirst){
        let lastName=firstAndLast.split(" ")[1];
        return firstAndLast=newFirst+" "+lastName;
    }
    this.setLastName=function(newLast){
        let firstName=firstAndLast.split(" ")[0];
        return firstAndLast=firstName+" "+newLast;
    }
    this.setFullName=function(fullName){
        return firstAndLast=fullName;
    }
  };
    
    let bob = new Person('Bob Ross');
    // var firstName=firstAndLast.split(" ")[0];
    // var lastName=firstAndLast.split(" ")[1];
    bob.setFirstName("Haskell")

    console.log(bob.getFullName());
  
  
