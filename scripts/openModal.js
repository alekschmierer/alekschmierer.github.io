//openModal.js
function openModal(id) {
    document.getElementById(id).style.display = 'block';
}

function closeModal(id) {
    const modal = document.getElementById(id);
    modal.style.display = 'none';

    const iframe = modal.querySelector('iframe');
    if (iframe) {
        const src = iframe.src;
        iframe.src = '';
        iframe.src = src;
    }
}