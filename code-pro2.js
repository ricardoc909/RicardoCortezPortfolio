// Smooth scrolling for all links with hash fragments
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });

        // Show custom cursor during smooth scrolling
        const customCursor = document.querySelector('.custom-cursor');
        customCursor.style.display = 'block'; // Show cursor
    });
});

// Create custom cursor
document.addEventListener('DOMContentLoaded', function() {
    const customCursor = document.createElement('div');
    customCursor.classList.add('custom-cursor'); // Add class for styling
    customCursor.style.position = 'fixed'; // Use fixed position
    customCursor.style.width = '32px'; // Set cursor width
    customCursor.style.height = '32px'; // Set cursor height
    customCursor.style.backgroundImage = "url('https://img.freepik.com/premium-psd/baseball_624511-329.jpg?size=338&ext=jpg&ga=GA1.1.735520172.1710288000&semt=ais')";
    customCursor.style.backgroundSize = 'contain';
    customCursor.style.backgroundRepeat = 'no-repeat';
    customCursor.style.pointerEvents = 'none'; // Disable pointer events on the cursor itself
    customCursor.style.zIndex = '9999';
    document.body.appendChild(customCursor);

    // Update custom cursor position based on mouse movement
    document.addEventListener('mousemove', function(event) {
        customCursor.style.left = event.clientX + 'px';
        customCursor.style.top = event.clientY + 'px';
    });
});



