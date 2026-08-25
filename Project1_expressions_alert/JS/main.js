// GLOBAL VARIABLE ASSIGNMENT

// This is a global variable because it is declared outside a function.
var globalMessage = "I am a global variable.";

// This function accesses the global variable.
function displayGlobalVariable() {
    console.log(globalMessage);
}

// Execute the function.
displayGlobalVariable();


// LOCAL VARIABLE ASSIGNMENT

// This function contains a local variable.
function displayLocalVariable() {
    // This variable is only accessible inside this function.
    var localMessage = "I am a local variable.";

    // Display the local variable in the browser console.
    console.log(localMessage);
}

// Execute the function.
displayLocalVariable();


// DEBUGGING ASSIGNMENT

// This function intentionally attempts to access localMessage outside
// the function where it was declared.
function debugScopeError() {
    try {
        // This causes an error because localMessage is unavailable here.
        console.log(localMessage);
    } catch (error) {
        // Display and explain the error in the console.
        console.log("Debugging error: " + error.message);

        console.log(
            "The error occurred because localMessage is a local variable."
        );
    }
}

// Execute the debugging function.
debugScopeError();


// DATE METHOD ASSIGNMENT

// This function displays a message based on the current hour.
function displayTimeMessage() {
    // Obtain the current hour.
    var currentHour = new Date().getHours();

    // Create a variable to store the message.
    var message;

    // Display a morning message before midday.
    if (currentHour < 12) {
        message = "Good morning! The current hour is " +
            currentHour + ":00.";
    }

    // Display an afternoon message before 6 p.m.
    else if (currentHour < 18) {
        message = "Good afternoon! The current hour is " +
            currentHour + ":00.";
    }

    // Display an evening message from 6 p.m. onward.
    else {
        message = "Good evening! The current hour is " +
            currentHour + ":00.";
    }

    // Display the message in the HTML paragraph.
    document.getElementById("TimeMessage").innerHTML = message;
}


// IF STATEMENT ASSIGNMENT

// This function contains an original if statement.
function checkProjectProgress() {
    // Store the number of completed JavaScript projects.
    var completedProjects = 7;

    // Run this code when seven or more projects have been completed.
    if (completedProjects >= 7) {
        document.getElementById("ProgressMessage").innerHTML =
            "Excellent progress! You have completed " +
            completedProjects + " JavaScript projects.";
    }
}


// IF AND ELSE STATEMENT ASSIGNMENT

// This function checks whether the daily study target was reached.
function checkStudyHours() {
    // Retrieve and convert the value entered by the user.
    var hoursStudied =
        Number(document.getElementById("StudyHours").value);

    // Run this code when the user studied for two hours or more.
    if (hoursStudied >= 2) {
        document.getElementById("StudyAdvice").innerHTML =
            "Excellent work! You achieved your JavaScript study target.";
    }

    // Run this code when the user studied for fewer than two hours.
    else {
        document.getElementById("StudyAdvice").innerHTML =
            "Keep going! Try to study for at least two hours today.";
    }
}


// ELSE IF ASSIGNMENT

// This function returns a greeting based on the current time.
function Time_function() {
    // Get the current hour from the user's device.
    var Time = new Date().getHours();

    // Create a variable to store the reply.
    var Reply;

    // Run this code between midnight and before midday.
    if (Time >= 0 && Time < 12) {
        Reply = "It is morning time!";
    }

    // Run this code between midday and before 6 p.m.
    else if (Time >= 12 && Time < 18) {
        Reply = "It is afternoon.";
    }

    // Run this code from 6 p.m. until midnight.
    else {
        Reply = "It is evening time.";
    }

    // Display the reply in the paragraph with the matching ID.
    document.getElementById("Time_of_day").innerHTML = Reply;
}