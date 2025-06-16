function loadHeader() {
    document.querySelector("#menu-principal").innerHTML = `
<nav class="sidebar header">
    <div class="sidebar-inner">
        <header class="sidebar-header">
            <button type="button" class="sidebar-burger" onclick="toggleSidebar()">
                <i class='bx bx-menu'></i>
            </button>
            <i class='bx bx-dollar dollar'></i>
        </header>
        <nav class="sidebar-menu">
            <button type="button" onclick="redirecionaPagina('index')">
                <i style="font-size: 23px;" class="fa-solid fa-scale-balanced" title="Dashboard"></i>
                <span onclick="redirecionaPagina('index')">Dashboard</span>
            </button>
            <button type="button" onclick="redirecionaPagina('despesa')">
                <i class="fa-solid fa-arrow-down" title="Despesas"></i>
                <span style="margin-left: 10px;" onclick="redirecionaPagina('despesa')">Despesas</span>
            </button>
            <button type="button" onclick="redirecionaPagina('receita')">
                <i class="fa-solid fa-arrow-up" title="Receitas"></i>
                <span style="margin-left: 10px;" onclick="redirecionaPagina('receita')">Receitas</span>
            </button>
            <button type="button" class="has-border" onclick="redirecionaPagina('relatorio')">
                <i class='bx bx-trending-up' title="Relatórios"></i>
                <span style="margin-left: 5px;" onclick="redirecionaPagina('relatorio')">Relatórios</span>
            </button>
            <button type="button" onclick="redirecionaPagina('dashboard')">
                <i class='bx bx-home'></i>
                <span onclick="redirecionaPagina('dashboard')">Home</span>
            </button>
            <button type="button">
                <i class='bx bx-user'></i>
                <span>Accounts</span>
            </button>
            <button type="button" class="has-border">
                <i class='bx bx-cog'></i>
                <span>Settings</span>
            </button>
            <button type="button">
                <i class='bx bx-shape-circle'></i>
                <span>Blockchain</span>
            </button>
            <button type="button">
                <i class='bx bx-data'></i>
                <span>Databases</span>
            </button>
            <button type="button">
                <i class='bx bx-speaker'></i>
                <span>AudioVibe</span>
            </button>
            <button type="button" class="has-border">
                <i class='bx bx-music'></i>
                <span>Soundblast</span>
            </button>
            <button type="button">
                <i class='bx bx-folder'></i>
                <span>Folders</span>
            </button>
            <button type="button">
                <i class='bx bx-layer'></i>
                <span>Levels</span>
            </button>
            <button type="button">
                <i class='bx bx-lock'></i>
                <span>Security</span>
            </button>
        </nav>
    </div>
</nav>`;
}