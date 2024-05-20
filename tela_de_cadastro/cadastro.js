// *****DARK MODE*****

// const mode= document.getElementById('mode_icon');

// mode.addEventListener('click', () =>{
//     const form = document.getElementById('container');
//     if(mode.classList.contains('fa-moon')) {
//         mode.classList.remove('fa-moon');
//         mode.classList.add('fa-sun');

//         return;
//     }
//     mode.classList.add('fa-moon');
//     mode.classList.remove('fa-sun');
//     form.classList.remove('dark')
// });
const $html = document.querySelector('html');
const $checkbox = document.querySelector('#switch');

$checkbox.addEventListener('change', function() {
  $html.classList.toggle('dark-mode')
})


const form = document.getElementById("form");
const name = document.getElementById("fullname")
const date = document.getElementById("birthdate")
const cpf = document.getElementById("cpf")
const mothername = document.getElementById("mothername")
const email = document.getElementById("email")
const phonenumber = document.getElementById("phonenumber")
const number = document.getElementById("number")
const cep = document.getElementById("cep")
const address = document.getElementById("address")
const username = document.getElementById("username")
const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirmpassword")
const female = document.getElementById("female")
const male = document.getElementById("male")
const other = document.getElementById("other")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    checkInputFullName();
    checkInputBirthDate();
    checkInputCpf();
})

function checkInputFullName(){
    const fullnameValue = fullname.value;

    //mostrar o aviso e mostrar a mensagem de erro
    if(fullnameValue === ""){
        errorInput(fullname, "Preencha com o nome completo!")
    }else{ //usado para não ficar o erro para sempre na página.
        const formItem = fullname = fullname.parentElement;
        formItem.className = "form-content"
    }
    
}

function checkInputBirthDate(){
    const birthdateValue = birthdate.value;

    if(birthdateValue === ""){
        errorInput(birthdate, "Preencha com sua data de nascimento!")
    }else{
        const formItem = birthdate = birthdate.parentElement;
        formItem.className = "form-content"
    }


}

function checkInputCpf(){
    const cpfValue = cpf.value;

    if(cpfValue === ""){
        errorInput(cpf, "Preencha com seu CPF!")
    }else{
        const formItem = cpf = cpf.parentElement;
        formItem.className = "form-content"
    }


}






function errorInput(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message;

    formItem.className = "form-content error"

}

//PAREI EM 29:30 DA AULA/TUTORIAL!!