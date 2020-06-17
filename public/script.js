window.onload = function() {
    // Mousemove parallax card effect
    document.querySelectorAll('.exercise-card').forEach((card) => {
        const height = card.clientHeight;
        const width = card.clientWidth;

        card.addEventListener('mousemove', handleMouseMove)

        function handleMouseMove(e) {
            // store x-y values of mouse
            const xValue = e.layerX;
            const yValue = e.layerY;
            
            // calculate x-y rotation values
            const yRotation = 20 * ((xValue - width / 2) / width);
            const xRotation = -20 * ((yValue - height / 2) / height);
            
            /* apply css transformation property */
            const string = 'perspective(500px) scale(1.1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)';

            card.style.transform = string;
        };

        card.addEventListener('mouseout', function() {
        card.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
        });

        card.addEventListener('mousedown', function() {
        card.style.transform = 'perspective(500px) scale(0.95) rotateX(0) rotateY(0)'
        });

        card.addEventListener('mouseup', function() {
        card.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)'
        });
    })
}