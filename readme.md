
Introduction to WEB DEV 
HTML 5
CSS 3
JavaScript (ES2024)(EcmaScript)
Bootstrap 5
Typescript 
Angular 17
Nodejs 22
MongoDB : MongoDB Compass/ MongoDB Atlas cloud 
Expressjs: JWT,Encryption  5 
React 

GitHub  : Version Control System 

Repository (folder)->branches (v1,v2,v3)

push 
pull

CI/CD 

contributor 

GitHub Account, Git for windows 






Firebase 
Render 

Introduction 


website :  collection of different webpages is known as website 

webpage : webpage is an electronic document where we can have dynamic content like multimedia, hypermedia content over the internet


types of websites

static website :  a website which has static or same content through out a day or year 
		 example:college portals, portfolios

dynamic website : a website which can update its content in regular intervals of time or 		  events 
		  example: weather app, cricbuzz..

web application : it is also type of dynamic website where data in exchanged between two 		  entities (like user and system)
		  example: Instagram,amazon,swiggy..

what are things we need to publish one website : 

1. browser 
2. code 
3. domain name or ip address
4. storage server 
5. web server 


IP address: the unique address or code for the systems or devices that connected to internet 

127.52.61.136

0-255


HTML : Hyper text markup language 



SGML : standard generalized markup language 

Tim Berners Lee

1989 : CERN -> European council of nuclear research 

1991 : HTML 1.0 launched with bugs 

1995 : HTML released officially by W3C

2008-2014 : HTML 5 launched

present : WHATWG - living standard 

	(Web Hypertext application technology Working Group) : browser vendors like Apple,Google,Mozila 

JavaScript Engine : V8 

Xion wium lee


HTML : 

Tags : tag is unique keyword which enclose brackets <>

	tag has two parts : opening tag and closing tag 

		opening : <keyword>
		closing : </keyword>

	tags are two in type 
			container/dependent/paired tag 
			empty/independent/unpaired tag
		container : the tag which has both opening and closing parts 
			example: <h1></h1>,<p></p>

		empty : the tag which has only opening tag
			example : <br>,<hr>

Attributes : the properties of a html tag 

	key="value" in opening tag
	example : <h1 align="center">Hello world</h1>

HTML Program structure : 

<!doctype HTML>	
<html>
<head>
supportive content of body like title,favicon,viewport,seo,styles,scripts
</head>
<body>

main content of webpage

</body>
</html>

HTML 5 features :

Multimedia : audio,video
frames : iframe (frameset in HTML 4)
semantic : nav,header,footer,div,section,fieldset


heading tags of HTML 


h1 to h6 

paired 

<h1>DRF</h1>


Text Formatting 

font : color,size,style(face)

bold text : <b></b> or <strong></strong>
italic : <i></i> or <em></em>
underline : <u></u>
deleted text:<del></del>
super script : <sup></sup>
sub script : <sub></sub>
pre defined text : <pre></pre>


List tags in HTML 

Ordered List : numbers,alphabets,roman int

	tags : <ol></ol>, <li></li>
	attributes : type - to specify the sequence type as 1, A, a, I, i
		     Start - to start sequence at specific position 


Unordered List :

	tags : <ul></ul>, <li></li>
      attributes : type - disc, circle, square



description List : 

	tags : <dl></dl>, <dt></dt>, <dd></dd>

		HTML : 
			Hyper text markup language 

Images in HTML : 

<img> 

attributes : 
		src : source of an image
		alt : alternative text 
		height
		width
		title: to display tooltip 

Online : copy image url 

Offline 
jpg - joint photographic group
jpeg - joint photographic expert group
png - portable network graphics
gif - graphical interchange format
webp - webpage images
psd - photoshop document
svg - scable vector graphics 

Hyperlinks : hyperlinks allows us to navigate to different webpage or sections of webpage

	<a></a>
