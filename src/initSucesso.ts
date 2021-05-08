const urlString = window.location.search
const urlParams = new URLSearchParams(urlString)
const emailUsuario = urlParams.get('email')
let elementotexto = document.querySelector('.text-center') as HTMLParagraphElement
elementotexto.append(`Seu email ${emailUsuario} foi cadastrado.`)