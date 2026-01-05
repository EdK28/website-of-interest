// HERO SLIDESHOW
const heroSlides = document.querySelectorAll(".hero-slide");    // Selects all with class hero-slide
const heroDotsContainer = document.querySelector(".hero-dots"); // Selects dot container
let current = 0;                                                // Starts slideshow on first slide
let interval;                                                   // Undeclared variable for later use


/* Create dots */
heroSlides.forEach((_, i) => {
    const dot = document.createElement("div");          // Creates div for each dot
    dot.classList.add("hero-dot");                      // Adds class for hero dot - styling purposes
    if (i === 0) dot.classList.add("active");           // Makes first dot active by default
    dot.addEventListener("click", () => goToSlide(i));  // Moves slideshow to current slide when clicked
    heroDotsContainer.appendChild(dot);                 // Adds dot to page
});

const heroDots = document.querySelectorAll(".hero-dot");


/* Changes slide when user clicks dots*/
function goToSlide(index) {
    heroSlides[current].classList.remove("active");     // Resets current active slide from dot
    heroDots[current].classList.remove("active");

    current = index;                                    // Updates current slide to new dot

    heroSlides[current].classList.add("active");        // Adds active slide to dot
    heroDots[current].classList.add("active");

    resetInterval();                                    // Resets slide timer
}

function nextSlide() {
    goToSlide((current + 1) % heroSlides.length);       // Moves to next slide and continuous loop for slides
}

function resetInterval() {
    clearInterval(interval);                            // Resets timer if user clicks dots
    interval = setInterval(nextSlide, 4000);            // Sets timer for slide change
}

/* Auto play */
interval = setInterval(nextSlide, 4000);


/* Smooth scrolling for buttons */
document.querySelectorAll('a[href^="#"]').forEach(link => {     // Selects all links with # (id)
    link.addEventListener("click", e => {                       // Adds click event
        e.preventDefault();                                     // Prevent default scroll and adds smooth transition
        document.querySelector(link.getAttribute("href"))       // Selects element with same id
            .scrollIntoView({ behavior: "smooth" });            // Creates smooth animation scroll
    });
});
