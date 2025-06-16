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
        Array("tarefas"      , "Tarefas", "bx bx-grid-alt"),
        Array("pendentes"    , "Pendentes", "bx bx-grid-alt"),
        Array("andamento"    , "Andamento", "bx bx-grid-alt"),
        Array("relatorios"   , "Relatórios", "bx bx-pie-chart-alt-2"),
        Array("configuracoes", "Configurações", "bx bx-cog"),
        Array("login"        , "Sair", "bx bx-log-out",),
    );
}

function atualizaMenu(){
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
    login_banco_dados(); return true;

    // const email = document.querySelector("#login-email").value;
    // const senha = document.querySelector("#login-senha").value;

    // if(email == "admim@gmail.com" && senha == "123456"){
    //     sessionStorage.setItem("token_logado", "54a80097f212347891822cb26b6d5a980968601");
    //     window.location.href = `index.html`;
    // } else {
    //     alert("Usuario ou senha invalido!");
    // }
}

function login_banco_dados(){
    // chama a api de login
    const email = document.querySelector("#login-email").value;
    const senha = document.querySelector("#login-senha").value;

    // async function callApi(method, port, body, oCall, colunas = false, filtro = false) {
    callApi("GET", "auth_user", false, 
        function (data) {
            const aDados = data;
            let temDados = false;
            let email_retornado = false;
            let senha_retornado = false;
            aDados.forEach(function (oDados, key) {
                temDados = true;
                email_retornado = oDados.email;
                senha_retornado = oDados.password;

                if(oDados.email == email && oDados.password == senha){
                    sessionStorage.setItem("token_logado", "54a80097f212347891822cb26b6d5a980968601");
                    window.location.href = `index.html`;
                } else {
                    alert("Usuario ou senha invalido!");
                }
            });

            let validaAcesso = false;
            if(temDados){
                if(email_retornado == email && senha_retornado == senha){
                    validaAcesso = true;                    
                } 
            }
            
            if(validaAcesso){
                sessionStorage.setItem("token_logado", "54a80097f212347891822cb26b6d5a980968601");
                window.location.href = `index.html`;
            } else {
                alert("Usuario ou senha invalido!");
            }
        }, 
        "email, password", "email=eq." + email
    );
}

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".sidebarBtn");
if(sidebarBtn){
    sidebarBtn.onclick = function () {
        sidebar.classList.toggle("active");
        if (sidebar.classList.contains("active")) {
            sidebarBtn.classList.replace("bx-menu", "bx-menu-alt-right");
        } else {
            sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
        }
    }
}