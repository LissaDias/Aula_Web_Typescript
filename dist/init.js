"use strict";
var SHOW_ERROR_MESSAGES = 'show-error-message';
var msg = 'As senhas devem ser iguais!';
//querySelector - pega pela classe.
var form = document.querySelector('.form');
//podia ser let mas queremos um item que não vai variar, então constante.
var username = document.querySelector('.username');
var email = document.querySelector('.email');
var senha = document.querySelector('.senha');
var senhaconfirm = document.querySelector('.senhaconfirm');
function verificarCamposVazios() {
    var inputs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        inputs[_i] = arguments[_i];
    }
    // inputs - pode ser qq nome.
    inputs.forEach(function (campo) {
        if (!campo.value) {
            // console.log(`${campo.className} está vazio. Todos os campos devem ser preenchidos!`)
            apresentaMsgErro(campo, "Todos os campos devem ser preenchidos!");
        }
    });
}
form.addEventListener('submit', function (event) {
    event.preventDefault(); //trava o evento de submissão pra primeiro as validações e depois sim, submeter.
    excluirMsgErro(this); //this representa o form (estamos tratando dele) - podia escrever form no lugar.
    verificarCamposVazios(username, email, senha, senhaconfirm);
    verificarSenhas(senha, senhaconfirm);
    if (verificarEnvioFormulario(form)) {
        form.submit();
        //console.log("teste submit"); //só pra mostrar que está funcionando
    }
});
function apresentaMsgErro(input, msg) {
    var formField = input.parentElement;
    var erroMsg = formField.querySelector('.error-message');
    erroMsg.innerText = msg;
    formField.classList.add(SHOW_ERROR_MESSAGES);
}
function excluirMsgErro(form) {
    form.querySelectorAll('.show-error-message').forEach(function (item) {
        item.classList.remove(SHOW_ERROR_MESSAGES);
    });
}
function verificarSenhas(senha, senhaconfirm) {
    if (senha.value !== senhaconfirm.value) {
        apresentaMsgErro(senha, "As senhas devem ser iguais!");
        apresentaMsgErro(senhaconfirm, "As senhas devem ser iguais!");
    }
}
function verificarEnvioFormulario(form) {
    var send = true;
    form.querySelectorAll('.' + SHOW_ERROR_MESSAGES).forEach(function () { return (send = false); });
    return send;
}
