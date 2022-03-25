function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    return arr.map(obj=>{
        let T=2*Math.PI*Math.sqrt(Math.pow(obj.avgAlt+earthRadius,3)/GM) 
        if(T-parseInt(T)>=0.5){
            T=parseInt(T)+1;
        }else{
            T=parseInt(T);
        }
        delete obj.avgAlt;
        obj.orbitalPeriod=T;
        return obj;
    })
  }
  
  orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));

  