const employees = [ 
{ name: 'Alice', salary: 50000 }, 
{ name: 'Bob', salary: 60000 }, 
{ name: 'Charlie', salary: 40000 }, 
]; 
var amount=40000;
var printemp = employees.filter((emp)=>emp.salary>amount).map(emp=>emp.name);

console.log(printemp.sort())