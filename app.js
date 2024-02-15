const form = document.querySelector('.form__container');
const userEmail = document.querySelector('.form__input__email');
const btnSubmit = document.querySelector('.form__button');
const btnDismiss = document.querySelector('.success__dismiss__btn');
const formErrorMsg = document.querySelector('.form__text__error');
const homePageSection = document.querySelector('.home__page');
const successPage = document.querySelector('.success__message');
const successEmail = document.querySelector('.success__user__mail');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if(userEmail.value === '' || !testValidEmail(userEmail.value)) {
        userEmail.classList.add('form__input__email__error');
        formErrorMsg.style.display = "block";
        return;
    }

    showDismissPage();
})

//Função que reseta os estilos de erro do input e form
userEmail.addEventListener("click", () => {
    userEmail.classList.remove('form__input__email__error');
    formErrorMsg.style.display = "none";
})

//Função com Expressão Regular para validar o endereço de e-mail
function testValidEmail(email) {
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}/
    );

    if(emailRegex.test(email)) {
        return true;
    }

    return false;
}

//Função para exibir tela de agradecimento
function showDismissPage() {
    homePageSection.id = 'home__page__success';
    successPage.style.display = "flex";
    successEmail.innerHTML = userEmail.value;

    btnDismiss.addEventListener('click', () => {
        location.reload();
    })
}