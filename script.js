document.getElementById("square1").addEventListener("dblclick", function() {
  document.getElementById("square1").style.backgroundColor = "green";
});

document.getElementById("square1").addEventListener("mousedown", function() {
  document.getElementById("square1").style.backgroundColor = "red";
});

document.getElementById("square1").addEventListener("mouseup", function() {
  document.getElementById("square1").style.backgroundColor = "yellow";
});

document.getElementById("square1").addEventListener("mouseover", function() {
  document.getElementById("square1").style.backgroundColor = "blue";
});

document.body.addEventListener("wheel", function() {
  document.getElementById("square1").style.backgroundColor = "orange";
});