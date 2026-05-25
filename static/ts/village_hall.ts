const form = document.getElementById('booking-form') as HTMLFormElement;
const successMsg = document.getElementById('form-success') as HTMLElement;

form?.addEventListener('submit', async (e: Event) => {
    e.preventDefault();

    const data = new FormData(form);

    const response = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
        form.reset();
        successMsg.classList.remove('hidden');
    } else {
        alert('Something went wrong. Please try again.');
    }
});