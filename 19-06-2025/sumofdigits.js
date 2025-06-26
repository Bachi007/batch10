let num=1234;
let rem,sum=0;

while(num!=0){
    rem=num%10;
    sum+=rem;
    num=parseInt(num/10)
}
console.log(sum)