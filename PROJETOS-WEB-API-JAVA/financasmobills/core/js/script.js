const toggleSidebar = () => document.body.classList.toggle("open");

function redirecionaPagina(pagina) {
    const novaPagina = pagina + "/index.html";
    if (pagina == "index") {
        window.location.href = window.location.href;
    } else {
        window.location.href = novaPagina;
    }
}