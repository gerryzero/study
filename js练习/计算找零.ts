function checkCashRegister(price, cash, cid) {
    let arr=[0.01,0.05,0.1,0.25,1,5,10,20,100]
    let Dvalue=cash-price;
    if(Dvalue>cid.reduce((sum,arr)=>sum+arr[1],0)){
        return {"status": "INSUFFICIENT_FUNDS", "change": []}
    }else if(Dvalue==cid.reduce((sum,arr)=>sum+arr[1],0)){
        return {status: "CLOSED", change: cid}
    }
    let maxPosition;
    for (let index = 0; index < arr.length; index++) {
       if(Dvalue>=arr[index]&&Dvalue<arr[index+1]){
         maxPosition=index;
         break;
       }
    }
    let change=[];
    let status;
    let obj;
    maxPosition
    for (let index = maxPosition; index >= 0; index--) {
       if(Dvalue<=cid[index][1]){
         if(+(Dvalue%arr[index]).toFixed(2)==0){
             change.push([cid[index][0],+Dvalue.toFixed(2)]);
             status="OPEN";
             return obj={
                 "status":status,
                 "change":change
             }
         }else{
             if(Dvalue/arr[index]>=1){
                 change.push([cid[index][0],Math.floor(Dvalue/arr[index])*arr[index]]);
             }
             Dvalue=+(Dvalue%arr[index]).toFixed(2);
             Dvalue
         }
       }else{
           Dvalue=Dvalue-cid[index][1];
           change.push(cid[index])
       }
        
    }
    if(status==undefined){
        return {status: "INSUFFICIENT_FUNDS", change: []}
    }
   }
   console.log(checkCashRegister(3.26,100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
   
   