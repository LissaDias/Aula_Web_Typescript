const SHOW_ERROR_MESSAGES = 'show-error-message'
const msg = 'As senhas devem ser iguais!'

//querySelector - pega pela classe.
const form = document.querySelector('.form') as HTMLFormElement
//podia ser let mas queremos um item que não vai variar, então constante.
const username = document.querySelector('.username') as HTMLInputElement
const email = document.querySelector('.email') as HTMLInputElement
const senha = document.querySelector('.senha') as HTMLInputElement
const senhaconfirm = document.querySelector('.senhaconfirm') as HTMLInputElement

function verificarCamposVazios(...inputs:HTMLInputElement[]){
// inputs - pode ser qq nome.
    inputs.forEach((campo)=>{ //campo tbm, pode ser qq nome
        if(!campo.value){
            // console.log(`${campo.className} está vazio. Todos os campos devem ser preenchidos!`)
            apresentaMsgErro(campo, "Todos os campos devem ser preenchidos!")
        }
    })
}

form.addEventListener('submit', function(event){
    event.preventDefault(); //trava o evento de submissão pra primeiro as validações e depois sim, submeter.
    excluirMsgErro(this) //this representa o form (estamos tratando dele) - podia escrever form no lugar.
    verificarCamposVazios(username,email,senha,senhaconfirm)
    verificarSenhas(senha, senhaconfirm)
    if(verificarEnvioFormulario(form)){
        form.submit()
        //console.log("teste submit"); //só pra mostrar que está funcionando
    }
})

function apresentaMsgErro(input:HTMLInputElement, msg:string){
    const formField = input.parentElement as HTMLDivElement
    const erroMsg = formField.querySelector('.error-message') as HTMLSpanElement
    erroMsg.innerText = msg
    formField.classList.add(SHOW_ERROR_MESSAGES)
}

function excluirMsgErro(form:HTMLFormElement):void{
    form.querySelectorAll('.show-error-message').forEach((item)=>{
        item.classList.remove(SHOW_ERROR_MESSAGES)
    })
}

function verificarSenhas(senha:HTMLInputElement, senhaconfirm:HTMLInputElement){
        if(senha.value !== senhaconfirm.value){
            apresentaMsgErro(senha, "As senhas devem ser iguais!")
            apresentaMsgErro(senhaconfirm, "As senhas devem ser iguais!")
        }
}

function verificarEnvioFormulario(form:HTMLFormElement):boolean{
    let send = true
    form.querySelectorAll('.'+SHOW_ERROR_MESSAGES).forEach(() => (send = false))
    return send 
}
