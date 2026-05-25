const slides = document.querySelectorAll<HTMLElement>('.carousel-slide');
const dots = document.querySelectorAll<HTMLElement>('.carousel-dot');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let current: number = 0;

function goToSlide(index: number): void {
    slides[current].classList.remove('opacity-100');
    slides[current].classList.add('opacity-0');
    dots[current].style.opacity = '0.4';

    current = (index + slides.length) % slides.length;

    slides[current].classList.remove('opacity-0');
    slides[current].classList.add('opacity-100');
    dots[current].style.opacity = '1';
}

let timer: ReturnType<typeof setInterval> = setInterval(() => goToSlide(current + 1), 5000);

function resetTimer(): void {
    clearInterval(timer);
    timer = setInterval(() => goToSlide(current + 1), 5000);
}

prevBtn?.addEventListener('click', () => { goToSlide(current - 1); resetTimer(); });
nextBtn?.addEventListener('click', () => { goToSlide(current + 1); resetTimer(); });

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => { goToSlide(i); resetTimer(); });
});