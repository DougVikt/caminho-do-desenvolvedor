import { cardsData } from './data_cards.js';

// ===== FUNÇÃO QUE CRIA OS CARDS DINAMICAMENTE =====
function createCards() {
    const container = document.getElementById('cardsContainer');
    const type_card = container.getAttribute('data-type');

    cardsData[type_card].forEach(card => {
        // Cria o elemento <a> que envolve todo o card
        const link = document.createElement('a');
        link.href = card.link;
        link.classList.add('card');
        link.target = "_blank"; // opcional: abre em nova aba

        link.innerHTML = `
            <img src="${card.image}" alt="${card.title}">
            <div class="card-content">
                <h3>${card.title}</h3>
                <p>${card.description}</p>
            </div>
        `;

        container.appendChild(link);
    });
}

// Executa quando a página carregar e registra o listener do menu
window.addEventListener('DOMContentLoaded', () => {
    createCards('new_year'); // ajuste a categoria padrão se desejar

    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            document.querySelector('.nav-links').classList.toggle('active');
        });
    }
});