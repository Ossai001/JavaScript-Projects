// GLOBAL VARIABLE ASSIGNMENT

// This variable is global because it is declared outside a function.
var globalMessage = "I am a global variable.";

// This function can access the global variable.
function displayGlobalVariable() {
    console.log(globalMessage);
}

// Call the function.
displayGlobalVariable();


// LOCAL VARIABLE ASSIGNMENT

// This function contains a local variable.
function displayLocalVariable() {
    // This variable can only be accessed inside this function.
    var localMessage = "I am a local variable.";

    // Display the local variable in the console.
    console.log(localMessage);
}

// Call the function.
displayLocalVariable();


// DEBUGGING ASSIGNMENT

// This function intentionally tries to access localMessage outside
// the function in which it was declared.
function debugScopeError() {
    try {
        // This produces an error because localMessage is not available here.
        console.log(localMessage);
    } catch (error) {
        // Use console.log() to identify and explain the error.
        console.log("Debugging error: " + error.message);
        console.log(
            "The error occurred because localMessage is a local variable."
        );
    }
}

// Call the function containing the intentional error.
debugScopeError();