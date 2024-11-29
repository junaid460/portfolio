// Typing Animation
const typingText = document.querySelector(".typing-text");
const phrases = ["Frontend Developer", "Skills: HTML | CSS | JavaScript"];
let i = 0, j = 0, isDeleting = false, isPaused = false;

function type() {
  const currentPhrase = phrases[j];
  const currentText = currentPhrase.slice(0, i);
  typingText.textContent = currentText;

  if (!isDeleting && i < currentPhrase.length) {
    i++;
    setTimeout(type, 100);
  } else if (isDeleting && i > 0) {
    i--;
    setTimeout(type, 50);
  } else {
    if (!isPaused) {
      isPaused = true;
      setTimeout(() => {
        isDeleting = !isDeleting;
        isPaused = false;
        if (!isDeleting) j = (j + 1) % phrases.length;
        type();
      }, isDeleting ? 1000 : 3000); // 3s pause after typing, 1s after backspacing
    }
  }
}
type();

// Navigation Visibility Control
const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll(".section");

navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetSection = link.getAttribute("data-section");

    sections.forEach(section => {
      section.classList.toggle("visible", section.id === targetSection);
    });
  });
});



const themeToggleButton = document.getElementById('theme-toggle');

// Set default theme to dark mode if no preference is saved
if (!localStorage.getItem('theme') || localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
  themeToggleButton.textContent = '🌞'; // Sun icon in dark mode
} else {
  themeToggleButton.textContent = '🌙'; // Moon icon in light mode
}

// Event listener for toggling theme
themeToggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode'); // Toggle dark mode class
  
  // Switch the icon and save the theme preference
  if (document.body.classList.contains('dark-mode')) {
    themeToggleButton.textContent = '🌞'; // Show sun icon for dark mode
    localStorage.setItem('theme', 'dark'); // Save dark mode preference
  } else {
    themeToggleButton.textContent = '🌙'; // Show moon icon for light mode
    localStorage.setItem('theme', 'light'); // Save light mode preference
  }
});