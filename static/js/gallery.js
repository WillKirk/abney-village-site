"use strict";
function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    img.src = src;
    lightbox.classList.remove('hidden');
    lightbox.classList.add('flex');
}
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.add('hidden');
    lightbox.classList.remove('flex');
}
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape')
        closeLightbox();
});
