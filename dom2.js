// Examione the document objects//
//console.dir(document);
//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//console.log(document.head);
//console.log(document.all);
//console.log(document.all[10]);
//console.log(document.forms);

// GETelementby id

//console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
//console.log(headerTitle);
//headerTitle.textContent = 'Hello';
//headerTitle.innerText = ' Goodbye'
// header.style.borderBottom = 'solid 3px #000'

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// for(var i=0; i<items.length;i++){
//     items[i].style.backgroundColor = '#f4f4f4';
// }

// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// for(var i=0; i<li.length;i++){
//     li[i].style.backgroundColor = '#f4f4f4';
// }

// Queryselesctor //

// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World'

// var submit = document.querySelector('input[type="submit"]');
// submit.value="SEND"

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'pink';

// Queryselectorall //

// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for(var i=0; i<odd.length; i++){
//     odd[i].style.backgroundColor = 'green';
//     even[i].style.backgroundColor = '#ccc';
// }


// traversing the dom //

 var itemList = document.querySelector('#items');
// // parent node
// console.log(itemList.parentNode)
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode)

// parentElement
// console.log(itemList.parentElement)
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement)

// childnode

// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = ' green';

// // firstChild
// console.log(itemList.firstChild);

// // firstelement child
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'hello 1';


// lastChild
// console.log(itemList.lastChild);

// // lastelement child
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'hello 4';

// //nextsibling

// console.log(itemList.nextSibling);
// //nextelement sibling
// console.log(itemList.nextSibling);

//previous sibling
// console.log(itemList.previousSibling);
//  // previouselementsibling
//  console.log(itemList.previousElementSibling);

// createelement

// create div

var newDiv = document.createElement('div');

// add class
newDiv.className= 'hello';

// add id
newDiv.id = 'hello 1'

//add attr

newDiv.setAttribute('title', 'Hello Div')

//create text node
var newDivText = document.createTextNode('Hello World');

//add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector("header h1");


console.log(newDiv);



container.insertBefore(newDiv, h1)

