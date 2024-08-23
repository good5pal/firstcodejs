// specify if id # and class than .
var headline = document.querySelector('#tagline'); // #id
headline.style.color = 'blue'; // color change <p></p>

//=====
// now how to heandle class 
var items1 = document.querySelector('.list_item');
// or also use this
var items1 = document.querySelector('li');

var items1 = document.querySelector('li:nth-child(3)');
// use queryselector() then write child for index
// if we want any index then use queryselectorall()


items1.style.backgroundColor = 'yellow';
// . for class
// only queryselector() use first index
items1.style.color = 'red';

// if we want any index then use queryselectorall()
// 1
// any index value change
var items1 = document.querySelectorAll('.list_item');
items1[3].style.color = 'red';
items1[1].style.backgroundColor = 'green'

// 2
// if not use queryselectorall() than second method
var items1 = document.querySelector('.list_item:last-child');
items1.style.color = 'blue';

// how to acess tag <h1><p>
var input =  document.querySelector('input');
input.value = 'enter your name';

var button = document.querySelector('input[type="submit"]'); // use []
button.style.backgroundColor = 'red';
button.style.color = 'yellow';
button.value = 'send';


// ===== queryselectorall() =======
