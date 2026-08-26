// SWITCH STATEMENT ASSIGNMENT

// This function uses a switch statement to display information
// about the programming language selected by the user.
function language_Function() {
    // Retrieve the selected value from the HTML element.
    var selectedLanguage =
        document.getElementById("LanguageInput").value;

    // Create a variable to hold the result.
    var languageMessage;

    // Compare the selected value with the available cases.
    switch (selectedLanguage) {
        case "HTML":
            languageMessage =
                "HTML provides the structure and content of a webpage.";
            break;

        case "CSS":
            languageMessage =
                "CSS controls the appearance and layout of a webpage.";
            break;

        case "JavaScript":
            languageMessage =
                "JavaScript adds behaviour and interactivity to a webpage.";
            break;

        case "Python":
            languageMessage =
                "Python is used for web development, automation and data analysis.";
            break;

        case "SQL":
            languageMessage =
                "SQL is used to store, retrieve and manage database information.";
            break;

        default:
            languageMessage =
                "Please choose a programming language from the list.";
    }

    // Display the switch statement result.
    document.getElementById("LanguageResult").innerHTML =
        languageMessage;
}


// DOCUMENT.GETELEMENTSBYCLASSNAME() ASSIGNMENT

// This function selects and updates elements sharing the same class.
function className_Function() {
    // Select every element with the class name "course-item".
    var courseElements =
        document.getElementsByClassName("course-item");

    // Loop through the collection of matching elements.
    for (var index = 0; index < courseElements.length; index++) {
        // Change the appearance of each matching element.
        courseElements[index].style.color = "darkblue";
        courseElements[index].style.fontWeight = "bold";

        // Prevent the additional message from being repeated.
        if (!courseElements[index].dataset.updated) {
            courseElements[index].innerHTML +=
                " — This course topic is important.";

            courseElements[index].dataset.updated = "true";
        }
    }
}


// CANVAS GRAPHICS AND LINEAR GRADIENT CHALLENGE

// This function uses JavaScript to draw graphics on the canvas.
function drawCanvasGraphic() {
    // Select the canvas element.
    var canvas =
        document.getElementById("AssignmentCanvas");

    // Create a two-dimensional drawing context.
    var context = canvas.getContext("2d");

    // Create a gradient running from the top-left to the bottom-right.
    var backgroundGradient =
        context.createLinearGradient(0, 0, 600, 350);

    // Add colours at different positions along the gradient.
    backgroundGradient.addColorStop(0, "#87CEEB");
    backgroundGradient.addColorStop(0.45, "#B9E7FF");
    backgroundGradient.addColorStop(0.75, "#FFD6A5");
    backgroundGradient.addColorStop(1, "#FF9A76");

    // Use the gradient as the canvas background.
    context.fillStyle = backgroundGradient;
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Draw the green ground over the lower part of the background.
    context.fillStyle = "rgba(76, 175, 80, 0.88)";
    context.fillRect(0, 250, 600, 100);

    // Draw the sun.
    context.beginPath();
    context.arc(500, 70, 40, 0, 2 * Math.PI);
    context.fillStyle = "#FFD700";
    context.fill();

    // Draw the main part of the house.
    context.fillStyle = "#F4A261";
    context.fillRect(190, 170, 220, 130);

    // Draw the roof.
    context.beginPath();
    context.moveTo(160, 170);
    context.lineTo(300, 75);
    context.lineTo(440, 170);
    context.closePath();
    context.fillStyle = "#B22222";
    context.fill();

    // Draw the door.
    context.fillStyle = "#6D4C41";
    context.fillRect(275, 230, 50, 70);

    // Draw the left window.
    context.fillStyle = "#D9F3FF";
    context.fillRect(215, 205, 42, 42);

    context.strokeStyle = "#123D73";
    context.lineWidth = 3;
    context.strokeRect(215, 205, 42, 42);

    // Draw the right window.
    context.fillStyle = "#D9F3FF";
    context.fillRect(343, 205, 42, 42);

    context.strokeStyle = "#123D73";
    context.strokeRect(343, 205, 42, 42);

    // Draw a tree trunk.
    context.fillStyle = "#7B4B2A";
    context.fillRect(75, 210, 28, 90);

    // Draw the tree leaves.
    context.beginPath();
    context.arc(89, 185, 55, 0, 2 * Math.PI);
    context.fillStyle = "#187A35";
    context.fill();

    // Add text to the canvas.
    context.font = "bold 22px Arial";
    context.fillStyle = "#123D73";
    context.textAlign = "center";

    context.fillText(
        "JavaScript Linear Gradient Canvas",
        300,
        335
    );
}

// Execute the canvas function after the deferred script loads.
drawCanvasGraphic();