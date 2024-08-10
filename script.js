document.addEventListener('DOMContentLoaded', function () {
    // Get elements
    const mainContent = document.getElementById('main-content');
    const n1Image = document.querySelector('img[src="D1.png"]');

    // Function to apply background image
    function applyBackground() {
        mainContent.style.backgroundImage = 'url("Nen1.png")';
        mainContent.style.backgroundSize = 'cover';
        mainContent.style.backgroundPosition = 'center';
        mainContent.style.backgroundRepeat = 'no-repeat';
    }

    // Event listener for N1 image click
    n1Image.addEventListener('click', function () {
        applyBackground();
    });

    // Check if it's the home page and apply background
    if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
        applyBackground();
    }
});