attributes : 
	href => hyperlink reference(link of targeted webpage)
	target => to open webpage in new tab or same tab (_self,_blank)
	title => to display tooltip

	text hyperlinks
	image hyperlinks

<div id="about">


Table : collection of rows and columns 

	<table></table>
	rows:<tr></tr>
	headings:<th></th>
	data:<td></td>

attributes 

	border =
	cellpadding = the space between border and content
	cellspacing - space between different cells of a table
	rowspan
	colspan 

Accordion 


Multimedia : HTML 5 : video, audio


video : <video></video>, <source>

attributes : 

	src : to specify source link of video
	controls:enable play,pause buttons
	autoplay
	muted 



Block and Inline elements 


	

Block Level : 
1. Block level tags always takes complete width of the page 
2. Block level tags always starts from new line 
3. it has default padding and margin 

ex: h1 to h6, p, semantic tags 

header : its container tag for group of headings in webpage
nav : to handle all the hyperlinks which creates navigation
footer : footer used to have additional information of website like copyrights, extra links, designing credits etc...

section : section tag divides the webpage into multiple parts

div : div is special container tag used along with section tag to manage content
 
fieldset : fieldset is also special container like div but it has border and legend 

figure : figure is block level element which consist of img, figcaption 

table,list

Inline : 
1. inline always starts from existing line 
2. it takes only required width
3. it doesn't has padding

img, a, label,span,button, input,text formatting

label
span 

<label>username</label><input type="text">

<button>Click to view <span>30+</span></button>

address
code
abbr
blockquote 

FORMS : to collect data from user in different forms like text,number,email,files...



<form>
input -> type=> text,number,password,email,date,time,datatime-local, radio, checkbox, range, color, file,url, submit,reset

dropdown -> select, datalist

multiline -> textarea 

</form>	

required=> to make it is mandatory field
pattern => to validate the data entered by user

character class : 
	[a-z] - only lowercase alphabets 
	[a-zA-Z] - both lower and uppercase alphabets
	[a-zA-Z0-9] - both alphabets and numbers
	[a-zA-Z0-9@$%^&*]


counter class 

	{5} - only 5 characters are allowed
	{5,} - minimum 5 characters
	{5,15} minimum 5 and max 15 characters



CSS : Cascading Stylesheet

1996 : Hakon wium Lee 
3 - 2011

css 3 features : border-radius, gradients, transitions, animations, flexbox, gridbox

Styling the webpages and to create responsive webpages using media queries 


Types of css : External css, Internal css, Inline 

Inline stylesheet : style attribute 
		key="value"
 		key:value;

	syntax : <tag style="key:value">content</tag>
	example : <h1 style="color:red">content</h1>
Internal : we can write blocks of css in style tag with head section of html 	
	
	syntax : 

		<head>
		<style>
			h1{
			color:red;
			}
			{color:blue;}
		</style>
		</head>

	var a=5;
	a=10;

external : we can create separate stylesheet with .css as extension then we can link it with html using <link href="" rel="stylesheet">



selectors : keyword which is used apply a block of css to html element
		-> we have 5 selectors 

	tag name selector : byusing tag name of html element we can apply block of css
			example:
				h1{
          			  color:green;
      				  }

	class name selector : by using class name we can apply block of css to multiple elements, here class name can be duplicate 

-> class name in css identified by a delimiter called . (dot)
example :
	 .myh1{
            color:green;
        }

 <h1 class="myh1">Dr Reddys Foundation</h1>


	id selector : by using id name we can apply a block of css to unique html element, here id name must be unique for every element

	universal selector : used to apply a block of css to all the elements in the body tag
	-> universal selector identified by delimiter called * 

		combinational selector

specificity : when we are applying multiple rules for single html element which rule will apply for the element 
	inline - 10000
	id - 01000
	class - 00100
	tag - 00010
	universal - 00001

text formatting : 

