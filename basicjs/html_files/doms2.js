var headline = document.querySelector('#tagline');
headline.style.color = 'yellow';

// use in odd number 
var odd = document.querySelectorAll('li:nth-child(odd)');

for(var i = 0; i<odd.length; i++){
    odd[i].style.backgroundColor = 'gray';
}

// use in even number 
var even = document.querySelectorAll('li:nth-child(odd)');

for(var i = 0; i<even.length; i++){
    even[i].style.backgroundColor = '#ccc';
}