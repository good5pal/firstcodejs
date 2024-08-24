// turn on function
function bulbon(){
    let bulbobj = document.querySelector('.bulb-off');
    bulbobj.setAttribute("src","bulb_on.jpg");
    // img show here like ("src","bulb_on.jpg");
    // dont write full image path
}

// turn off function
function bulboff(){
    let bulbobj = document.querySelector('.bulb-off');
    bulbobj.setAttribute("src","bulb_off.jpg");
}