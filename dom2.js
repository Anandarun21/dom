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

var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'hello 2';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow';

for(var i=0; i<items.length;i++){
    items[i].style.backgroundColor = '#f4f4f4';
}