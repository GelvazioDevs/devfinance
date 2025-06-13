async function buscarDados() {
    const users = await buscarDadosApi();

    console.log(users);

    return;
}

async function buscarDadosApi() {
    const dados = await fetch('http://localhost:3333/usuarios');
    const usuarios = await dados.json();
    return usuarios;
}

function entrar() {

    const usuario = document.querySelector("#email").value;
    const senha = document.querySelector("#senha").value;

    // BUSCA OS DADOS DO BANCO DE DADOS OU API
    const usuarioBancoDados = "admin@email.com";
    const senhaBancoDados = "123456";

    let valida = false;
    if (usuario == usuarioBancoDados) {
        if (senha == senhaBancoDados) {
            valida = true;
        }
    }

    alert("validando usuario e senha...");

    if (valida) {
        localStorage.setItem("token", "123456");
        window.location.href = "http://127.0.0.1:5500/index.html";
    } else {
        alert("Usuario/senha inválido!");
    }
}