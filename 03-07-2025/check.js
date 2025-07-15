var obj={a:1,b:2,c:3,d:4};

var str=["b","c"];

// var newobj={}

// for(s of str){
//     if(s in obj)
//         newobj[s]=obj[s];
// }

   var newobj= str.reduce((acc,i)=>{
        if(i in obj)
            acc[i]=obj[i]
        return acc;
    },{})



console.log(newobj)