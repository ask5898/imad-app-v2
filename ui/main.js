console.log('Loaded!');

var element=document.getElementById("text");
element.innerHTML="KISS MY ASS";

//move the image
var img=document.getElementById("img");
var marginLeft=0;
function moveRight () {
    marginLeft=marginLeft+3;
    img.style.marginLeft=marginLeft+"px";
}
img.onclick = function() {
 var interval=setInterval(moveRight,20);
};