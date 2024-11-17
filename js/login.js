// ---------- Funções Gerais  ---------- //

function mostrarPopup (input,label) {
    // Mostrar popup de campo obrigatório
    input.addEventListener("focus", function () {
        label.classList.add("required-popup");
    });
    // Ocultar popup de campo obrigatório
    input.addEventListener("blur", function () {
        label.classList.remove("required-popup");
    });
}
function estilizarInputCorreto(input, helper){
    helper.classList.remove("visible");
    input.classList.remove ("error");
    input.classList.add ("corret");
}

function estilizarInputIncorreto(input, helper) {
    helper.classList.add("visible");
    input.classList.add ("error");
    input.classList.remove ("corret");
}

// ----------Validação Username ------------//
    let usernameInput = document.getElementById("username");
    let usernameLabel = document.querySelector('label[for="username"]');
    let usernameHelper = document.getElementById("username-helper");

    mostrarPopup (usernameInput, usernameLabel);

// --------Validação valor do input Username ----------//
usernameInput.addEventListener ("change", (e) => {
    let valor = e.target.value

    if (valor.length <3){
        usernameHelper.innerText = "Precisa ter 3 ou mais caracteres";
        estilizarInputIncorreto(usernameInput, usernameHelper)
        inputsCorretos.username = false
    } else {
        estilizarInputCorreto(usernameInput,usernameHelper)
        inputsCorretos.username =true
    }
})

// ------- Validação Senha --------//
let senhaInput = document.getElementById("senha");
let senhaLabel = document.querySelector('label[for="senha"]');
let senhaHelper = document.getElementById("senha-helper");

mostrarPopup(senhaInput, senhaLabel);

senhaInput.addEventListener("blur", (e) => {
    let valor = e.target.value

    if(valor == ""){
        senhaHelper.innerText = "O campo senha não pode estar vazio"
        estilizarInputIncorreto(senhaInput, senhaHelper)
        inputsCorretos.senha = false
    } else  {
        estilizarInputCorreto(senhaInput, senhaHelper)
        inputsCorretos.senha = true
    }
})
// ---------Botão de enviar ---------------//
let btnSubmit = document.querySelector('button[type="submit"]')

let inputsCorretos = {
    username: false,
    senha: false
}

btnSubmit.addEventListener("click", (e) => {
    if (inputsCorretos.username == false && inputsCorretos.senha == false){
        e.preventDefault()
        alert ("Precisa preencher todos os campos obrigatórios")
    } else {
        alert ("Formulário enviado com sucesso")
    }
})