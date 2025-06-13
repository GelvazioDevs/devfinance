function validaSessao() {
    const token = localStorage.getItem("token");
    if (token) {
        // Valida o token
        if (token == "123456") {
            //window.location.href = "index.html"
        } else {
            alert("Sessão inválida!");
            window.location.href = "login.html"
        }
    } else {
        alert("Token inválido!");
        window.location.href = "login.html"
    }
}

function logout() {
    localStorage.setItem("token", "");
    window.location.href = "login.html"
}