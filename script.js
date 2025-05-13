document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const logosCount = 5;
    const logos = [];

    let headerWidth = header.offsetWidth;
    let headerHeight = header.offsetHeight;

    const corners = [
        { x: 0, y: 0 }, // lewy górny
        { x: headerWidth - 80, y: 0 }, // prawy górny
        { x: 0, y: headerHeight - 80 }, // lewy dolny
        { x: headerWidth - 80, y: headerHeight - 80 }, // prawy dolny
        { x: headerWidth / 2 - 40, y: headerHeight / 2 - 40 } // środek (opcjonalnie)
    ];

    for (let i = 0; i < logosCount; i++) {
        const img = document.createElement('img');
        img.src = 'logo-ug.png';
        img.className = 'logo-bg';

        const corner = corners[i % corners.length];
        const posX = corner.x;
        const posY = corner.y;

        const speedX = 0.3 + Math.random() * 0.3;
        const speedY = 0.3 + Math.random() * 0.3;

        img.style.left = posX + 'px';
        img.style.top = posY + 'px';

        header.appendChild(img);
        logos.push({ el: img, x: posX, y: posY, dx: speedX, dy: speedY });
    }

    window.addEventListener('resize', () => {
        headerWidth = header.offsetWidth;
        headerHeight = header.offsetHeight;
    });

    function animateLogos() {
        logos.forEach(logo => {
            logo.x += logo.dx;
            logo.y += logo.dy;

            if (logo.x < 0 || logo.x > headerWidth - 80) logo.dx *= -1;
            if (logo.y < 0 || logo.y > headerHeight - 80) logo.dy *= -1;

            logo.el.style.left = logo.x + 'px';
            logo.el.style.top = logo.y + 'px';
        });

        requestAnimationFrame(animateLogos);
    }

    animateLogos();
});
