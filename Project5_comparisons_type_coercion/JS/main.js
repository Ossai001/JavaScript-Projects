// TYPEOF OPERATOR ASSIGNMENT

// Assign a string value to a variable.
var courseName = "JavaScript Course";

// Determine the variable's data type.
var dataType = typeof courseName;

// Display the variable and its data type.
document.write(
    "<h2>Typeof Operator Result</h2>" +
    "<p>Variable value: " + courseName + "</p>" +
    "<p>Data type: " + dataType + "</p>"
);


// TYPE COERCION ASSIGNMENT

// Assign a string and a number.
var textNumber = "10";
var actualNumber = 5;

// JavaScript converts the number into a string.
var coercionResult = textNumber + actualNumber;

// Display the type coercion result.
document.write(
    "<h2>Type Coercion Result</h2>" +
    "<p>\"10\" + 5 = " + coercionResult + "</p>" +
    "<p>JavaScript converted the number into a string.</p>"
);


// NAN CHALLENGE

// Dividing zero by zero produces NaN.
var notANumberResult = 0 / 0;

document.write(
    "<h2>NaN Results</h2>" +
    "<p>Zero divided by zero: " + notANumberResult + "</p>"
);

// A text value is not a valid number, so this returns true.
var trueResult = isNaN("JavaScript");

document.write(
    "<p>Is \"JavaScript\" not a number? " + trueResult + "</p>"
);

// The value 25 is a valid number, so this returns false.
var falseResult = isNaN(25);

document.write(
    "<p>Is 25 not a number? " + falseResult + "</p>"
);


// INFINITY ASSIGNMENT

// Create and display positive Infinity.
var positiveInfinity = 2E310;

document.getElementById("PositiveInfinity").innerHTML =
    "Positive value: " + positiveInfinity;

// Create and display negative Infinity.
var negativeInfinity = -2E310;

document.getElementById("NegativeInfinity").innerHTML =
    "Negative value: " + negativeInfinity;


// BOOLEAN ASSIGNMENT

// This comparison returns true.
var greaterThanResult = 20 > 10;

document.getElementById("TrueBoolean").innerHTML =
    "Is 20 greater than 10? " + greaterThanResult;

// This comparison returns false.
var lessThanResult = 30 < 15;

document.getElementById("FalseBoolean").innerHTML =
    "Is 30 less than 15? " + lessThanResult;


// CONSOLE.LOG() ASSIGNMENT

// Perform multiplication and display the result in the console.
console.log("The result of 14 × 6 is:", 14 * 6);


// BOOLEAN CHALLENGE

// This Boolean expression displays false in the console.
console.log(25 < 10);


// DOUBLE EQUAL SIGNS ASSIGNMENT

// The values match after type coercion.
var equalTrueResult = 10 == "10";

document.getElementById("EqualTrue").innerHTML =
    "Does 10 equal \"10\" using ==? " + equalTrueResult;

// These values do not match.
var equalFalseResult = 10 == 7;

document.getElementById("EqualFalse").innerHTML =
    "Does 10 equal 7 using ==? " + equalFalseResult;


// TRIPLE EQUAL SIGNS ASSIGNMENT

// Same data type and same value returns true.
var strictTrueResult = 10 === 10;

document.getElementById("StrictTrue").innerHTML =
    "10 === 10: " + strictTrueResult +
    " — same data type and same value.";

// Different data type and different value returns false.
var differentTypeValueResult = 10 === "20";

document.getElementById("DifferentTypeValue").innerHTML =
    "10 === \"20\": " + differentTypeValueResult +
    " — different data type and different value.";

// Different data type but the same value returns false.
var differentTypeSameValueResult = 10 === "10";

document.getElementById("DifferentTypeSameValue").innerHTML =
    "10 === \"10\": " + differentTypeSameValueResult +
    " — different data type but the same value.";

// Same data type but different values returns false.
var sameTypeDifferentValueResult = 10 === 20;

document.getElementById("SameTypeDifferentValue").innerHTML =
    "10 === 20: " + sameTypeDifferentValueResult +
    " — same data type but different values.";


// AND OPERATOR ASSIGNMENT

// Both comparisons are true, so this returns true.
var andTrueResult = 5 < 10 && 20 > 15;

document.getElementById("AndTrue").innerHTML =
    "5 < 10 AND 20 > 15: " + andTrueResult;

// One comparison is false, so this returns false.
var andFalseResult = 5 < 10 && 20 < 15;

document.getElementById("AndFalse").innerHTML =
    "5 < 10 AND 20 < 15: " + andFalseResult;


// OR OPERATOR ASSIGNMENT

// One comparison is true, so this returns true.
var orTrueResult = 5 > 10 || 20 > 15;

document.getElementById("OrTrue").innerHTML =
    "5 > 10 OR 20 > 15: " + orTrueResult;

// Both comparisons are false, so this returns false.
var orFalseResult = 5 > 10 || 20 < 15;

document.getElementById("OrFalse").innerHTML =
    "5 > 10 OR 20 < 15: " + orFalseResult;


// NOT OPERATOR ASSIGNMENT

// 5 > 10 is false. The NOT operator reverses it to true.
var notTrueResult = !(5 > 10);

document.getElementById("NotTrue").innerHTML =
    "NOT (5 > 10): " + notTrueResult;

// 20 > 10 is true. The NOT operator reverses it to false.
var notFalseResult = !(20 > 10);

document.getElementById("NotFalse").innerHTML =
    "NOT (20 > 10): " + notFalseResult;