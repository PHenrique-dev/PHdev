function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => {
            elemento.innerHTML += letra;
        }, 100 * i);
    });
    }

    const titulo = document.querySelector('.digitando');
    typeWriter(titulo);

const ativaMenu = document.querySelector('.fa-bars')
const navMenu = document.querySelector('header .menu')
ativaMenu.addEventListener('click', ()=>{
    ativaMenu.classList.toggle('fa-x')
    navMenu.classList.toggle('ativado')
});
