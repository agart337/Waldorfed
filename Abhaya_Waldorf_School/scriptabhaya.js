
// arrows
const wrapper = document.getElementById('imageWrapper');
const image = document.getElementById('carouselImage');
const prevArrow = document.getElementById('prevArrow');
const nextArrow = document.getElementById('nextArrow');

wrapper.addEventListener('mousemove', (e) => {
    const rect = image.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const isLeft = x < rect.width / 2;

    // Set position of the arrow directly under the cursor
    const arrow = isLeft ? prevArrow : nextArrow;
    arrow.style.left = `${x}px`;
    arrow.style.top = `${y}px`;
    arrow.style.opacity = 1;

    // Hide the other arrow
    (isLeft ? nextArrow : prevArrow).style.opacity = 0;
});

wrapper.addEventListener('mouseleave', () => {
    prevArrow.style.opacity = 0;
    nextArrow.style.opacity = 0;
});

prevArrow.addEventListener('click', (e) => {
    e.stopPropagation(); // prevent event bubbling
    changeSlide(-1);
});

nextArrow.addEventListener('click', (e) => {
    e.stopPropagation();
    changeSlide(1);
});

// Tridha image carousel
const images = ["../Abhaya_Waldorf_School/3.jpg", "../Abhaya_Waldorf_School/2.jpg", "../Abhaya_Waldorf_School/1.jpg", "../Abhaya_Waldorf_School/4.jpg", "../Abhaya_Waldorf_School/5.jpg", "../Abhaya_Waldorf_School/6.jpg", "../Abhaya_Waldorf_School/7.jpg", "../Abhaya_Waldorf_School/8.jpg", "../Abhaya_Waldorf_School/9.jpg",];
let currentIndex = 0;

function changeSlide(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    document.getElementById("carouselImage").src = images[currentIndex];
}