document.addEventListener('DOMContentLoaded', () => {
    // Dark Mode Toggle
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.body.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            document.body.removeAttribute('data-theme');
            themeToggle.textContent = 'Dark Mode';
        } else {
            document.body.setAttribute('data-theme', 'dark');
            themeToggle.textContent = 'Light Mode';
        }
    });

    // Form Validation
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        let isValid = true;

        // Reset errors
        document.getElementById('name-error').textContent = '';
        document.getElementById('email-error').textContent = '';

        if (name === '') {
            document.getElementById('name-error').textContent = 'Name is required';
            isValid = false;
        }

        if (email === '') {
            document.getElementById('email-error').textContent = 'Email is required';
            isValid = false;
        } else if (!validateEmail(email)) {
            document.getElementById('email-error').textContent = 'Please enter a valid email';
            isValid = false;
        }

        if (isValid) {
            formStatus.textContent = 'Message sent successfully!';
            formStatus.style.color = '#2ecc71';
            contactForm.reset();
            alert('Thank you for your message, ' + name + '!');
        } else {
            formStatus.textContent = 'Please fix the errors above.';
            formStatus.style.color = '#e74c3c';
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