-> to change the color of the text : color:red;
-> to change face of the text : font-family:verdana;
-> to change size of the text : font-size:30px;
-> to change weight of the text : font-weight:900;
-> to change style of the text : font-style:italic;
-> to change case of the text : text-transform:uppercase/lowercase/capitalize;
-> to change space between the letters of text : letter-spacing:20px;
-> to change height of the lines in paragraph : line-height:30px;
-> to change space between words of a sentence : word-spacing:20px;
-> to add space before paragraph : text-indent:50px;
-> to change alignment of the text : text-align:left/right/center
-> to add or remove underline to text: text-decoration:underline/overline/line-through/none
-> to add shadow to the text : text-shadow:5px 5px red;

CSS COLORS : 

4 -> 1. color name
     2. HEXA code
     3. RGB values
     4. HSL values 

HEXA : 0-9A-F 
	0 - low F-high
	#rrggbb
	#ff0000
	#000000
	#ffffff
	#ff9900

RGB : Red Green Blue : 0-255
	rgb(255,120,100)

HSL : Hue Saturation Light
	hsl(120,50%,50%)
rgba : rgba(255,0,0,0.5)
hsla 


Backgrounds : 

background-color
background-image : 
background-repeat : no-repeat/repeat-x/repeat-y/repeat
background-position : center/top left/top right/bottom left/bottom right/right/left/bottom/top
background-size: 1200px 500px;
background-attachment 

gradients : linear-gradient,radial-gradient 

BOX MODEL : 

margin : the space between sides of the webpage and main content or external space of element

padding : the space between content and border or internal space of any element
border : the line which is around the content 
outline : the line which is around border and main content
outline-offset : the space between border and outline 


border : the line which is around the content 

	border-style: solid/double/dotted/dashed/inset/outset
	border-width : 2px
	border-color:red;

border : width style color;

border:2px solid black;


outline : 
       
css intro and types
selectors
text formatting
colors
box model
backgrounds
display
Pseudo classes and elements
box sizing
positions
flex
transforms
transitions
animations
media queries

Display : how an element should behave on display 

	display: inline/block/inline-block/none

	inline: horizontal not vertical 
	block : full control
	inline-block: full control over margins

 
Pseudo classes : to apply styles for different states of an element 

-> we use colon(:) as delimiter for pseudo classes 
-> different states of anchor tag is hover, visited, not visited, clicked 

-> pseudo classes 
	link- unvisited state of hyperlink 
	visited-visited state of hyperlink(if page is visited)
	hover - when user hovered with mouse on element
	active - when user clicked on the link
	nth-child - to apply different styles for child elements like even or odd
	first-child
	focus 


pseudo element : we can apply styles for special part of an element 
-> ::
-> first-letter
   first-line
   before
   after
   placeholder
   selection







Dropdowns : 

display:none -> used to hide an element from document flow 

button:hover -> menu should display 

position: how an element should be positioned in the flow either relative to its ancestor element or to normal flow 

-> static/absolute/relative/fixed/sticky

static -> default value of html elements, we cannot apply alignment using left,top,right,bottom values

absolute -> it will remove the element from normal document flow, the previous elements will occupy its place

relative -> relative to its normal position, ancestor elements doesn't effect 

fixed -> the element will fixed at one position and its almost similar to absolute

sticky -> relative + fixed



z-index : it used give highest priority to the elements on same document flow, we can bring an element to highest stack order 

overflow : overflow property used to control the content which overflowed from specific size 
-> hidden/scroll/auto/none



box-sizing : box-sizing is used to specify how size of an element should be calculated either excluding padding or including padding
->box-sizing has content-box/border-box 

content-box: size of the element defined by excluding padding and border

border-box : size of the element defined by including padding and border


Flexbox : css flexbox is used to align, adjust, spacing between the elements by writing flex properties to its parent
-> flex properties 
	flex-direction:row/row-reverse/column/column-reverse
	justify-content:space-around/space-between/flex-start/flex-end
	align-items
	flex-wrap:will arrange the content with respect to width : wrap/nowrap
	order
	flex-grow
