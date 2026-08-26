// Wait briefly before referencing the HTML paragraph.
setTimeout(function () {
    // Display the content of the paragraph with the ID "p1".
    alert(document.getElementById("p1").innerHTML);
}, 100);
// This function references an HTML element using its ID.
function displayDeferMessage() {
    // Change the paragraph after the HTML document has loaded.
    document.getElementById("defer-message").innerHTML =
        "Success! The deferred JavaScript executed after the HTML loaded.";
}

// Execute the function after the HTML has been parsed.
displayDeferMessage();