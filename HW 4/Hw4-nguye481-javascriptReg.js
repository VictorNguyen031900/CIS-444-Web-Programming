// Victor Nguyen CIS 444 [nguye481]
// HOMEWORK 4 Javascript #2
// This script is used in conjunction with HOMEWORK 4 HTML file,
// HOMEWORK 4 CSS file, HOMEWORK 4 JAVASCRIPT #1 file
// script is used to register event listeners

//Get the DOM addresses of the elements
var appleNode = document.getElementById("apple");
var orangeNode = document.getElementById("orange");
var bananaNode = document.getElementById("banana");
var submitNode = document.getElementById("submitButton");

//Register event listeners
appleNode.addEventListener("change", verifyIn, false);
orangeNode.addEventListener("change", verifyIn, false);
bananaNode.addEventListener("change", verifyIn, false);
submitNode.addEventListener("click", calculateTotal, false)