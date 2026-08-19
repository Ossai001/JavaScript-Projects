// This function performs an addition operation.
function calculateAddition() {
    var firstNumber = 25;
    var secondNumber = 15;
    var result = firstNumber + secondNumber;

    // Display the addition result.
    document.getElementById("Math").innerHTML =
        "25 + 15 = " + result;
}

// This function performs a subtraction operation.
function calculateSubtraction() {
    var firstNumber = 50;
    var secondNumber = 18;
    var result = firstNumber - secondNumber;

    // Display the subtraction result.
    document.getElementById("Subtraction").innerHTML =
        "50 - 18 = " + result;
}

// This function performs a multiplication operation.
function calculateMultiplication() {
    var firstNumber = 12;
    var secondNumber = 6;
    var result = firstNumber * secondNumber;

    // Display the multiplication result.
    document.getElementById("Multiplication").innerHTML =
        "12 × 6 = " + result;
}

// This function performs a division operation.
function calculateDivision() {
    var firstNumber = 81;
    var secondNumber = 9;
    var result = firstNumber / secondNumber;

    // Display the division result.
    document.getElementById("Division").innerHTML =
        "81 ÷ 9 = " + result;
}

// This function performs a calculation using multiple operators.
function calculateMultipleOperators() {
    var result = (10 + 5) * 4 / 2 - 6;

    // Display the completed calculation.
    document.getElementById("MultipleOperators").innerHTML =
        "(10 + 5) × 4 ÷ 2 - 6 = " + result;
}

// This function uses the modulus operator to find a remainder.
function calculateModulus() {
    var result = 29 % 6;

    // Display the modulus result.
    document.getElementById("Modulus").innerHTML =
        "When 29 is divided by 6, the remainder is " + result + ".";
}

// This function uses the unary negation operator.
function calculateNegation() {
    var positiveNumber = 20;
    var negativeNumber = -positiveNumber;

    // Display the negation result.
    document.getElementById("Negation").innerHTML =
        "The negation of " + positiveNumber + " is " + negativeNumber + ".";
}

// This function uses the increment operator.
function calculateIncrement() {
    var number = 10;

    // Increase the number by one.
    number++;

    // Display the incremented value.
    document.getElementById("Increment").innerHTML =
        "After incrementing 10, the result is " + number + ".";
}

// This function uses the decrement operator.
function calculateDecrement() {
    var number = 10;

    // Decrease the number by one.
    number--;

    // Display the decremented value.
    document.getElementById("Decrement").innerHTML =
        "After decrementing 10, the result is " + number + ".";
}

// This function generates a random whole number from 1 to 100.
function generateRandomNumber() {
    // Math.random() generates a decimal from 0 up to, but not including, 1.
    var randomNumber = Math.floor(Math.random() * 100) + 1;

    // Display the randomly generated number.
    document.getElementById("Random").innerHTML =
        "Your random number is " + randomNumber + ". Click again for another.";
}

// This function demonstrates a JavaScript Math object method.
function calculateSquareRoot() {
    var number = 144;

    // Math.sqrt() calculates the square root of the supplied number.
    var result = Math.sqrt(number);

    // Display the result of the Math.sqrt() method.
    document.getElementById("SquareRoot").innerHTML =
        "The square root of " + number + " is " + result + ".";
}