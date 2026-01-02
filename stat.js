window.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.stat-box h1');
    const speed = 200;

    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const suffix = counter.getAttribute('data-suffix') || "";
        let count = 0;

        const updateCount = () => {
            const increment = target / speed;

            if (count < target) {
                count += increment;
                counter.innerText = Math.ceil(count) + suffix;
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target + suffix;
            }
        };

        updateCount();
    });
})