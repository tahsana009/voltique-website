// --- Smooth Scrolling for Navigation Links ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// --- Contact Form Validation ---
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');

        if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
            e.preventDefault(); // Stop form submission
            alert('Please fill out all required information.');
        } else {
            alert('Message sent successfully!');
        }
    });
}

// --- Call to Action for Products ---
const buyNowButtons = document.querySelectorAll('.buy-now-btn');
buyNowButtons.forEach(button => {
    button.addEventListener('click', function() {
        alert('Please contact us on WhatsApp to place your order. Thank you!');
    });
});
