var keys=["brand","price","ram","rom"]

tarun=prompt("Enter the tarun mobile");
tarun=tarun.split(",");
//console.log(tarun);
saketh=prompt("Enter the saketh mobile");
saketh=saketh.split(",");
let tarunMobile=new Object();
let sakethMobile=new Object();
for(let i=0;i<keys.length;i++){
   tarunMobile[keys[i]]=tarun[i]
    
}
//console.log(tarunMobile)
    
for(let i=0;i<keys.length;i++){
   sakethMobile[keys[i]]=saketh[i]
    //console.log(sakethMobile)
}
console.log(sakethMobile)
// for(let i=0;i<keys.length;i++){
//     sakethMobile.keys[i]=saketh[i];
// }

arr=[tarunMobile,sakethMobile];
price=parseInt(prompt("Enter the price"));

for(let a of arr){
    if(a.price<price){
        document.writeln(a.brand)
    }
}
