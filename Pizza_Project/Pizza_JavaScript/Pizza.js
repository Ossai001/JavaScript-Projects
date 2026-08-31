// Runs when the Place Order button is clicked.
function getReceipt() {
    // Begins the receipt text.
    var text1 = "<h3>You Ordered:</h3>";

    // Stores the running order total.
    var runningTotal = 0;

    // Stores the price of the selected pizza size.
    var sizeTotal = 0;

    // Stores the selected pizza size.
    var selectedSize = "";

    // Retrieves all pizza-size radio buttons.
    var sizeArray =
        document.getElementsByClassName("size");

    // Finds the selected pizza size.
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            selectedSize = sizeArray[i].value;

            // Adds the pizza size to the receipt.
            text1 =
                text1 +
                selectedSize +
                "<br>";
        }
    }

    // Assigns the correct price to the pizza size.
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }

    // Starts the total with the pizza-size price.
    runningTotal = sizeTotal;

    console.log(
        selectedSize +
        " = $" +
        sizeTotal +
        ".00"
    );

    console.log(
        "Subtotal: $" +
        runningTotal +
        ".00"
    );

    // Passes the total and receipt to the topping function.
    getTopping(runningTotal, text1);
}


// Adds selected vegetables and meats to the order.
function getTopping(runningTotal, text1) {
    // Stores the total cost of all toppings.
    var toppingTotal = 0;

    // Stores the selected vegetables and meats.
    var selectedTopping = [];

    // Retrieves every element with the toppings class.
    var toppingArray =
        document.getElementsByClassName("toppings");

    // Finds all selected vegetable and meat toppings.
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(
                toppingArray[j].value
            );

            // Adds each selected topping to the receipt.
            text1 =
                text1 +
                toppingArray[j].value +
                "<br>";

            console.log(
                "Selected topping: " +
                toppingArray[j].value
            );
        }
    }

    // Counts all selected vegetable and meat toppings.
    var toppingCount = selectedTopping.length;

    /*
        The first topping is free.
        Each additional topping costs $1.
    */
    if (toppingCount > 1) {
        toppingTotal = toppingCount - 1;
    } else {
        toppingTotal = 0;
    }

    // Adds the topping cost to the pizza-size price.
    runningTotal =
        runningTotal +
        toppingTotal;

    console.log(
        "Number of toppings: " +
        toppingCount
    );

    console.log(
        "Topping total: $" +
        toppingTotal +
        ".00"
    );

    console.log(
        "Purchase total: $" +
        runningTotal +
        ".00"
    );

    // Displays the order receipt.
    document.getElementById("showText").innerHTML =
        text1;

    // Displays the total order price.
    document.getElementById("totalPrice").innerHTML =
        "<h3>Total: <strong>$" +
        runningTotal +
        ".00</strong></h3>";
}