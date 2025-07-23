function exibirAlerta() {
  alert("Você clicou no botão!");
}

document.addEventListener('DOMContentLoaded', function () {
const carrossel = document.getElementById('carrossel');
const btnEsquerda = document.querySelector('.seta.esquerda');
const btnDireita = document.querySelector('.seta.direita');

const scrollValor = 270;

if (carrossel && btnEsquerda && btnDireita) {
    btnEsquerda.addEventListener('click', () => {
    carrossel.scrollBy({ left: -scrollValor, behavior: 'smooth' });
    });

    btnDireita.addEventListener('click', () => {
    carrossel.scrollBy({ left: scrollValor, behavior: 'smooth' });
    });
} else {
    console.warn("Elementos do carrossel não encontrados.");
}
});

const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    contents.forEach(c => c.classList.remove('active'));

    tab.classList.add('active');
    const target = tab.getAttribute('data-tab');
    document.getElementById(target).classList.add('active');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.getElementById('storiesCarousel');
  const leftBtn = document.querySelector('.story-arrow.left');
  const rightBtn = document.querySelector('.story-arrow.right');
  const scrollAmount = 150;

  leftBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  rightBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });
});
