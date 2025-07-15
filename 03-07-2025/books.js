const books = [ 
{ title: 'Book A', author: 'Author 1' }, 
{ title: 'Book B', author: 'Author 2' }, 
{ title: 'Book C', author: 'Author 3' }, 
];
var str="Book B"
var ind=books.findIndex((b)=>b.title==str);
console.log(ind+" "+books[ind].title)