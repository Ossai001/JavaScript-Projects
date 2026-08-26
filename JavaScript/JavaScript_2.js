// CONTACT FORM VALIDATION

// This function validates the contact form when it is submitted.
function validateContactForm(event) {
    // Prevent the page from submitting or refreshing.
    event.preventDefault();

    // Retrieve the values entered by the user.
    var fullName =
        document.getElementById("fullName").value.trim();

    var emailAddress =
        document.getElementById("emailAddress").value.trim();

    var phoneNumber =
        document.getElementById("phoneNumber").value.trim();

    var subject =
        document.getElementById("subject").value;

    var message =
        document.getElementById("message").value.trim();

    // Begin by assuming that the form is valid.
    var formIsValid = true;

    // Remove earlier validation messages and styles.
    clearValidationMessages();

    // Validate the full-name field.
    if (fullName === "") {
        displayFieldError(
            "fullName",
            "nameError",
            "Please enter your full name."
        );

        formIsValid = false;
    } else if (fullName.length < 2) {
        displayFieldError(
            "fullName",
            "nameError",
            "Your name must contain at least two characters."
        );

        formIsValid = false;
    }

    // A basic pattern for checking an email address.
    var emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate the email-address field.
    if (emailAddress === "") {
        displayFieldError(
            "emailAddress",
            "emailError",
            "Please enter your email address."
        );

        formIsValid = false;
    } else if (!emailPattern.test(emailAddress)) {
        displayFieldError(
            "emailAddress",
            "emailError",
            "Please enter a valid email address."
        );

        formIsValid = false;
    }

    /*
        Allow numbers, spaces, plus signs, parentheses and hyphens
        in the optional telephone-number field.
    */
    var phonePattern =
        /^[0-9+\s()-]{7,20}$/;

    // Validate the telephone number only when one was entered.
    if (
        phoneNumber !== "" &&
        !phonePattern.test(phoneNumber)
    ) {
        displayFieldError(
            "phoneNumber",
            "phoneError",
            "Please enter a valid telephone number."
        );

        formIsValid = false;
    }

    // Validate the subject field.
    if (subject === "") {
        displayFieldError(
            "subject",
            "subjectError",
            "Please select a subject."
        );

        formIsValid = false;
    }

    // Validate the message field.
    if (message === "") {
        displayFieldError(
            "message",
            "messageError",
            "Please enter your message."
        );

        formIsValid = false;
    } else if (message.length < 10) {
        displayFieldError(
            "message",
            "messageError",
            "Your message must contain at least 10 characters."
        );

        formIsValid = false;
    }

    // Display the result after checking all form fields.
    var formStatus =
        document.getElementById("formStatus");

    if (formIsValid) {
        formStatus.innerHTML =
            "Thank you, " + fullName +
            "! Your form passed validation successfully.";

        formStatus.className =
            "form-status success-message";

        // Clear the form after successful validation.
        document.getElementById("contactForm").reset();
    } else {
        formStatus.innerHTML =
            "Please correct the highlighted fields.";

        formStatus.className =
            "form-status failure-message";
    }

    // Prevent an actual submission because this is a demonstration.
    return false;
}


// This function displays an error beneath an invalid field.
function displayFieldError(
    fieldId,
    errorId,
    errorMessage
) {
    // Add an invalid style to the field.
    document
        .getElementById(fieldId)
        .classList
        .add("invalid-field");

    // Display the relevant error message.
    document.getElementById(errorId).innerHTML =
        errorMessage;
}


// This function clears messages from an earlier submission.
function clearValidationMessages() {
    // Select all fields that previously had an error style.
    var invalidFields =
        document.getElementsByClassName("invalid-field");

    // Remove the class safely while the live collection changes.
    while (invalidFields.length > 0) {
        invalidFields[0].classList.remove("invalid-field");
    }

    // Clear every field-specific error message.
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("phoneError").innerHTML = "";
    document.getElementById("subjectError").innerHTML = "";
    document.getElementById("messageError").innerHTML = "";

    // Clear the overall form status.
    var formStatus =
        document.getElementById("formStatus");

    formStatus.innerHTML = "";
    formStatus.className = "form-status";
}