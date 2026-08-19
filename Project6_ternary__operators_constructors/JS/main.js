// RIDE HEIGHT ASSIGNMENT

// This function checks whether a person is tall enough to ride.
function Ride_Function() {
    var Height = document.getElementById("Height").value;

    // Use a ternary operator to select the appropriate message.
    var Can_ride = (Height < 52)
        ? "You are too short"
        : "You are tall enough";

    // Display the result.
    document.getElementById("Ride").innerHTML =
        Can_ride + " to ride.";
}


// TERNARY OPERATORS VOTING CHALLENGE

// This function checks whether the user is old enough to vote.
function Vote_Function() {
    var Age = document.getElementById("Age").value;

    // Use a ternary operator to determine voting eligibility.
    var Can_vote = (Age < 18)
        ? "You are not old enough to vote."
        : "You can vote!";

    // Display the voting result.
    document.getElementById("Vote").innerHTML = Can_vote;
}


// KEYWORDS AND CONSTRUCTORS ASSIGNMENT

// This constructor creates Vehicle objects.
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

// Use new to create three Vehicle objects.
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

// Display information from the Erik object.
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
        "Erik drives a " + Erik.Vehicle_Color + "-colored " +
        Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}


// NEW KEYWORD ASSIGNMENT

// This constructor creates Developer objects.
function Developer(Name, Language, Experience) {
    this.Developer_Name = Name;
    this.Developer_Language = Language;
    this.Developer_Experience = Experience;
}

// Use new to create a Developer object.
var Jim = new Developer(
    "Jim",
    "JavaScript",
    "building practical coding projects"
);

// Display information from the Developer object.
function displayDeveloper() {
    document.getElementById("New_and_This").innerHTML =
        Jim.Developer_Name + " is learning " +
        Jim.Developer_Language + " by " +
        Jim.Developer_Experience + ".";
}


// RESERVED KEYWORD CHALLENGE

// Store the reserved JavaScript word "new" as a string value.
var reservedWord = "new";

// Display the reserved word.
function displayReservedWord() {
    document.getElementById("ReservedKeyword").innerHTML =
        "\"" + reservedWord + "\" is a JavaScript reserved keyword.";
}

/*
The following code would cause a syntax error because "new" cannot
be used as a variable name:

var new = "This code will not run";
*/


// OBJECT CONSTRUCTOR CHALLENGE

// This constructor creates Book objects.
function Book(Title, Author, Year) {
    this.Book_Title = Title;
    this.Book_Author = Author;
    this.Book_Year = Year;
}

// Create a new Book object.
var JavaScriptBook = new Book(
    "Learning JavaScript",
    "Jim Ossai",
    2026
);

// Display information from the Book object.
function displayBook() {
    document.getElementById("ConstructorChallenge").innerHTML =
        JavaScriptBook.Book_Title + " was written by " +
        JavaScriptBook.Book_Author + " in " +
        JavaScriptBook.Book_Year + ".";
}


// NESTED FUNCTIONS ASSIGNMENT

// This is the outer function called by the HTML paragraph.
function count_Function() {
    // Display the value returned by the nested Count function.
    document.getElementById("Nested_Function").innerHTML =
        "The result of the nested function is " + Count() + ".";

    // This function is nested inside count_Function.
    function Count() {
        var Starting_point = 9;

        // This function is nested inside the Count function.
        function Plus_one() {
            Starting_point += 1;
        }

        // Execute the innermost function.
        Plus_one();

        // Return the updated value.
        return Starting_point;
    }
}