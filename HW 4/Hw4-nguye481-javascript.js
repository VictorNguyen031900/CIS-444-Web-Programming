// Victor Nguyen CIS 444 [nguye481]
// HOMEWORK 4 Javascript #1
// This script is used in conjunction with HOMEWORK 4 HTML file,
// HOMEWORK 4 CSS file, HOMEWORK 4 JAVASCRIPT #2 file
// script is used to calculate if the user entered a valid input
// and calculates the total cost of the fruit

//Function to be called to calculate the total
//Parameter is the event that was activated
function calculateTotal(event)
{
    var calculateFruits = event.currentTarget;
    //Initialize variables
    var cost = 0;
    var totalCost = 0;
    //Get the DOM addresses of the elements
    var appleNode = document.getElementById("apple");
    var orangeNode = document.getElementById("orange");
    var bananaNode = document.getElementById("banana");
    //Calculate total, add 7.75% sales tax to total, and set to two decimal points
    cost = (appleNode.value * 0.59) + (orangeNode.value * 0.49) + (bananaNode.value * 0.39);
    cost = cost * 1.0775;
    totalCost = parseFloat(cost.toFixed(2));
    //Display alert of the total cost to the user
    alert("Your total cost is $" + totalCost + ".\n" + "This includes 7.75% sales tax. ");

    event.preventDefault();
    return false;
}

//Function to be called to verify user's input
//Parameter is the event that was activated
function verifyIn(event)
{
    //Simplify to get object
    var fruit = event.currentTarget;
    //Simplify to get value of object
    var fruitValue = fruit.value;
    //Simplify to get ID of object
    var fruitId = fruit.id;
    //Check the ID of the object and check if user input is in range
    if(fruitId == "apple")
    {
        if(fruitValue < 0 || fruitValue > 99 || isNaN(fruitValue))
        {
            alert("Invalid quantity for apples! \n" + "Please enter a number between 0 and 99.");
            fruit.value = "";
            fruit.focus();
            return false;
        }
    }
    else if(fruitId == "orange")
    {
        if(fruitValue < 0 || fruitValue > 99 || isNaN(fruitValue))
        {
            alert("Invalid quantity for oranges! \n" + "Please enter a number between 0 and 99.");
            fruit.value = "";
            fruit.focus();
            return false;
        }
    }
    else if(fruitId == "banana")
    {
        if(fruitValue < 0 || fruitValue > 99 || isNaN(fruitValue))
        {
            alert("Invalid quantity for bananas! \n" + "Please enter a number between 0 and 99.");
            fruit.value = "";
            fruit.focus();
            return false;
        }
    }

    event.preventDefault();
    return true;
}