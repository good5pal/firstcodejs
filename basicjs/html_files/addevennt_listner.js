/* mouse over */
document.getElementById('img1').onmouseover = abc ;
    function abc(){
        document.getElementById('img1').style.filter="grayscale(0%)";
    }
/* mouse out */
document.getElementById('img1').onmouseout = xyz ;
    function xyz(){
        document.getElementById('img1').style.filter="grayscale(100%)";
    }

/* use === addeventlistener === */

/* for img2  */
document.getElementById('img2').addEventListener("mouseover",function(){
    this.style.filter = "grayscale(0%)";
});
document.getElementById('img2').addEventListener("mouseout",function(){
    this.style.filter = "grayscale(100%)";
});