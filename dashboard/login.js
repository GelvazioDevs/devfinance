var btnlogar = document.querySelector("#logar")
var btncadastro = document.querySelector("#cadastro")

var body = document.querySelector("body")

btnlogar.addEventListener("click", function () {
    body.className = "logar-js";
    window.location.href = "index.html";
});

btncadastro.addEventListener("click", function () {
    body.className = "cadastro-js";
});