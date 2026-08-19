// This function creates a dictionary and uses the delete operator.
function displayCarDetails() {
    // Create a JavaScript object containing key-value pairs.
    var Car = {
        Make: "Suzuki",
        Model: "Baleno",
        Year: 2016,
        Colour: "Blue",
        Engine: "1.2 litre",
        Transmission: "Manual"
    };

    // Remove the Model property and its value from the dictionary.
    delete Car.Model;

    // Display the deleted Model value in the element with the ID "Dictionary".
    // It displays undefined because the property has been deleted.
    document.getElementById("Dictionary").innerHTML =
        "The deleted car model is: " + Car.Model;
}

// This function demonstrates what happens when keys are duplicated.
function displayDuplicateKeys() {
    // Both properties below use the identical key "Colour".
    var Laptop = {
        Brand: "Dell",
        Colour: "Silver",
        Colour: "Black",
        OperatingSystem: "Windows"
    };

    // JavaScript uses the value assigned to the last Colour property.
    document.getElementById("DuplicateDictionary").innerHTML =
        "Laptop brand: " + Laptop.Brand +
        "<br>Laptop colour: " + Laptop.Colour +
        "<br>Operating system: " + Laptop.OperatingSystem;
}