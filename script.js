// window.onload = function() {

var figure = document.getElementById("figure");
var sizeInput = document.getElementById("size");
var circleInput = document.getElementById("isCircle");
var colorInput = document.getElementById("isColor");

colorInput.onchange = function(){
  var color=colorInput.value;
  setColor(color);
}
function setColor(newColor) {
  figure.style.backgroundColor = newColor;
}

sizeInput.onchange = function(){
  var size=sizeInput.value;
  setSize(size);
}

function setSize(pixelSize)  {
  figure.style.width = pixelSize + "px";
  figure.style.height = pixelSize + "px";
}

circleInput.onchange = function() {
  var isCircle=circleInput.checked;
  setCircle(isCircle);
}

function setCircle(isCircle) {
  if (isCircle) {
    figure.classList.add("circle");
  } else {
    figure.classList.remove("circle");
  }
}
}
