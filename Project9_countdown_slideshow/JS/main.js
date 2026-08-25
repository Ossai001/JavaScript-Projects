// COUNTDOWN ASSIGNMENT

// This function creates a countdown using the number entered by the user.
function countdown() {
    // Retrieve the value entered in the seconds input.
    var seconds = document.getElementById("seconds").value;

    // Select the timer paragraph.
    var timer = document.getElementById("timer");

    // This nested function decreases the number every second.
    function tick() {
        // Subtract one from the current number of seconds.
        seconds = seconds - 1;

        // Display the remaining number of seconds.
        timer.innerHTML = seconds;

        // Run the tick function again after 1,000 milliseconds.
        var time = setTimeout(tick, 1000);

        // Stop the countdown after it passes zero.
        if (seconds == -1) {
            // Display an alert when the countdown finishes.
            alert("Time's up!");

            // Stop the setTimeout function.
            clearTimeout(time);

            // Remove the countdown number from the webpage.
            timer.innerHTML = "";
        }
    }

    // Start the nested tick function.
    tick();
}


// SLIDESHOW CHALLENGE

// Begin with the first slide.
var slideIndex = 1;

// Display the first slide when the page opens.
showSlides(slideIndex);

// Move forwards or backwards through the slideshow.
function changeSlide(number) {
    showSlides(slideIndex += number);
}

// Display the slide selected by a navigation dot.
function currentSlide(number) {
    showSlides(slideIndex = number);
}

// This function controls which slide is displayed.
function showSlides(number) {
    // Select all slides and navigation dots.
    var slides = document.getElementsByClassName("car-slide");
    var dots = document.getElementsByClassName("dot");
    var index;

    // Return to the first slide after the final slide.
    if (number > slides.length) {
        slideIndex = 1;
    }

    // Move to the final slide when going backwards from the first slide.
    if (number < 1) {
        slideIndex = slides.length;
    }

    // Hide every slide.
    for (index = 0; index < slides.length; index++) {
        slides[index].style.display = "none";
    }

    // Remove the active class from every dot.
    for (index = 0; index < dots.length; index++) {
        dots[index].className =
            dots[index].className.replace(" active", "");
    }

    // Display the selected slide.
    slides[slideIndex - 1].style.display = "block";

    // Highlight the dot belonging to the selected slide.
    dots[slideIndex - 1].className += " active";
}