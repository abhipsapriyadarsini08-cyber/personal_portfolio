// Smooth scroll
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Typing effect
const textElement = document.querySelector('.typing-text');
const text = "Hi, I’m Abhipsa Priyadarsini 🌸";
let index = 0;

function type() {
  if (index < text.length) {
    textElement.textContent += text.charAt(index);
    index++;
    setTimeout(type, 100);
  }
}
window.onload = type;