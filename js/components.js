// Component Loading Function
function loadComponents() {
    // Load header
    fetch('components/header.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('body').insertAdjacentHTML('afterbegin', data);
        });

    // Load footer
    fetch('components/footer.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('body').insertAdjacentHTML('beforeend', data);
        });
}

// Initialize components when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadComponents();
}); 