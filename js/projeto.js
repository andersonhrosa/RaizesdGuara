// ---------- função para EMAIL e MENSAGEM  ---------- //

let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");


function mostrarPopup(input, label) {
    // Mostrar popup de campo obrigatório
    input.addEventListener("focus", function () {
        label.classList.add("required-popup");
    
    });

    // Ocultar popup de campo obrigatório
    input.addEventListener("blur", function () {
        label.classList.remove("required-popup");
       
    });
}

// Mostrar popup de campo obrigatório
mostrarPopup(emailInput, emailLabel);

// ---------- VALIDAÇÃO EMAIL  ---------- //
emailInput.addEventListener("change", function (e) {
    let valor = e.target.value;
    if (valor.includes("@") && valor.includes(".com")) {
        // Email válido

        emailHelper.innerText = "E-mail válido!";
        emailHelper.classList.remove("error");
        emailHelper.classList.add("success");
    } else {
        // Email incorreto
        emailHelper.innerText = "Insira um e-mail válido!";
        emailHelper.classList.remove("success");
        emailHelper.classList.add("error");
        emailHelper.classList.add("visible");
    }
});

//
let mensagemInput = document.getElementById("message");
let mensagemLabel = document.querySelector('label[for="message"]');
let mensagemHelper = document.getElementById("mensagem-helper");


mostrarPopup(mensagemInput, mensagemLabel);
// ---------- VALIDAÇÃO MENSAGEM  ---------- //

mensagemInput.addEventListener("change", function (e) {
    let valor = e.target.value;
    if (valor.length < 50) {
        mensagemHelper.innerText = "A mensagem precisar ter 50 ou mais caracteres."
        mensagemHelper.classList.add("error");
        mensagemHelper.classList.remove("success");
        mensagemHelper.classList.add("visible")
    } else {
        mensagemHelper.innerText = "Clique em enviar!"
        mensagemHelper.classList.remove("error");
        mensagemHelper.classList.add("success");
        mensagemHelper.classList.add("visible");
    }

});

// ---------- MANIPULAÇÃO DO BOTAO  ---------- //

document.getElementById("contato-form").addEventListener("submit", function (e) {
    let emailValido = emailHelper.classList.contains("success");
    let mensagemValida = mensagemHelper.classList.contains("success");
    if (emailValido && mensagemValida) {
        alert("Mensagem enviada com sucesso! Nossa equipe retornará o contato via e-mail em até 3 dias úteis.");
    } else {
        alert("Preencha as informações conforme solicitado!");
        e.preventDefault();

    }
});