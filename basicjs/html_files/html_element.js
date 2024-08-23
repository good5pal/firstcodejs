// create div
var newdiv = document.createElement('div');
//console.log(newdiv);

// add class
newdiv.className = 'box';

// add id
newdiv.id = 'textbox';

// create text node
var newdivtext = document.createTextNode('Hi, This is my first html element create in javascript file.')

// add text to div
newdiv.appendChild(newdivtext);
// text append in newdivtext

//console.log(newdiv);

// === now in body ===

var container = document.querySelector('#contant');// id
var form = document.querySelector('form'); // tag
newdiv.style.color = 'red';
newdiv.style.backgroundColor = 'yellow';
newdiv.style.padding = '10px';
newdiv.style.margin = '10px';

container.insertBefore(newdiv,form);
