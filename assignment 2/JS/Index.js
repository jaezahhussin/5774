let currentSlide = 0;

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelector('.carousel-images');
    const totalSlides = document.querySelectorAll('.carousel img').length;

    document.querySelector('.next-slide').addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlide();
    });

    document.querySelector('.prev-slide').addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlide();
    });

    function updateSlide() {
        images.style.transform = `translateX(${-currentSlide * 100}%)`;
    }
});
