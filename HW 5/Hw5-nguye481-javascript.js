// Victor Nguyen CIS 444 [nguye481]
// HOMEWORK 5 Javascript #1
// This script is used in conjunction with HOMEWORK 5 HTML file,
// HOMEWORK 5 CSS file, HOMEWORK 5 JAVASCRIPT #2 file
// script is used to manipulate the picture of me.

// Function is used to move the picture to the user's cursor,
// also makes picture visible.
function movePicture(event)
{
    // Get the DOM addresses of the elements
    var photo = document.getElementById("pictureOfMe");
    // Change position of iamge
    photo.style.left = (event.clientX - 150) + "px";
    photo.style.top = (event.clientY - 230) + "px";
    // Make image visible
	photo.style.visibility = "visible";
}

// Function is used to hide picture once user release mouse button.
function hidePicture()
{
    // Get the DOM addresses of the elements
    var photo = document.getElementById("pictureOfMe");
    // Make image hidden
    photo.style.visibility = "hidden";
}