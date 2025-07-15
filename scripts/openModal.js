//openModal.js
function openModal(id) {
    document.getElementById(id).style.display = 'block';
}

function closeModal(id) {
    const modal = document.getElementById(id);
    const iframe = modal.querySelector('iframe');

    modal.style.display = 'none';

    if (iframe) {
        const src = iframe.src;
        iframe.src = '';
        setTimeout(() => {
            iframe.src = src;
        }, 100);
    }
}


window.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const modalId = params.get("modal");
    if (modalId) {
        openModal(modalId);
    }
});