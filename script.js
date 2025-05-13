document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const logosCount = 5;
    const logos = [];

    let headerWidth = header.offsetWidth;
    let headerHeight = header.offsetHeight;

    const corners = [
        { x: 0, y: 0 },                                 
        { x: 0, y: headerHeight - 80 },                 
        { x: headerWidth - 80, y: 0 },                  
        { x: headerWidth - 80, y: headerHeight - 80 },  
        { x: headerWidth / 2 - 40, y: headerHeight / 2 - 40 } 
    ];

    for (let i = 0; i < logosCount; i++) {
        const img = document.createElement('img');
        img.src = 'logo-ug.png';
        img.className = 'logo-bg';
        img.style.position = 'absolute';

        const corner = corners[i % corners.length];
        const posX = corner.x;
        const posY = corner.y;


        let speedX = 0, speedY = 0;
        const baseSpeed = 0.4 + Math.random() * 0.3;

        if (i === 0 || i === 1) {

            speedX = baseSpeed;
            speedY = 0;
        } else if (i === 2 || i === 3) {

            speedX = -baseSpeed;
            speedY = 0;
        } else {

            speedX = baseSpeed;
            speedY = baseSpeed;
        }

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

document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.agenda-tab');
    const days = document.querySelectorAll('.agenda-day');

    const defaultDay = document.querySelector('.agenda-day-1');
    defaultDay.classList.add('active');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const selectedDay = tab.dataset.day;

            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            days.forEach(d => {
                d.classList.remove('active');
            });

            const newActive = document.querySelector(`.agenda-day-${selectedDay}`);
            newActive.classList.add('active');
        });
    });
});