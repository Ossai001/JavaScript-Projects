// Creates an object that stores the calculator's current values.
const Calculator = {
    // Displays zero when the calculator first loads.
    Display_Value: "0",

    // Stores the first number in a calculation.
    First_Operand: null,

    // Indicates whether the next number is the second operand.
    Wait_Second_Operand: false,

    // Stores the selected mathematical operator.
    operator: null
};

// Adds a selected digit to the calculator display.
function Input_Digit(digit) {
    const {
        Display_Value,
        Wait_Second_Operand
    } = Calculator;

    // Starts a new display value after an operator is selected.
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        // Replaces zero or adds the new digit to the current number.
        Calculator.Display_Value =
            Display_Value === "0"
                ? digit
                : Display_Value + digit;
    }
}

// Adds a decimal point to the current number.
function Input_Decimal(dot) {
    // Starts the second operand with zero and a decimal.
    if (Calculator.Wait_Second_Operand === true) {
        Calculator.Display_Value = "0.";
        Calculator.Wait_Second_Operand = false;
        return;
    }

    // Prevents multiple decimal points in one number.
    if (!Calculator.Display_Value.includes(dot)) {
        Calculator.Display_Value += dot;
    }
}

// Handles operator buttons such as +, −, ×, ÷ and =.
function Handle_Operator(Next_Operator) {
    const {
        First_Operand,
        Display_Value,
        operator
    } = Calculator;

    // Converts the displayed value from text into a number.
    const Value_of_Input = parseFloat(Display_Value);

    // Updates the selected operator when awaiting another number.
    if (
        operator &&
        Calculator.Wait_Second_Operand
    ) {
        Calculator.operator = Next_Operator;
        return;
    }

    // Stores the first number.
    if (First_Operand === null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) {
        // Uses zero if the first stored value is unavailable.
        const Value_Now = First_Operand || 0;

        // Performs the selected calculation.
        let result =
            Perform_Calculation[operator](
                Value_Now,
                Value_of_Input
            );

        // Limits floating-point inaccuracies.
        result = Number(result).toFixed(9);

        // Removes unnecessary trailing zeros.
        result = (result * 1).toString();

        // Updates the display and stored value.
        Calculator.Display_Value = result;
        Calculator.First_Operand =
            parseFloat(result);
    }

    // Waits for the next number.
    Calculator.Wait_Second_Operand = true;

    // Stores the newly selected operator.
    Calculator.operator = Next_Operator;
}

// Contains the calculator's mathematical operations.
const Perform_Calculation = {
    "/": (
        First_Operand,
        Second_Operand
    ) => First_Operand / Second_Operand,

    "*": (
        First_Operand,
        Second_Operand
    ) => First_Operand * Second_Operand,

    "+": (
        First_Operand,
        Second_Operand
    ) => First_Operand + Second_Operand,

    "-": (
        First_Operand,
        Second_Operand
    ) => First_Operand - Second_Operand,

    "=": (
        First_Operand,
        Second_Operand
    ) => Second_Operand
};

// Resets the calculator to its original state.
function Calculator_Reset() {
    Calculator.Display_Value = "0";
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

// Updates the HTML calculator screen.
function Update_Display() {
    // Selects the input with the calculator-screen class.
    const display =
        document.querySelector(".calculator-screen");

    // Displays the current calculator value.
    display.value = Calculator.Display_Value;
}

// Displays zero when the page first loads.
Update_Display();

// Selects the container holding all calculator buttons.
const keys =
    document.querySelector(".calculator-keys");

// Monitors clicks inside the calculator.
keys.addEventListener("click", event => {
    // Retrieves the exact element that was clicked.
    const { target } = event;

    // Ends the function if the clicked element is not a button.
    if (!target.matches("button")) {
        return;
    }

    // Handles mathematical operator buttons.
    if (target.classList.contains("operator")) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }

    // Handles the decimal button.
    if (target.classList.contains("decimal")) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }

    // Handles the all-clear button.
    if (target.classList.contains("all-clear")) {
        Calculator_Reset();
        Update_Display();
        return;
    }

    // Handles number buttons.
    Input_Digit(target.value);
    Update_Display();
});