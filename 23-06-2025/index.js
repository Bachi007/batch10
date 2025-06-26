var marvel=["Ironman","Hulk","Capt America","Dr Strange","Black widow"];
var newarr=marvel
            .map(i=>i.length)
            .filter(i=>i%2==0)
            .reduce((acc,i)=>acc+i);
console.log(newarr);