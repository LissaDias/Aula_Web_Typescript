"use strict";
var urlString = window.location.search;
var urlParams = new URLSearchParams(urlString);
var emailUsuario = urlParams.get('email');
var elementotexto = document.querySelector('.text-center');
elementotexto.append("Seu email " + emailUsuario + " foi cadastrado.");