-> to get responsive aligned content using media queries 	
 
media queries : media queries is used to design responsive webpages using css, we can different styles for an element based on the user's viewport 

@media 

min width : 960 > tabs,laptops,tv
max width:960 < mobiles


meta viewport content=> width=device-width


filters : brightness,contrast,invert,grayscale,hue-rotate,drop-shadow,blur 


Navbar with Dropdowns :  

2d transforms : transforms used to translate, rotate, skew, scale the elements using coordinate values

transform:translate(x,y) - used to move element on x,y axis 
transform:rotate(deg) - used to rotate elements both in clockwise and anti clockwise direction
transform:skew()- used to create parallelogram like structure by increasing intersection angle
transform:scale() - used to increase the size of an element on x,y axis 

transitions : used to apply smooth changes to the elements 

animations :  animations is used to change the style of an element from one to another during specific time interval 
-> we can create animations in css using special block of code called @keyframes 


syntax : 

@keframes animi{

	from{}
	to{}

}

div{
animation-name:animi;

}




no code animation



<div>
button
ul

</div>



Firebase : Firebase is a open source platform for hosting, managing the web, andriod, ios, flutter, unity gaming apps offered by google 

-> deployment, database, backend server 

-> .web.app 


-> nodejs-> npm (node package manager) - to install firebase tools in local machine 

-> download nodejs 22 from nodejs.org

https://drfbactch10.web.app/




1. min-width: 920px >920

2. max-width:920px <=920


screen=500px

h1, p


col-12-> xs,sm

col-sm

col-md-5(>=768), lg,xl

col-lg

col-xl


danger
warning
success
primary
secondary
info
dark
white

Grid System 
Text Formatting
Buttons, Button Group
Images
Tables
cards,forms
Alerts
Collapse
Dropdowns
Navbar, Hamburger Nav
Image carousel 
Modal
Accordion
Pagination 


Text Formatting :

changing text colors, adding bg, alignment, font weight, font-style, line-height, text-decoration, text-transform 


text-danger
text-success
text-warning
text-primary
text-info
text-secondary
text-dark
text-white 

bg-danger


text-start
text-end
text-center

text-uppercase
text-lowercase
text-capitalize 

fw-bold
fw-semibold
fw-normal 


fst-italic 

fs-5 - fs-1 
h1 to h6 



margin 

m-1 to m-5

mt-1 to mt-5 for margin-top
ms-1 to ms-5 for margin-left
me-1 to me-5 for margin-right
mb-1 to mb-5 for margin-bottom





Buttons : 

btn + btn-primary/btn-success/

 Images : 

img-fluid
img-thumbnail 
rounded (rounded-1 to rounded-5)
rounded-pill
rounded-circle


table :

table + table-hovered/table-striped/table-bordered 

card : 

card -> card-header+card-body+card-footer -> .card-img-top


Forms : 

.form-group
.form-label
.form-control 

Alerts : alert used to display warnings/success messages while login or ordering a product 

-> .alert + .alert-success/.alert-danger/alert-warning.....

-> dismissible alerts :  


Badge : badge+bg-colors...

Collapse : 

Dropdown : 

Navbar in bs5 

nav -> navbar, navbar-expand-md(to create horizontal nav) bg-dark(bg color) navbar-dark(if bg color is dark use   navbar-dark otherwise navbar-light)

ul - navbar-nav

li - nav-item a-nav-link

Hamburger menu -> div-> collapse with in that ul.navbar-nav 


Carousel : moving group of images 



Landing page 

Modal :  


Accordion : 

Pagination : the process of fetching large data from database in different pages to handle pressure of DB


we have 1000 students in db

want to display 100 students per page 

1st -> 1 to 100
2nd -> 101 to 200
3 -> 201 to 300


skip => (pagenum-1)*100

skip => 3-1*100




Food 
Ecommerce
Health
Education
Event Management 


