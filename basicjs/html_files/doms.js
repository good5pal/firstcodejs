// =====   getelementbyid() =====
var headertitle =document.getElementById('header_title'); // given in html file
// console.log(headertitle);

// we can change header title
headertitle.textContent = "All New Courses"
// now change in document we see
// console.log(headertitle);

// also use this option
headertitle.innerText = "New Courses"
console.log(headertitle);

// now change inner html tag like h2 to h1
headertitle.innerHTML = "<h1>New Courses</h1>"

// now add css style
var header = document.getElementById('header'); // header id in html

header.style.borderBottom = "3px solid #000"; // in css = border-bottom use
// ======== end id ========

// ===== getenementsbyclassname() =====
 var items = document.getElementsByClassName('list_item');
 // 1
// console.log(items[1]); // show index
// ===

items[1].textContent = 'Animation';
// 2
// change item name Web Clouding to animation
// ===

items[0].textContent = 'Ai'; 
// 3
// change item name graphics to ai
// ===

items[2].style.fontWeight = 'bold';
// 4
// in fontweight use w capital

items[3].style.color = 'red';
// 5
// color change

items[2].style.backgroundColor = 'yellow';
// 6
// in backgroungcolor c capital
// change bgcolor

// ==
// multiple bg color change
// with calss name
for(let i = 0; i < items.length; i++){
    items[i].style.backgroundColor = 'yellow';
}
// ==

// ======== getelementbytagname() =========
// with tag name <li></li>
// same use class name and class name
var li = document.getElementsByTagName('li');

li[0].textContent = "abcd";
// change ai to abcd
for(let i = 0; i < items.length; i++){
    li[i].style.backgroundColor = 'yellow';
}


/////// ==============
// 41
// ===== querySelector() =====
// any selecter easy access
