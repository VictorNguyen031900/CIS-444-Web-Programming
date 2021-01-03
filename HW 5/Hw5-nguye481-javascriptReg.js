// Victor Nguyen CIS 444 [nguye481]
// HOMEWORK 4 Javascript #2
// This script is used in conjunction with HOMEWORK 5 HTML file,
// HOMEWORK 5 CSS file, HOMEWORK 5 JAVASCRIPT #1 file
// script is used to register event listeners

//Get the DOM addresses of the elements
var bodyNode = document.getElementById("bodyMain");

//Register event listeners
bodyNode.addEventListener("mousedown", movePicture, false);
bodyNode.addEventListener("mouseup", hidePicture, false);