JavaScript  : Brenden Eich - 1995
		1997 -> ECMAScript standards 
		2008 -> Node.js+Npm (ES6)
		2025 -> ES2024

What : JS is known a popular object oriented programming language(scripting) which is faster than Java and synchronous by nature 

-> JS is single threaded language
-> JS is dynamic typed language



1995-2008 -> scripting (client side scripting)
>2008 -> programming 

Object oriented 


task 1 -> 5
task 2 -> 3
task 3 -> 2



var a=4;
a="bhaskar"
a=true;


1995 -> mocha, livescript, JavaScript 

why : 
- DOM Manipulation
- Data validation
- Exception Handling
- Event Handling 
- async features 
- communicating with HTTP (REST API)
- server side dev
- testing 


frontend - angular, react, vue, next, ember 
backend - nodejs, expressjs, deno.js
testing - jasmine, karma.js
ML - brain.js, tensorflow.js
hybrid/desktop apps - electron.js, react native, ionic 





Output statements
Variables, Datatypes
Operators
Control statements (conditional & Iterative)
Functions
Arrays
Strings 
Objects 
Class and Object
Inheritance
Timing functions
call backs, higher order functions
promises
async and await
fetch api
DOM methods
Event Handling
HTML manipulation
CSS Manipulation




Internal
External 

Output statements : 

4

document.write
innerHTML
console.log
alert 


v8 js engine 
spidey monkey 

a=2;

a=a+5
a+=5;






Variables : variable is a named memory container which is used store, retrieve, manipulate the data in execution time of a program 

-> we can name variables using identifiers in js 


	identifier is a user defined name for a class/method/function/variable 
	-> identifier name can have both alphabets and digits
	-> name cannot start with digit 
	-> we can have only _, $ as a special chars 
	-> identifier name cannot be reserved keywords
	-> identifiers are case sensitive 	

Camel case : userName 

-> two types of variables local variable, Global variables 


Global variable : a variable which declared outside of a method/function/block of code
-> global variable in js declared with var keyword 

Local variable : a variable which declared inside of a blockof scope/method/function 
-> local variable in js declared with let keyword 

Hoisting : the concept of moving all the declarations to the top of the scope 
-> we can declare variables after its usage
-> we can perform hoisting only with var keyword because of TDZ  

TDZ : temporal dead zone : the time period between a block scope variable declaration and its initialization, in this time accessing of variable can throw an error 


Datatypes :  var, let, const 

	int, float, Boolean, Strings, chars, Array, Class, object, date 

	var a=5;
	var b=5.3;
	var c="String"
	var d=true

why javascript assigns data type to a variable in run time ??

javascript is dynamically typed and it doesn't has primitive datatypes

Coercion : a type conversion in javascript which converts type of variable automatically 

implicit  : automatically it converts a variable datatype based on the data we are passing
explicit : we are forcing it to convert into a type

Operators :

2 types 

1. no of operands : unary, binary, ternary
	unary : one operand -> a++,--a
	binary: two operands -> a+b
	ternary : conditional -> two or more operands involved in operation

2. type of operations : arithmetic, relational, logical, assignment, bitwise, increment/decrement, conditional

arithmetic : +, - , * ,/, %, **

a+b => addition 
a-b => subtraction
a*b => multiplication 
a/b => quotient 
a%b => reminder
a**b => 5**2 =>25


Relational : <, >, <=, >=, ==, ===, !=, !==

= : assigns the value

== : it compares value

=== : it compares value along with datatype 

!! : if the value is 0, null, undefined it returns false otherwise true (Boolean Equivalent)

Assignment : 
=, +=, -=, *=,...

a=a+5;
a+=5;

Logical : &&, ||, ! 

a>b && a>c => a is biggest 

a<b || a<c => a is not biggest 

a=true; 

b=!a;

Increment : 

a++, ++a
var b= a++(5) + ++a(7);


Conditional : when a condition has two possibilities 

c = a>b ? a:b

