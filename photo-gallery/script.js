document.addEventListener('DOMContentLoaded', (event) => {
    // Select all gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');

    // Function to create overlay
    function createOverlay(item) {
        const overlay = document.createElement('div');
        overlay.classList.add('image-overlay');
        item.appendChild(overlay);
    }

    // Add overlay to each gallery item
    galleryItems.forEach(item => {
        createOverlay(item);
    });

    // Add hover event to show and hide the overlay
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const overlay = item.querySelector('.image-overlay');
            overlay.style.display = 'block';
        });
        item.addEventListener('mouseleave', () => {
            const overlay = item.querySelector('.image-overlay');
            overlay.style.display = 'none';
        });
    });
});
