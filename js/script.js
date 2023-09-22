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
class FormSubmit{
    constructor(settings){
        this.settings = settings;
        this.form = document.querySelector(settings.button);
        this.formButton = document.querySelector(settings.button);
        if(this.form){
            this.url = this.form.getAttribute("action");
        }
    }
    displaySuccess(){
        this.form.innerHTML = this.settings.success;
    }
    displayError(){
        this.form.innerHTML = this.settings.error;
    }
    getFormObject(){
        const formObject = {};
        const fields = this.form.querySelectorAll("[name]");
        fields.forEach((field) =>{
            formObject[field.getAttribute("name")] = field.value;
        });
        return formObject;
    }
    async sendForm(){
        try{
     await fetch(this.url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(this.getFormObject()),
      });  
      this.displaySuccess();
    } catch(error){
        this.displayError();
        throw new Error(error);
    }
    }
    init(){
        if(this.form) this.formButton.addEventListener("click", () => this.displaySuccess());
        return this;
    }
}
const FormSubmit = new FormSubmit({
    form: "[data-form]",
    button:"[data-button]",
    success: "<h1 class='sucess'> Mensagem enviada!</h1>",
    error: "<h1 class='error'> Mensagem não enviada!</h1>"
});
FormSubmit.init();