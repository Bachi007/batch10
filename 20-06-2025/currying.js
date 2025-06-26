function add(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}
console.log(add(5)(7)(12));