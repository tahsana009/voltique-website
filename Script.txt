// VOLTIQUE Website Script
console.log("VOLTIQUE Website Loaded Successfully! 🚀");

// Hamburger Menu Toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
