
function student(name,address,education,marks){
        this.name=name;
        this.address=address;
        this.education=education;
        this.marks=marks;
}

var s1=new student("John","Hyd","MCA",85);
var s2=new student("Jack","Chennai","MBA",86)
var s3=new student("Jhony","Chennai","MCA",96)

var all=[s1,s2,s3];

var arr=all.filter(a=>a.address=="Chennai");

function mobiles(name,version,ram,cost,weight){
    this.name=name;
    this.version=version;
    this.ram=ram;
    this.cost=cost;
    this.weight=weight
    this.fullname=function(){
        return this.name+" "+this.version;
    }
}
var m1=new mobiles('realme','c-25y','4GB',150000,'300gm');
var m2=new mobiles('iphone','16pro','5GB',250000,'100gm');
var m3=new mobiles('samsung','s-24','5GB',290000,'500gm');
var usercost=prompt("enter cost");
var all=[m1,m2,m3];
for(let obj of all){
    if(obj.cost<=usercost){
        for(let key in obj){
            console.log(key+":"+obj[key]);
        }
    }
}