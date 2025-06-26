// let num=1230;
// let rem, str="";
// while(num!=0){

//     rem=num%10;
//     str+=rem;
//     num=parseInt(num/10);
// }
// console.log(str);

let num=1230;
let temp=num;
let rem, str="";
while(num!=0){

    rem=num%10;
    str+=rem;
    num=parseInt(num/10);
}
if(str==temp)
console.log(`${temp} is palindrome`);
else
console.log(`${temp} is not palindrome`);
