// More Nav Bar
const dropdown = document.querySelector('.dropdown');
const dropdownContent = document.querySelector('.dropdown_content');
let hideTimeout;

dropdown.addEventListener('mouseenter', () => {
    clearTimeout(hideTimeout);
    dropdownContent.classList.add('show');
});

dropdown.addEventListener('mouseleave', () => {
    hideTimeout = setTimeout(() => {
        dropdownContent.classList.remove('show');
    }, 500);
});

dropdownContent.addEventListener('mouseenter', () => {
    clearTimeout(hideTimeout);
});

dropdownContent.addEventListener('mouseleave', () => {
    hideTimeout = setTimeout(() => {
        dropdownContent.classList.remove('show');
    }, 500);
});

// Gallary
const track = document.querySelector(".slide-track");
const slides = document.querySelectorAll(".slide");

let isDragging = false;
let startX = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID = 0;
let currentIndex = 0;

slides.forEach(img => img.addEventListener("dragstart", e => e.preventDefault()));

track.addEventListener("mousedown", startDrag);
track.addEventListener("mousemove", drag);
track.addEventListener("mouseup", endDrag);
track.addEventListener("mouseleave", endDrag);

function startDrag(e) {
    isDragging = true;
    startX = e.clientX;
    track.style.transition = "none";
}

function drag(e) {
    if (!isDragging) return;
    const delta = e.clientX - startX;
    currentTranslate = prevTranslate + delta;
    track.style.transform = `translateX(${currentTranslate}px)`;
}

function endDrag(e) {
    if (!isDragging) return;
    isDragging = false;

    const moved = currentTranslate - prevTranslate;

    if (moved < -100 && currentIndex < slides.length - 1) {
        currentIndex++;
    } else if (moved > 100 && currentIndex > 0) {
        currentIndex--;
    }

    snapToSlide();
}

function snapToSlide() {
    const viewportWidth = window.innerWidth;
    prevTranslate = -currentIndex * viewportWidth;
    track.style.transition = "0.3s ease";
    track.style.transform = `translateX(${prevTranslate}px)`;
}