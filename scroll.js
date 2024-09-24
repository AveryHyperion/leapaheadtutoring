// Select all slide elements
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// Function to update the visible slide
const updateSlides = () => {
    slides[currentSlide].classList.remove('visible'); // Hide current slide
    currentSlide = (currentSlide + 1) % totalSlides; // Move to next slide
    slides[currentSlide].classList.add('visible'); // Show next slide
};

// Event listener for the right arrow
document.querySelector('.right-arrow').addEventListener('click', updateSlides);

// Event listener for the left arrow
document.querySelector('.left-arrow').addEventListener('click', () => {
    slides[currentSlide].classList.remove('visible'); // Hide current slide
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; // Move to previous slide
    slides[currentSlide].classList.add('visible'); // Show previous slide
});

// Auto-scroll functionality to change slides every 5 seconds
setInterval(updateSlides, 5000); // Change slide every 5 seconds

// Intersection Observer for fading in sections as they come into view
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
});

// Observe each section
sections.forEach(section => {
    observer.observe(section);
});






