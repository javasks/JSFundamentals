/* console.log(document.images)
console.log(document.title)
console.log(document.all[2])
document.all[2].textContent='hello hi' */


/* 

console.log(document.doctype.name)
console.log(document.forms)
console.log(document.links)
console.log(document.images)
 */

 /* //getElementByID
 console.log(document.getElementById('workWithDown'))
var test= document.getElementById('workWithDown')
//test.textContent="hellogjh"
test.innerHTML='<h3>hello dude how are you</h3>'
test.style.borderBottom='solid 13px #000'
var mainheader= document.getElementById('main-header')
mainheader.style.borderBottom='solid 13px #000'  */ 
 /* //getElementByClassName
var listElemBy=document.getElementsByClassName('todo')
listElemBy[2].style.backgroundColor='green'
console.log(listElemBy)
console.log(listElemBy[1])
listElemBy[1].textContent='hello bro'
listElemBy[1].style.fontWeight='bold'
listElemBy[1].style.backgroundColor='red'
//this will give you error::listElemBy.style.backgroundColor='yellow'
 for(var i=0;i<listElemBy.length;i++){
    listElemBy[i].style.backgroundColor='yellow'
}  */

 //GetElementsBYtagname
/* var li=document.getElementsByTagName('li')
console.log(li)
console.log(li[1])
//li[1].textContent='hello bro'
//li[1].style.fontWeight='bold'
//li[1].style.backgroundColor='red'
/* for(var i=0;i<li.length;i++){
    li[i].style.backgroundColor='yellow'
} */ 

 //Query Selector
/* var headerVar=document.querySelector('#main-header')
headerVar.style.borderBottom= 'style 4px #ccc'

var inputVar=document.querySelector('input')
inputVar.value='hellow how are u'

var submitVar=document.querySelector('input[type=submit]')
submitVar.value="hey please submit"

var listVar=document.querySelector('.todo')
listVar.style.color='green'

var querSelectorAllVar=document.querySelectorAll('.test')
console.log(querSelectorAllVar);
querSelectorAllVar[0].textContent='hey how r u'

var odd=document.querySelectorAll('li:nth-child(odd)')
var even=document.querySelectorAll('li:nth-child(even)')

for(var i=0; i<odd.length; i++){
    odd[i].style.backgroundColor='red'
    even[i].style.backgroundColor='green'
} 
 */
/*  //DOM Traversal
var itemList=document.querySelector('#listID')
console.log(itemList.parentNode.parentNode.parentNode)
itemList.parentNode.style.backgroundColor='red' */ 

/*  //Parent Element
var itemList=document.querySelector('#listID')
console.log(itemList.parentElement)
itemList.parentElement.style.backgroundColor='red'  */

 /* //Child node-first child and last child
var itemList=document.querySelector('#ulList')
console.log(itemList.children)
console.log(itemList.children[1])
itemList.children[1].style.backgroundColor='red'
console.log(itemList.firstChild)
itemList.firstChild.textContent='hello'
console.log(itemList.lastChild) */ 

//siblings
/* var itemList=document.querySelector('#ulList')
console.log(itemList.nextSibling)
console.log(itemList.previousSibling)
console.log(itemList.previousElementSibling) */

/*   //creating an element
var mydiv=document.createElement('div')
mydiv.className='testClass'
mydiv.id='testdiv'
mydiv.setAttribute('title','mynewdivdude')
//create text node
var myDivText=document.createTextNode('hello kdsjflfkd')
//add text to div
mydiv.appendChild(myDivText)
//console.log(mydiv);
var containerVar=document.querySelector('.test')
console.log(containerVar)
//console.log(mydiv);
containerVar.insertBefore(mydiv,containerVar.childNodes[0])  */ 

 /* document.getElementById('idButton').addEventListener('click',function(){
    console.log('clicked')
})  */

 /* var button=document.getElementById('idButton').addEventListener('click',buttonCLick)
function buttonCLick(){
    console.log("buttonCLicked")
    var test= document.getElementById('workWithDown')

test.textContent="I am in event call"
test.innerHTML='<h3>hello dude I am in event call</h3>'
test.style.borderBottom='solid 3px #000'
}  */

 /* var button=document.getElementById('idButton').
addEventListener('click',buttonCLick)
function buttonCLick(e){
    console.log(e)
    console.log(e.target)
    console.log(e.target.className)
    console.log(e.target.classList)
    console.log(e.type)
    console.log(e.clientX)
    console.log(e.clientY)
    console.log(e.shiftKey)
}  */

 var button=document.getElementById('idButton')
var boxID=document.getElementById('boxId')
 var formInput=document.querySelector('input[type="text"]')
var form=document.querySelector('form')
console.log(formInput)
console.log(form) 
var bodyid=document.getElementById('main-header')
//button.addEventListener('click',buttonCLick)
//button.addEventListener('dblclick',buttonCLick)
//button.addEventListener('mousedown',buttonCLick)
//button.addEventListener('mouseup',buttonCLick)
//boxID.addEventListener('mouseenter',buttonCLick)
boxID.addEventListener('mouseleave',buttonCLick)
//boxID.addEventListener('mouseover',buttonCLick)
//boxID.addEventListener('mouseout',buttonCLick)
//boxID.addEventListener('mousemove',buttonCLick)
function buttonCLick(e){    
    //console.log(e.type)
    boxID.style.backgroundColor="rgb("+e.offsetX+","+e.offsetY+",40)"
   //console.log(e.offsetX)
   //console.log(e.offsetY)
   //console.log(e.target.value)
} 