Bitwise : &, |, ^, ~  : to perform operations on binary numbers 

Bitwise AND(&) : whenever both bits are 1 it returns 1 otherwise 0
Bitwise OR (|) : whenever atleast one bit is 1 then it returns 1 otherwise 0
Bitwise XOR(^) : whenever both bits are different it returns 1 otherwise 0
Bitwise NOT (~) : 

32bit conversion :


<< =>  4<<2 => 4*2^n

>> => 4>>1 => 4/2^n



~ -4 =>  +3


5 | 7 => 


5=> 0101
7=> 0111 

=> 0010 = 7

2^0 = 1 => 1
2^1 = 2 => 1
2^2 = 4 => 1
2^3 = 8 => 0
2^4 = 16


marks > 90 "A"
marks > 80 "B"
marks < 80 "Fail"

Control Statements : the statement which is used to control the flow of execution of a program 

-> we have two types of control statements in js 
	->Conditional Statements 
	->Iterative Statements 
Conditional : used to execute different blocks of code using a condition 
if
if else
nested if else
if else ladder
switch 


if : if has a predicate if the predicate is true block will execute otherwise wont execute

if(condition)
{
//block of code 
}


Nested if else : 

if(condition 1)
	{
	if(condition 2)
		{
		}
	else{}
	}
else 
	{
	if(condition 4)
		{
		}
	else{}
	}
else if ladder : when we have a multiple possibilities for a conditional variable we use else if ladder 


if(day==0){
	console.log("sunday")
}
else if(day==1)
{
	console.log("monday")
}
else if(day==2)
{
	console.log("tuesday")
}
else if(day==3)
{
	console.log("wednesday")
}
else
{
	console.log("weekend")
}


switch : 










1,11,21,31,41,51,...121



(n*10)+1

n%10==0 => n+1


fact 



1900 /4 
1900/100


1
2
3

5

7
i=5;

i+=6

n%i

n%(i+2)

11

13



17

19



1 to 100 even sum 

While :  while is also entry controlled loop and we can use while loop when no of iterations are unknown 


init;

while(condition)
{
//body
Incr/Decr 
}

1234%10=>4
1234/10=>123  =>1
n=123/10 =>12 =>2
n=12/10=>1 =>3
n=1/10=>0=>4

1234/10 => 123.4 => 12.34


parseInt => parseInt(123.4) => 123

sum of digits : 
reverse number : 1234 = 4321

1230
str="";
rem=num%10;
rev=(rev*10)+rem
str+=rem;





palindrome => 121 =121

1234 => 1^4+2^+3^4+4^4 = armstrong

1234 => 1!+2!+3!+4! => strong


do while : exit controlled, when a block of codes wants to execute atleast once 


do {


   }
while(condition);

var i=0;
do
{
console.log(i);
i++
}
while(i<=10);




Functions : function a block of code which is reusable at anytime in the program execution 

-> simple function 
-> function with parameters
-> function with parameters and return 
-> IIF
-> Function expression
-> Arrow Functions 
-> callbacks
-> Higher order functions

simple function : 

function identifier(){


}

identifier();
-> simple functions can support hoisting 

currying : a technique where a function with multiple arguments transformed as a series of function with single parameter for each function 


Array : array is a collection of data in js, which works on index, the minimum index is 0 maximum index is n-1

-> JS array is dynamic in nature i.e., no need to specify the size

-> in two ways we can create array
	1. array with literals
	2. array with new reference

-> var nums=[12,5,7,30,42];
-> var nums = new Array();


Array methods :

push : we can add elements at the end of array
pop : we can remove element from end of array
shift : we can remove element from starting of an array
unshift:we can add element from starting of an array
splice : we can add or remove elements at any position of an array 
splice(position,no of elements,new elements )
delete
slice
sort(Strings,numbers)
indexOf : returns index of first occurance of element in array 
lastIndexOf : returns index of last occurance of element 

ES6 Methods 

