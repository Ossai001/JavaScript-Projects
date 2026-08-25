// CONCAT() METHOD ASSIGNMENT

// This function combines three strings using concat().
function createSentence() {
    let firstPart = "Learning JavaScript ";
    let secondPart = "is interesting ";
    let thirdPart = "and enjoyable!";

    // Combine the three string values.
    let completeSentence = firstPart.concat(secondPart, thirdPart);

    // Display the completed sentence.
    document.getElementById("combined_sentence").innerHTML =
        completeSentence;
}


// SLICE() METHOD ASSIGNMENT

// This function extracts part of a string using slice().
function sliceSentence() {
    // Create the original string.
    let originalSentence =
        "I am developing valuable JavaScript programming skills.";

    // Extract part of the original string.
    let selectedSection = originalSentence.slice(16, 55);

    // Display the original string and extracted section.
    document.getElementById("sliced_sentence").innerHTML =
        "Original string: " + originalSentence +
        "<br>Extracted section: " + selectedSection;
}


// TOUPPERCASE() METHOD CHALLENGE

// This function converts a string to uppercase.
function convertToUppercase() {
    // Create the original string.
    let originalText =
        "JavaScript is helping me become a better developer.";

    // Convert all letters to uppercase.
    let uppercaseText = originalText.toUpperCase();

    // Display the original and converted strings.
    document.getElementById("uppercase_sentence").innerHTML =
        "Original string: " + originalText +
        "<br>Uppercase string: " + uppercaseText;
}


// SEARCH() METHOD CHALLENGE

// This function searches for specified text within a string.
function searchSentence() {
    // Create the string that will be searched.
    let sentence = "JavaScript makes websites interactive.";

    // Search for the word "websites".
    let wordPosition = sentence.search("websites");

    // Display the sentence and position of the matching word.
    document.getElementById("search_result").innerHTML =
        "Sentence: " + sentence +
        "<br>The word \"websites\" begins at position " +
        wordPosition + ".";
}


// TOPRECISION() METHOD ASSIGNMENT

// This function formats a number using toPrecision().
function formatNumber() {
    // Assign a number to a variable.
    let originalNumber = 12345.6789;

    // Format the number to six significant digits.
    let preciseNumber = originalNumber.toPrecision(6);

    // Display the original number and formatted result.
    document.getElementById("precision_result").innerHTML =
        "Original number: " + originalNumber +
        "<br>Number formatted to six significant digits: " +
        preciseNumber +
        "<br>Returned data type: " + typeof preciseNumber;
}


// TOFIXED() METHOD CHALLENGE

// This function formats a number using toFixed().
function formatDecimalNumber() {
    // Assign a decimal number to a variable.
    let originalPrice = 98.4567;

    // Format the number to two digits after the decimal point.
    let fixedPrice = originalPrice.toFixed(2);

    // Display the original number and formatted result.
    document.getElementById("fixed_result").innerHTML =
        "Original number: " + originalPrice +
        "<br>Number formatted to two decimal places: " +
        fixedPrice +
        "<br>Returned data type: " + typeof fixedPrice;
}


// VALUEOF() METHOD CHALLENGE

// This function retrieves the primitive value of a Number object.
function getPrimitiveValue() {
    // Create a Number object.
    let numberObject = new Number(250);

    // Extract its primitive numerical value.
    let primitiveValue = numberObject.valueOf();

    // Display the object value and primitive result.
    document.getElementById("value_result").innerHTML =
        "Number object value: " + numberObject +
        "<br>Primitive value: " + primitiveValue +
        "<br>Returned data type: " + typeof primitiveValue;
}