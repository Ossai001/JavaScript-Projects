// This function creates two variables and combines their values.
function displayMessage() {
    var firstSentence = "Hello! ";
    var secondSentence =
        "This message was created using a JavaScript function.";

    // Display the combined values in the paragraph.
    document.getElementById("message").innerHTML =
        firstSentence + secondSentence;
}

// This function demonstrates the += concatenation operator.
function buildDeveloperMessage() {
    // Assign the beginning of the message to a variable.
    var developerText = "I am developing my JavaScript skills";

    // Use += to add another string to the existing value.
    developerText += " by completing practical coding projects.";

    // Display the completed string in the selected HTML element.
    document.getElementById("developer-message").innerHTML =
        developerText;
}

// This function calculates and displays a project score.
function calculateProjectScore() {
    // Assign two number values to variables.
    var htmlScore = 40;
    var javaScriptScore = 50;

    // Add the two scores together.
    var totalScore = htmlScore + javaScriptScore;

    // Find the HTML element by its ID and display the result.
    document.getElementById("challenge-result").innerHTML =
        "Your total project score is " + totalScore + " points.";
}