forEach : we can apply a function to each element of an array by iterating them, forEach can modify the original array it cannot create new array

Map : we can apply a function to each element of an array by iterating them, map can create new array



filter : we can apply a function to each element in array and those elements which satisfies the given predicate will return to new array

findIndex : used to find the index of the element which satisfies the given condition  

reduce : used to get the cumulative value of all array elements by iterating them into function


find :used to find the element which satisfies the given condition 
join : n of array elements will convert as a string by using a delimiter 


concat



Create new array of lengths from existing array of strings ?


find the index of first even number and which is greater than 10 ?

find the sum of positive numbers in the array


print true if all the numbers of array is even


does js has any testing methods ?? yes => every, some 


every => to check all elements is satisfied with given condition 
some => to check atlest one element is satisfied with given condition 


"array is negative" 
"array is positive"

[1,2,2,7,7,12,30,42,30];


filter((ele,ind)=>arr.indexOf(ele)==ind) 

Strings : a group of characters enclosed in ''; "",``, strings can perform index based operations like arrays


String methods : 

length : to find the length of string
charAt : to get character at specific position
toUpperCase : to convert string into uppercase
toLowerCase : to convert string into lowercase

slice(start,end) : to create substring from start and ending index and it has negative values for backtracing

substring(start,end): to create substring from start and ending index and it doesn't have negative indexes

substr(start,length): 
indexOf : index of first occurrence of a string
lastIndexOf: index of last occurrence of a string
search: index of first occurrence of string matched with regex 
startsWith :
endsWith
includes
replace
padStart
padEnd
split




001
002
003
....
010
011
012
..
100



Objects : objects are basic datatype in js which is used to store collection of key:value pairs, it is mainly used to group related data together 

-> we can create objects in 4 types in js 
	->Object literal
	->new reference
	->functional constructor
	->classes 



-> object literal : 
	var student = {
			studentName:"John",
			studentAddress:"Hyd",
			studentMarks:85
			}

obj.property
student.studentName


-> object using new reference: 
	var student=new Object();
	student.studentName="John"
	student.studentAddress="Hyd"




student s1=new student();

var s1=new student();



s1={};

2. s1={this}

Object methods : a function that belongs to property of an object 
call, apply, bind

function call: used to borrow a function from one object to another, we can pass individual arguments as extra parameter
 
function apply : used to borrow a function from one object to another, we can pass extra parameters in the form of array

function bind : used to borrow a function but instead of executing directly it returns new instance of a function, we can pass individual arguments as extra parameter


array destructuring : the process of unpacking the values into individual variables from arrays


var arr=[12,7,5,30,42,46];

var [a,b]=arr;

REST : combining simplest parts into complex array 
SPREAD : dividing a complex array into simple parts 


timing functions in js : timing functions allows us to schedule code to execute after a delay or at regular time intervals


setInterval : we can execute a specific function for every specified time interval 
setTimeout : we can pause the execution of a function upto certain time

clearInterval : 

Event Loop:  is a fundamental concept of javascript to handle asynchronous operations by prioritizing single threaded nature of language
-> first executes callstack(line by line code)
->push web api requests, callbacks(setintervals, promises) into event loop 
-> after completion of callstack execution components of event loop will execute 


closure : the process of returning an inner function which has access to local variables of outer function 
-> by using closure we can use local variables of a function even its completes execution 



setTimeout(hello,5000)





class, object, inheritance : 

2022 private fields 

class is a container which can have variables, methods, constructors
-> we can create objects using class to have key:value pairs 
-> classes in JS doesn't support hoisting


Inheritance :  a child class can acquire the properties of its parent class, here we can use parent and child relation using extends keyword

method overriding : if we have a method with same name and parameters in both parent and child class

super: to call parent class methods, constructors 


callbacks, higher order functions
promises
async await
fetch 


callbacks : the function that passed as an argument to another function is called as callback function

higher order: the function which accepts another function as parameter is called as higher order functions














