// ========================================
// Mobile Menu Toggle
// ========================================
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const navMenu = document.getElementById('nav-menu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenuToggle.contains(e.target) && !navMenu.contains(e.target)) {
            mobileMenuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// ========================================
// Navbar Scroll Effect
// ========================================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ========================================
// Animated Counter for Stats
// ========================================
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;

    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current) + '+';
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    };

    updateCounter();
}

// Intersection Observer for Stats Animation
const statNumbers = document.querySelectorAll('.stat-number');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated');
            animateCounter(entry.target);
        }
    });
}, {
    threshold: 0.5
});

statNumbers.forEach(stat => statsObserver.observe(stat));

// ========================================
// Smooth Scroll for Anchor Links
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '#!') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ========================================
// Donation Form - Amount Selection
// ========================================
const amountButtons = document.querySelectorAll('.amount-btn');
const customAmountInput = document.getElementById('customAmount');

if (amountButtons.length > 0) {
    amountButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();

            // Remove active class from all buttons
            amountButtons.forEach(btn => {
                btn.style.borderColor = 'var(--border-color)';
                btn.style.background = 'var(--white)';
                btn.style.color = 'var(--text-dark)';
            });

            // Add active class to clicked button
            this.style.borderColor = 'var(--primary-green)';
            this.style.background = 'var(--bg-green-light)';
            this.style.color = 'var(--primary-green)';

            // Clear custom amount
            if (customAmountInput) {
                customAmountInput.value = '';
            }
        });
    });

    // Clear button selection when custom amount is entered
    if (customAmountInput) {
        customAmountInput.addEventListener('input', function() {
            if (this.value) {
                amountButtons.forEach(btn => {
                    btn.style.borderColor = 'var(--border-color)';
                    btn.style.background = 'var(--white)';
                    btn.style.color = 'var(--text-dark)';
                });
            }
        });
    }
}

// ========================================
// Form Validation & Submission
// ========================================
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Basic validation
        const requiredFields = form.querySelectorAll('[required]');
        let isValid = true;

        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.style.borderColor = '#EF4444';
            } else {
                field.style.borderColor = 'var(--border-color)';
            }
        });

        if (isValid) {
            // Show success message (in a real implementation, this would submit to a server)
            alert('Thank you for your submission! We will get back to you soon.');
            form.reset();

            // Reset amount button styles if on donate page
            if (amountButtons.length > 0) {
                amountButtons.forEach(btn => {
                    btn.style.borderColor = 'var(--border-color)';
                    btn.style.background = 'var(--white)';
                    btn.style.color = 'var(--text-dark)';
                });
            }
        } else {
            alert('Please fill in all required fields.');
        }
    });
});

// ========================================
// Lazy Loading for Images (if needed later)
// ========================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            }
        });
    });

    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
}

// ========================================
// Add Animation on Scroll
// ========================================
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.project-card, .story-card, .stat-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(20px)';

                setTimeout(() => {
                    entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);

                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(el => observer.observe(el));
};

// Run animation on scroll when page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', animateOnScroll);
} else {
    animateOnScroll();
}

// ========================================
// Console Message (Optional - Remove if not needed)
// ========================================
console.log('%cPathways to Success India', 'color: #2A643C; font-size: 24px; font-weight: bold;');
console.log('%cThank you for visiting our website!', 'color: #6B7280; font-size: 14px;');
console.log('%cInterested in contributing? Visit: https://pathways-to-success-india.com/donate', 'color: #F59E0B; font-size: 12px;');
