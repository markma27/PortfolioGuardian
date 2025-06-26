// Component Loading Function
function loadComponents() {
    // Load header
    fetch('/components/header.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('body').insertAdjacentHTML('afterbegin', data);
            // Initialize mobile menu after header is loaded
            initializeMobileMenu();
        });

    // Load footer
    fetch('/components/footer.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('body').insertAdjacentHTML('beforeend', data);
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