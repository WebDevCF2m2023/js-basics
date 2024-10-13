document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.getElementById('carousel');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const startButton = document.getElementById('start');
    const stopButton = document.getElementById('stop');
    
    let index = 0;
    const images = carousel.children;
    const totalImages = images.length;
    let autoSlideInterval;

    const updateCarousel = () => {
        carousel.style.transform = `translateX(-${index * 100}%)`;
    };

    const showNextImage = () => {
        index = (index + 1) % totalImages;
        updateCarousel();
    };

    const showPrevImage = () => {
        index = (index - 1 + totalImages) % totalImages;
        updateCarousel();
    };

    const startAutoSlide = () => {
        autoSlideInterval = setInterval(showNextImage, 1000);
    };

    const stopAutoSlide = () => {
        clearInterval(autoSlideInterval);
    };

    nextButton.addEventListener('click', showNextImage);
    prevButton.addEventListener('click', showPrevImage);
    startButton.addEventListener('click', startAutoSlide);
    stopButton.addEventListener('click', stopAutoSlide);
});
