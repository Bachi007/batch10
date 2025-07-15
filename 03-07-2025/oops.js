// function person(firstName,lastName,age){
//     this.firstName=firstName;
//     this.lastName=lastName;
//     this.age=age;
// }

class person{
    constructor(firstName,lastName,age){
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
}
}


var p1=new person("John","Ducket",27);
var p2=new person("Jack","Inglis",30);

var people=[p1,p2];

for(let p of people){
    for(let key in p){
        console.log(key+" "+p[key]);
    }
}