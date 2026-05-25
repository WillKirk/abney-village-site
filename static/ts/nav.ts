const menuToggle = document.getElementById('menu-toggle') as HTMLElement;
const mobileMenu = document.getElementById('mobile-menu') as HTMLElement;
const iconOpen = document.getElementById('icon-open') as HTMLElement;
const iconClose = document.getElementById('icon-close') as HTMLElement;

menuToggle?.addEventListener('click', () => {
    const isOpen = !mobileMenu.classList.contains('hidden');

    if (isOpen) {
        mobileMenu.classList.add('hidden');
        iconOpen.classList.remove('hidden');
        iconClose.classList.add('hidden');
    } else {
        mobileMenu.classList.remove('hidden');
        iconOpen.classList.add('hidden');
        iconClose.classList.remove('hidden');
    }
});