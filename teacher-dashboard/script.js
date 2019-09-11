/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log('hi');
var x = document.getElementById("hidden")
var style = x.style.visibility
var y = document.getElementById("hidden1")
console.log(y)
var track = 0
var track2 = 0
console.log(x)
function myFunction() {
  var x = document.getElementById("hidden");
  // x.style.visibility = "visible"
  var y = document.querySelector
  if (track%2 == 0) {
    x.style.visibility = "visible";
    track += 1
  } else {
    x.style.visibility = "hidden";
    track += 1
  }
}
function myFunction2() {
  var y = document.getElementById("hidden1");
  // x.style.visibility = "visible"
  if (track2%2 == 0) {
    y.style.visibility = "visible";
    track2 += 1
    console.log("hello")
  } else {
    y.style.visibility = "hidden";
    track2 += 1
  }
}
console.log("yo")