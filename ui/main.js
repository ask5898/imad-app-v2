console.log('Loaded!');

var element=document.getElementById("text");
element.innerHTML="KISS MY ASS";


var img=document.getElementById("img");
var marginLeft=0;
function moveRight () {
    marginLeft=marginLeft+3;
    img.style.marginLeft=marginLeft+"px";
}
img.onclick = function() {
 var interval=setInterval(moveRight,20);
};


var button=document.getElementById("counter");
var counter=0;
button.onclick = function() {
    counter=counter+1;
    var span=document.getElementById("count");
    span.innerHTML=counter.toString();
};
