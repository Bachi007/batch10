let num=154;
let temp=num;
let count=0,sum=0;
while(num!=0){
    num=parseInt(num/10);
    count++;
}
num=temp;
while(num!=0){
    rem=num%10;
    sum+=rem**count;
    num=parseInt(num/10);
}
if(sum==temp)
    console.log(`${temp} is armstrong`);
else
console.log(`${temp} is not armstrong`);

