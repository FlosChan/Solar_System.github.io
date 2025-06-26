function createLiveStars() {
    const starsContainer = document.getElementById('stars-container');
    const starLayers = [
        { count: 200, size: [1, 2], speed: 0.3 },   // jauh
        { count: 100, size: [2, 3], speed: 0.7 },   // sedang
        { count: 80, size: [3, 4], speed: 1.2 }    // dekat
    ];
    const stars = [];

    function randomBetween(a, b) {
        return a + Math.random() * (b - a);
    }

    starLayers.forEach(layer => {
        for (let i = 0; i < layer.count; i++) {
            const star = document.createElement('div');
            const size = randomBetween(layer.size[0], layer.size[1]);
            star.className = 'star';
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.dataset.speed = layer.speed;
            star.dataset.x = randomBetween(0, window.innerWidth);
            star.dataset.y = randomBetween(0, window.innerHeight);
            star.style.left = `${star.dataset.x}px`;
            star.style.top = `${star.dataset.y}px`;
            starsContainer.appendChild(star);
            stars.push(star);
        }
    });

    function animateStars() {
        for (const star of stars) {
            let x = parseFloat(star.dataset.x);
            let y = parseFloat(star.dataset.y);
            const speed = parseFloat(star.dataset.speed);

            x += speed;
            y += speed;

            if (x > window.innerWidth || y > window.innerHeight) {
                x = randomBetween(-50, 0);
                y = randomBetween(-50, 0);
            }

            star.dataset.x = x;
            star.dataset.y = y;
            star.style.transform = `translate(${x}px, ${y}px)`;
        }
        requestAnimationFrame(animateStars);
    }

    animateStars();
}
createLiveStars();
