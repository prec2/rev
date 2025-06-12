document.addEventListener('DOMContentLoaded', function() {
    const hiddenText = document.getElementById('hiddenText');
    let isMouseDown = false;

    // Mouse down event - show text
    document.addEventListener('mousedown', function(e) {
        if (e.button === 0) { // Left mouse button
            isMouseDown = true;
            hiddenText.style.color = 'red';
        }
    });

    // Mouse up event - hide text
    document.addEventListener('mouseup', function(e) {
        if (e.button === 0) { // Left mouse button
            isMouseDown = false;
            hiddenText.style.color = 'black';
        }
    });

    // Handle mouse leaving window while button is pressed
    document.addEventListener('mouseleave', function() {
        if (isMouseDown) {
            isMouseDown = false;
            hiddenText.style.color = 'black';
        }
    });
});