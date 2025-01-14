"use strict";

document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        const icon = button.querySelector('.toggle-icon');
        answer.classList.toggle('hidden');
        icon.textContent = answer.classList.contains('hidden') ? '+' : '-';
    });
});


