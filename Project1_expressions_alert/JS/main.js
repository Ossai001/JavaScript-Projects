// Create the first string variable.
var Sent1 = "This is the beginning of the string";

// Create the second string variable.
var Sent2 = " and this is the end of the string";

// Concatenate the two variables.
var completeSentence = Sent1 + Sent2;

// Display the concatenated string in an alert box.
window.alert(completeSentence);

// Display the concatenated string on the webpage.
document.write("<p>" + completeSentence + "</p>");

// Create a mathematical expression.
var result = 10 + 5;

// Display the result of the expression.
document.write("<p>The result of 10 + 5 is " + result + ".</p>");

// This function runs when the user double-clicks the button.
function displayMessage() {
    document.getElementById("event-message").innerHTML =
        "The ondblclick event was successfully executed!";
}