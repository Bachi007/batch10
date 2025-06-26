var arr=[12,5,7,30,42];

let min=arr[0];
for(let a of arr)
{
    if(a>min)
        min=a;
}
console.log(min);
