// WHILE LOOP ASSIGNMENT

// This function executes a while loop.
function Call_Loop() {
    // Begin counting from one.
    var number = 1;

    // Create an empty string to hold the results.
    var result = "";

    // Continue running the loop while number is 10 or less.
    while (number <= 10) {
        // Add the current number to the result.
        result += "The current number is " + number + ".<br>";

        // Increase the number by one after each loop.
        number++;
    }

    // Display the completed loop.
    document.getElementById("Loop").innerHTML = result;
}


// STRING LENGTH PROPERTY CHALLENGE

// This function calculates the length of a string.
function displayStringLength() {
    // Assign a string value to a variable.
    var message = "I am improving my JavaScript programming skills.";

    // Count all characters in the string.
    var numberOfCharacters = message.length;

    // Display the string and its total length.
    document.getElementById("StringLength").innerHTML =
        "String: " + message +
        "<br>Number of characters: " + numberOfCharacters;
}


// FOR LOOP ASSIGNMENT

// Create an array containing different musical instruments.
var Instruments = [
    "Guitar",
    "Piano",
    "Drums",
    "Violin",
    "Saxophone",
    "Trumpet"
];

// This function uses a for loop to display every instrument.
function for_Loop() {
    // Create an empty string to hold the instrument list.
    var instrumentList = "";

    // Loop through every item in the Instruments array.
    for (var index = 0; index < Instruments.length; index++) {
        // Add the current instrument to the list.
        instrumentList += Instruments[index] + "<br>";
    }

    // Display the completed list.
    document.getElementById("List_of_Instruments").innerHTML =
        instrumentList;
}


// ARRAY AND INNERHTML ASSIGNMENT

// This function creates an array and displays its values.
function array_Function() {
    // Create an array containing development tools.
    var developmentTools = [
        "Visual Studio Code",
        "GitHub",
        "JavaScript",
        "HTML",
        "CSS"
    ];

    // Display the values stored in the array.
    document.getElementById("Array").innerHTML =
        "My coding tools include:<br>" +
        developmentTools[0] + "<br>" +
        developmentTools[1] + "<br>" +
        developmentTools[2] + "<br>" +
        developmentTools[3] + "<br>" +
        developmentTools[4];
}


// CONST KEYWORD ASSIGNMENT

// Create an object using the const keyword.
const developerProfile = {
    name: "Jim",
    primaryLanguage: "HTML",
    completedProjects: 9
};

// This function changes and adds properties to the const object.
function constant_function() {
    // Change an existing property.
    developerProfile.primaryLanguage = "JavaScript";

    // Add a new property.
    developerProfile.currentProject = "Loops and Arrays";

    // Display the changed and added property values.
    document.getElementById("Constant").innerHTML =
        developerProfile.name +
        " now uses " +
        developerProfile.primaryLanguage +
        " as his primary programming language." +
        "<br>Current project: " +
        developerProfile.currentProject +
        "." +
        "<br>Completed projects: " +
        developerProfile.completedProjects +
        ".";
}


// LET KEYWORD ASSIGNMENT

// This function demonstrates the let keyword.
function let_Function() {
    // Declare a variable using let.
    let completedLessons = 8;

    // Change the value of the let variable.
    completedLessons = completedLessons + 2;

    // Create another block-scoped variable.
    if (completedLessons >= 10) {
        let progressMessage =
            "Excellent work! You have completed " +
            completedLessons +
            " JavaScript lessons.";

        // Display the let variable values.
        document.getElementById("LetResult").innerHTML =
            progressMessage;
    }
}


// RETURN STATEMENT CHALLENGE

// This function calculates a total and returns the result.
function calculateProjectScore(htmlScore, javaScriptScore) {
    // Send the result back to the function that called it.
    return htmlScore + javaScriptScore;
}

// This function receives and displays the returned value.
function displayReturnedValue() {
    // Store the value returned by calculateProjectScore().
    let totalScore = calculateProjectScore(45, 50);

    // Display the returned result.
    document.getElementById("ReturnResult").innerHTML =
        "HTML score: 45" +
        "<br>JavaScript score: 50" +
        "<br>Total project score returned by the function: " +
        totalScore;
}


// OBJECT ASSIGNMENT

// Create an object using the let keyword.
let courseProject = {
    // Define properties and values.
    projectNumber: 10,
    projectName: "Loops and Arrays",
    language: "JavaScript",
    status: "In progress",

    // Define a method that returns information about the object.
    getProjectDetails: function () {
        return "Project " +
            this.projectNumber +
            ": " +
            this.projectName +
            "<br>Programming language: " +
            this.language +
            "<br>Current status: " +
            this.status;
    }
};

// Execute the object's method and display its result.
function displayCourseObject() {
    document.getElementById("ObjectResult").innerHTML =
        courseProject.getProjectDetails();
}


// BREAK AND CONTINUE CHALLENGE

// This function demonstrates break and continue inside a for loop.
function breakContinueFunction() {
    // Create an empty string to hold the loop results.
    let result = "";

    // Begin a loop that would normally count from 1 to 10.
    for (let number = 1; number <= 10; number++) {
        // Skip number 4 and continue with the next iteration.
        if (number === 4) {
            result += "Number 4 was skipped using continue.<br>";
            continue;
        }

        // Stop the entire loop when number reaches 8.
        if (number === 8) {
            result += "The loop stopped at number 8 using break.<br>";
            break;
        }

        // Display numbers that were neither skipped nor stopped.
        result += "Number: " + number + "<br>";
    }

    // Display the completed break and continue results.
    document.getElementById("BreakContinueResult").innerHTML =
        result;
}