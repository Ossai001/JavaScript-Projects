// DATA ATTRIBUTE ASSIGNMENT

// This function receives the HTML element clicked by the user.
function displaySkill(selectedElement) {
    // Retrieve values from the element's data attributes.
    var language =
        selectedElement.dataset.language;

    var purpose =
        selectedElement.dataset.purpose;

    var skillLevel =
        selectedElement.dataset.level;

    // Display the data-attribute values in the HTML page.
    document.getElementById("SkillResult").innerHTML =
        "<strong>Language:</strong> " +
        language +
        "<br><strong>Purpose:</strong> " +
        language +
        " " +
        purpose +
        "." +
        "<br><strong>Current skill level:</strong> " +
        skillLevel +
        ".";
}