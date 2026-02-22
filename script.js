/**
 * Portfolio Website JavaScript
 * Author: Datenzi Sherpa
 * Description: Interactive features and animations
 */

// ========================================
// Utility Functions
// ========================================

/**
 * Debounce function to limit how often a function can fire
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Check if element is in viewport
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// ========================================
// Navigation
// ========================================

/**
 * Mobile menu toggle
 */
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

/**
 * Close mobile menu when clicking on a link
 */
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

/**
 * Active navigation link on scroll
 */
function setActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', debounce(setActiveNavLink, 100));

/**
 * Hide/show navigation on scroll
 */
let lastScrollTop = 0;
const nav = document.getElementById('nav');

window.addEventListener('scroll', debounce(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down
        nav.classList.add('hidden');
    } else {
        // Scrolling up
        nav.classList.remove('hidden');
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}, 100));

// ========================================
// Smooth Scrolling
// ========================================

/**
 * Smooth scroll to section when clicking navigation links
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const targetPosition = target.offsetTop - 80;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// Animated Counters (Statistics)
// ========================================

/**
 * Animate number counting up
 */
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

/**
 * Trigger counter animation when stats section is visible
 */
let statsAnimated = false;
const statNumbers = document.querySelectorAll('.stat-number');

function checkStatsVisibility() {
    if (statsAnimated) return;
    
    const aboutSection = document.querySelector('.about');
    if (!aboutSection) return;
    
    const rect = aboutSection.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
    
    if (isVisible) {
        statsAnimated = true;
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'));
            animateCounter(stat, target);
        });
    }
}

window.addEventListener('scroll', debounce(checkStatsVisibility, 100));
// Check on page load
checkStatsVisibility();

// ========================================
// Skills Progress Bars
// ========================================

/**
 * Animate skill progress bars when visible
 */
let skillsAnimated = false;

function animateSkillBars() {
    if (skillsAnimated) return;
    
    const skillsSection = document.querySelector('.skills');
    if (!skillsSection) return;
    
    const rect = skillsSection.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
    
    if (isVisible) {
        skillsAnimated = true;
        const progressBars = document.querySelectorAll('.skill-progress');
        
        progressBars.forEach((bar, index) => {
            const progress = bar.getAttribute('data-progress');
            setTimeout(() => {
                bar.style.width = progress + '%';
            }, index * 100);
        });
    }
}

window.addEventListener('scroll', debounce(animateSkillBars, 100));
// Check on page load
animateSkillBars();

// ========================================
// Scroll Animations
// ========================================

/**
 * Add animation class to elements when they enter viewport
 */
function animateOnScroll() {
    const elements = document.querySelectorAll('.project-card, .skill-category, .about-text, .contact-info');
    
    elements.forEach(element => {
        if (!element.classList.contains('animate-on-scroll')) {
            element.classList.add('animate-on-scroll');
        }
        
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        
        if (isVisible && !element.classList.contains('animated')) {
            element.classList.add('animated');
        }
    });
}

window.addEventListener('scroll', debounce(animateOnScroll, 100));
// Trigger on page load
window.addEventListener('load', animateOnScroll);

// ========================================
// Contact Form
// ========================================

/**
 * Handle contact form submission
 */
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // Show success message (you would typically send this to a server)
    showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
    
    // Reset form
    contactForm.reset();
    
    // In a real implementation, you would send the data to your server:
    // fetch('/api/contact', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formData),
    // })
    // .then(response => response.json())
    // .then(data => {
    //     showNotification('Message sent successfully!', 'success');
    //     contactForm.reset();
    // })
    // .catch(error => {
    //     showNotification('Failed to send message. Please try again.', 'error');
    // });
});

/**
 * Show notification message
 */
function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        padding: '1rem 2rem',
        backgroundColor: type === 'success' ? '#4ade80' : '#ef4444',
        color: '#1a1a1a',
        borderRadius: '8px',
        fontWeight: '700',
        zIndex: '10000',
        animation: 'slideInRight 0.3s ease-out',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
    });
    
    // Add to page
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ========================================
// Image Loading
// ========================================

/**
 * Lazy load images
 */
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
window.addEventListener('load', lazyLoadImages);

// ========================================
// Parallax Effect (Optional Enhancement)
// ========================================

/**
 * Simple parallax effect for hero background
 */
function parallaxEffect() {
    const heroBackground = document.querySelector('.hero-background');
    if (!heroBackground) return;
    
    const scrolled = window.pageYOffset;
    const parallax = scrolled * 0.5;
    
    heroBackground.style.transform = `translateY(${parallax}px)`;
}

window.addEventListener('scroll', debounce(parallaxEffect, 10));

// ========================================
// Initialize Everything on Page Load
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio website loaded successfully! 🚀');
    
    // Set initial active nav link
    setActiveNavLink();
    
    // Trigger initial animations
    animateOnScroll();
    checkStatsVisibility();
    animateSkillBars();
});

// ========================================
// Performance Optimization
// ========================================

/**
 * Preload critical images
 */
window.addEventListener('load', () => {
    const criticalImages = [
        'images/profile.jpg',
        'images/project1.jpg'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
});

// ========================================
// Error Handling
// ========================================

/**
 * Handle image loading errors
 */
document.addEventListener('error', (e) => {
    if (e.target.tagName === 'IMG') {
        console.warn('Image failed to load:', e.target.src);
        // You could set a placeholder image here
        // e.target.src = 'images/placeholder.jpg';
    }
}, true);

/**
 * Log any JavaScript errors
 */
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.message);
});
