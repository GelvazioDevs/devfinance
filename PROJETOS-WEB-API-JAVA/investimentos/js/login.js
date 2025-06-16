function validaSessao(pagina){
    const token_logado = sessionStorage.getItem("token_logado");
    if(token_logado == "54a80097f212347891822cb26b6d5a980968601"){
                
        // redireciona para a pagina home pois usuario ja esta logado
        atualizaMenu();
        
        // Atualiza a aba ativa
        pagina = pagina.slice(0, -5);
        
        document.querySelector("#aba-" + pagina + " a").classList.add("active");
        
        loadingPagina();
    } else {
        window.location.href = "login.html";
    }
}

function validaSessaoSemLogin(pagina){
    // redireciona para a pagina home pois usuario ja esta logado
    atualizaMenu();
    
    // Atualiza a aba ativa
    pagina = pagina.slice(0, -5);
    document.querySelector("#aba-" + pagina + " a").classList.add("active");        
    loadingPagina();
}

function loadingPagina(){
    setTimeout(() => {  
        document.querySelector(".box-load").style.display = "none";
        document.querySelector(".content").style.display = "block";
    }, 1000);
}

function redirecionaPagina(pagina){
    window.location.href = pagina;
}

function getListaMenu(){
    return new Array(
              // pagina, Nome Pagina, Icone Pagina
        Array("index"        , "Principal", "bx bx-grid-alt"),
        Array("despesas"     , "Despesas", "bx bx-grid-alt"),
        Array("receitas"     , "Receitas", "bx bx-grid-alt"),
        Array("ideias"       , "Ideias", "bx bx-grid-alt"),
        Array("relatorios"   , "Relatórios", "bx bx-pie-chart-alt-2"),
        Array("configuracoes", "Configurações", "bx bx-cog"),
        Array("login"        , "Sair", "bx bx-log-out",),
    );
}

function atualizaMenu(){
    var url_atual = window.location.href;
    let baseUrl = "https://investimentos-rho.vercel.app/";
    if(url_atual.includes("http://127.0.0.1:5500/")){
        baseUrl = "http://127.0.0.1:5500/";
    }

    document.querySelector("#menu").innerHTML = "";

    const aListamenus = getListaMenu();   
    let menus = "" ;
    aListamenus.forEach(function(value, key) {
        const nome      = value[0];
        const descricao = value[1];
        const icone     = value[2];
        
        if(nome == "login"){
            menus += `<li id="aba-${nome}">
                        <a href="${nome}.html" onclick="logout()">
                            <i class='${icone}'></i>
                            <span class="links_name">${descricao}</span>
                        </a>
                    </li>`;
        } else {
            menus += `<li id="aba-${nome}">
                        <a href="${nome}.html">
                            <i class='${icone}'></i>
                            <span class="links_name">${descricao}</span>
                        </a>
                    </li>`;
        }
    });

    document.querySelector("#menu").innerHTML = menus;
}

function logout(){
    sessionStorage.setItem("token_logado", "");

    // Remove o token da sessao
    sessionStorage.removeItem("token_logado");

    // Remove all saved data from sessionStorage
    sessionStorage.clear();
}

function login(){
    // chama a api de login
    const email = document.querySelector("#login-email").value;
    const senha = document.querySelector("#login-senha").value;

    if(email == "admim@gmail.com" && senha == "123456"){
        sessionStorage.setItem("token_logado", "54a80097f212347891822cb26b6d5a980968601");
        window.location.href = `index.html`;
    } else {
        alert("Usuario ou senha invalido!");
    }

    // const body = {
    //     usuemail : email,
    //     ususenha : senha
    // };

    // callApi("POST", "login", body, function(data) {
    //     if(data.dadoslogin.login){
    //         const nome = data.dadoslogin.usunome;

    //         // pega os dados de token retornados e seta na sessao do navegador
    //         sessionStorage.setItem("token_logado", data.dadoslogin.token);
    //         sessionStorage.setItem("usuario_logado", nome);

    //         window.location.href = "home.html";
    //     } else {
    //         alert("Usuario ou senha invalido!");
    //     }
    // });
}

function gravaRegistroLogin(){
    // chama a api de cadastro de login
    const nome = document.querySelector("#cadastro-nome").value;
    const email = document.querySelector("#cadastro-email").value;
    const senha = document.querySelector("#cadastro-senha").value;

    const body = {
        usunome : nome,
        usuemail : email,
        ususenha : senha,
        usutoken: "token",
        usuativo:1
    };

    callApi("POST", "users", body, function(data) {
        // pega os dados de token retornados e seta na sessao do navegador
        sessionStorage.setItem("token_logado", data.usutoken);

        // redireciona para a pagina home
        window.location.href = "home.html";
    });
}

function resetsenha(){
    const email = document.querySelector("#login-email").value;
    const senha = document.querySelector("#login-senha").value;
    const senha2 = document.querySelector("#login-senha2").value;

    if(senha == "" || senha2 == ""){
        alert("Informe os dois campos de senha!");
        return false;
    }

    if(senha !== senha2){
        alert("Senha não confere!");
        return false;
    }
    const body = {
        usuemail : email,
        ususenha : senha
    };

    callApi("POST", "resetpassword", body, function(data) {
        // Remove all saved data from sessionStorage
        sessionStorage.clear();

        // redireciona para a pagina de login
        window.location.href = "index.html";
    });
}

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".sidebarBtn");
sidebarBtn.onclick = function () {
    sidebar.classList.toggle("active");
    if (sidebar.classList.contains("active")) {
        sidebarBtn.classList.replace("bx-menu", "bx-menu-alt-right");
    } else {
        sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
    }
}