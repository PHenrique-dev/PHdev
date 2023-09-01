window.addEventListener("scroll", function(){
    let header = document.querySelector('#menu')
    header.classList.toggle('rolagem', window.scrollY > 0)
})
window.sr = ScrollReveal({ reset: true});
sr.reveal('.area-1', {rotate: {x: 0, y: 80, z:0},
    duration: 2000});
sr.reveal('.area-2', {rotate: {x: 0, y: 80, z:0}, 
duration: 2000});
sr.reveal('.area-3', {rotate: {x: 0, y: 80, z:0}, 
duration: 2000});
sr.reveal('.area-4', {rotate: {x: 0, y: 80, z:0}, 
duration: 2000});
sr.reveal('.area-5', {rotate: {x: 0, y: 80, z:0}, 
duration: 2000});
sr.reveal('.area-6', {rotate: {x: 0, y: 80, z:0}, 
duration: 2000});
function typeWriter(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {setTimeout(() => elemento.innerHTML += letra, 75 * i);
    });
}
const titulo = document.querySelector('p');
typeWriter(titulo);