// Animate introduction fade-in when user enters intro section
const bodySection = document.querySelector('#BODY');

const observer = new IntersectionObserver(                      // Observes when user views and leaves viewport
    ([entry]) => {
        if (entry.isIntersecting) {
            bodySection.classList.remove('animate');            // Removes animation class to reset
            void bodySection.offsetWidth;                       // Force broswer to replay animation
            bodySection.classList.add('animate');               // Re-add class to replay animation
        } else {
            bodySection.classList.remove('animate');            // Reset on exit
        }
    },
    {
        threshold: 0.4                                          // Runs when 40% of viewport is visible
    }
);

observer.observe(bodySection);                                  // Activates function


// NAVIGATION FOR PROJECT
document.addEventListener("DOMContentLoaded", () => {                   // Ensures HTML loads first
    let currentSlide = 0;                                               // Stores index of current slide
    const slides = document.querySelectorAll(".slide");     

    function showSlide(index) {                                            // Display specific slide
        slides.forEach(slide => slide.classList.remove("active"));         // Removes active class from all other slides

        if (index >= slides.length) currentSlide = 0;                       // If index goes past last slide, loop to first
        if (index < 0) currentSlide = slides.length - 1;                    // If index goes before first, loop to last

        slides[currentSlide].classList.add("active");                       // Adds active class to current slide
    }

    function changeSlide(direction) {                                       // Changes slide direction
        currentSlide += direction;                                          // Updates slide index and display new slide
        showSlide(currentSlide);
    }

    // Connect nav buttons
    window.changeSlide = changeSlide;

    // Enable auto slide interval
    setInterval(() => {
        currentSlide++;
        showSlide(currentSlide);
    }, 5000);

    // Show first slide
    showSlide(currentSlide);
});

document.querySelectorAll(".slide").length

// Architectutre fade in animation
const servicesSection = document.querySelector('.SERVICES');                // Declare variable for the class section
const serviceCards = document.querySelectorAll('.SERVICES .fade-in');       // Declares variable for specified classes

const servicesObserver = new IntersectionObserver(                          // Checks if user enter/leaves viewport
    ([entry], obs) => {                                                     
        if (entry.isIntersecting) {                                         // If section enters viewport
            servicesSection.classList.add('animate');                       // Adds fsde-in animation
            serviceCards.forEach((card, index) => {                         // Loops through each card
                setTimeout(() => {                                          // Small delay
                    card.classList.add('visible');
                }, 200 * index);                                            // 200ms after first card
            });
            obs.unobserve(servicesSection);                                 // Animation only replays once
        }
    },
    { threshold: 0.2 }                                                      // When 20% section is visible
);

servicesObserver.observe(servicesSection);



// Animate review card fade in when user enters section
const reviewSection = document.querySelector('#REVIEWS');

const reviewObserver = new IntersectionObserver(                            // Checks if user enters section
    ([entry]) => {                                                          // Receives an array of entries 
        if (entry.isIntersecting) {
            reviewSection.classList.add('animate');                         // Adds class to start animation
            reviewObserver.unobserve(reviewSection);                        // Animates once and ensures no replay
        }
    },
    { threshold: 0.3 }                                                      // Triggers when 30% of viewport is visible
);

reviewObserver.observe(reviewSection);                                      // Executes function


// Scroll to top button smooth transition
const scrollBtn = document.getElementById('scrollTopBtn');


// Show button after scrolling down
window.addEventListener('scroll', () => {                                   // Runs everytime user scrolls
    scrollBtn.style.display = window.scrollY > 300 ? 'flex' : 'none';       // Checks vertical scroll - >300px button appears - <300pn button hidden - using flex for proper alignment with flexbox
});

// Scroll smoothly to top
scrollBtn.addEventListener('click', () => {                                                         // Triggers function when user clicks
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;     // Checks if reduced motion setting is enabled

    window.scrollTo({
        top: 0,                                                                                     // Scrolls page to the top
        behavior: prefersReducedMotion ? 'auto' : 'smooth'                                          // Enables smooth scrolling, auto for reduced motion
    });
});