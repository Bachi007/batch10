
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

