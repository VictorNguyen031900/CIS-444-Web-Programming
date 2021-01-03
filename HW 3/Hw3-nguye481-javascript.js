// Victor Nguyen CIS 444 [nguye481]
// HOMEWORK 3 Javascript
// This script is used in conjunction with HOMEWORK 3 HTML file
// and HOMEWORK 3 CSS file, script is used to display table.

// Function to be called to get Fibonacci number
// Parameter is the number entered by user
function fibonacci(userEntry){
    if(userEntry == 0)
    {
        return 0;
    }
    else if(userEntry == 1)
    {
        return 1;
    }
    else
    {
        // Recursive call
        return fibonacci(userEntry - 1) + fibonacci(userEntry - 2);
    }
};

// Pop up in browser for user to enter number
var userInput = prompt("Enter a number: ");

// Get input from user and put into if-statement
if(userInput <= 0)
{
    // Tell user that their input is invalid
    document.write("You entered a value equal to or less than 0! Try Again!");
}
else if(userInput > 40)
{
	document.write("You entered a value greater than 40! Try again!");
}
else
{
    // Display table
    // Start table tag
    document.write("<table>");
    document.write("<caption> A Table of Fibonacci Numbers </caption>");
    document.write("<tr> <th> n </th>", "<th> Fib(n) </th> </tr>");

    // For loop to call function and enter in data cells
    for(var count = 0; count <= userInput; count++)
    {
        document.write("<tr>", "<td>");
        document.write(count);
        document.write("</td>");
        document.write("<td>");
        document.write(fibonacci(count));
        document.write("</td>", "</tr>");
    }

    // End table tag
    document.write("</tr>", "</table>");
}