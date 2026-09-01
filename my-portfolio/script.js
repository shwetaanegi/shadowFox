// ========== MOBILE NAVIGATION TOGGLE ==========
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close nav when a link is clicked (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// ========== ACTIVE NAV LINK ON SCROLL ==========
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ========== CONTACT FORM VALIDATION ==========
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Stop page reload

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validation checks
    if (name === '') {
        showMessage('Please enter your name.', 'error');
        return;
    }

    if (email === '') {
        showMessage('Please enter your email.', 'error');
        return;
    }

    // Simple email validation (checks for @ and .)
    if (!email.includes('@') || !email.includes('.')) {
        showMessage('Please enter a valid email address.', 'error');
        return;
    }

    if (message === '') {
        showMessage('Please enter your message.', 'error');
        return;
    }

    // If all validation passes
    showMessage('✅ Thank you! Your message has been sent successfully!', 'success');

    // Clear form
    form.reset();

    // Optional: You can send data to a backend here
    console.log('Form Data:', { name, email, subject, message });
});

function showMessage(msg, type) {
    formMessage.textContent = msg;
    formMessage.style.color = type === 'success' ? '#28a745' : '#dc3545';
    formMessage.style.fontWeight = '500';

    // Auto-clear message after 5 seconds
    setTimeout(() => {
        formMessage.textContent = '';
    }, 5000);
}

// ========== SMOOTH SCROLL FOR NAV LINKS ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


const roles = ['Web Developer', 'UI/UX Designer', 'Freelancer'];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const roleElement = document.querySelector('.home-content h2');

function typeEffect() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        roleElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        roleElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        setTimeout(typeEffect, 2000);
        return;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeEffect, 500);
        return;
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

