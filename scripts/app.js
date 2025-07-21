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

