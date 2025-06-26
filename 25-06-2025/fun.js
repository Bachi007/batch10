function outer(){
    let i=0;
        function inner(){
            return i++;
        }
        return inner;
}
let res=outer();
console.log(res())
console.log(res())
console.log(res())
