function hello(bs){
    console.log("Good Morning");
    bs();
}

function greet(){
    console.log("How are you!...");
}

setTimeout(hello,5000,greet);
//hello(greet)

//hello is accepting greet as pararmeter so hello is higher order function
//greet is passing as parameter to hello so greet is callback function
