// Component Loading Function
function loadDOMPurify() {
    if (window.DOMPurify) {
        return Promise.resolve(window.DOMPurify);
    }
    return new Promise((resolve, reject) => {
        const s = document.createElement('script');
        s.src = '/js/purify.min.js';
        s.onload = () => resolve(window.DOMPurify);
        s.onerror = () => reject(new Error('Failed to load DOMPurify'));
        document.head.appendChild(s);
    });
}

function loadComponents() {
    loadDOMPurify().then((DOMPurify) => {
        const safeHtml = (html) => DOMPurify.sanitize(html);

        fetch('/components/header.html')
            .then(response => response.text())
            .then((data) => {
                document.querySelector('body').insertAdjacentHTML('afterbegin', safeHtml(data));
                initializeMobileMenu();
            });

        fetch('/components/footer.html')
            .then(response => response.text())
            .then((data) => {
                document.querySelector('body').insertAdjacentHTML('beforeend', safeHtml(data));
            });
    });
}

// Initialize mobile menu functionality
function initializeMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            mobileMenu.classList.toggle('hidden');
            hamburger.classList.toggle('active');
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.hamburger') && !event.target.closest('.mobile-menu')) {
                mobileMenu.classList.add('hidden');
                hamburger.classList.remove('active');
            }
        });

        // Close mobile menu when clicking on a link
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                hamburger.classList.remove('active');
            });
        });
    }
}

// Initialize components when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadComponents();
}); 