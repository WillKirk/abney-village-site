function openLightbox(src: string): void {
    const lightbox = document.getElementById('lightbox') as HTMLElement;
    const img = document.getElementById('lightbox-img') as HTMLImageElement;
    img.src = src;
    lightbox.classList.remove('hidden');
    lightbox.classList.add('flex');
}

function closeLightbox(): void {
    const lightbox = document.getElementById('lightbox') as HTMLElement;
    lightbox.classList.add('hidden');
    lightbox.classList.remove('flex');
}

document.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
});