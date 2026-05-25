"use strict";
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.carousel-dot');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let current = 0;
function goToSlide(index) {
    slides[current].classList.remove('opacity-100');
    slides[current].classList.add('opacity-0');
    dots[current].classList.remove('opacity-100');
    dots[current].classList.add('opacity-40');
    current = (index + slides.length) % slides.length;
    slides[current].classList.remove('opacity-0');
    slides[current].classList.add('opacity-100');
    dots[current].classList.remove('opacity-40');
    dots[current].classList.add('opacity-100');
}
// Auto advance every 5 seconds
let timer = setInterval(() => goToSlide(current + 1), 5000);
function resetTimer() {
    clearInterval(timer);
    timer = setInterval(() => goToSlide(current + 1), 5000);
}
prevBtn === null || prevBtn === void 0 ? void 0 : prevBtn.addEventListener('click', () => { goToSlide(current - 1); resetTimer(); });
nextBtn === null || nextBtn === void 0 ? void 0 : nextBtn.addEventListener('click', () => { goToSlide(current + 1); resetTimer(); });
dots.forEach((dot, i) => {
    dot.addEventListener('click', () => { goToSlide(i); resetTimer(); });
});
