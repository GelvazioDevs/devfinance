const TIPO_RENDENDO_HOJE = "RENDENDO_HOJE";
const TIPO_EM_ANALISE = "EM_ANALISE";
const TIPO_EM_ANDAMENTO = "EM_ANDAMENTO";
const TIPO_PENDENTE_IMPLEMENTACAO = "PENDENTE_IMPLEMENTACAO";

function loadingReceitas(){
    validaSessao('ideias.html');

    let accordion = document.querySelector("#accordionPanelsStayOpen");
    accordion.innerHTML = '';

    const aListaReceitas = getListaReceitas("07/10/2023");
    aListaReceitas.forEach(function(value, key) {
        const codigo      = value[0];
        const tipo = value[1];
        const motivo      = value[2];
        const local       = value[3];
        const data        = value[4];
        const servico     = value[5];
        const custo       = value[6];
        const quantidade  = parseInt(value[7]);
        const comprovante = value[8];
        const posicao     = value[9];

        let subtotal = getFloatValue(custo) * parseInt(quantidade);
        
        loadDataFromHTML(codigo, tipo, motivo, local, data, servico, custo, quantidade, subtotal, comprovante, posicao);        
    });
}

function getListaReceitas(data) {
    if (data == "07/10/2023") {
        return new Array(
         // codigo, Tipo - Descrição -    data - empresa, quantidade - preço unit. - total
            Array(1,  TIPO_RENDENDO_HOJE, data, "TIDAS TECNOLOGIA", "Salário Mensal - Programador", 1, "1200,00", "1200,00"),
            Array(2,  TIPO_RENDENDO_HOJE, data, "CURSOS HOTMART", "Lógica Programação", 1, "89,00", "89,00"),
            Array(3,  TIPO_EM_ANALISE, data, "CURSOS HOTMART", "HTML - Do Zero ao Código!", 1, "89,00", "89,00"),
            Array(4,  TIPO_EM_ANALISE, data, "CURSOS HOTMART", "CSS - Do Zero ao Código!" , 1, "89,00", "89,00"),
            Array(5,  TIPO_EM_ANALISE, data, "CURSOS HOTMART", "JavaScript - ES6 - Do Zero ao Código!", 1, "89,00", "89,00"),
            Array(6,  TIPO_EM_ANALISE, data, "CURSOS HOTMART", "JavaScript - NodeJs - Do Zero ao Código!", 1, "89,00", "89,00"),
            Array(7,  TIPO_EM_ANALISE, data, "CURSOS HOTMART", "JavaScript - ReactJs - Do Zero ao Código!", 1, "89,00", "89,00"),
            Array(8,  TIPO_EM_ANALISE, data, "CURSOS HOTMART", "Java - Básico - Do Zero ao Código!", 1, "89,00", "89,00"),
            Array(8,  TIPO_EM_ANALISE, data, "CURSOS HOTMART", "Java - Intermediário", 1, "89,00", "89,00"),
            Array(8,  TIPO_EM_ANALISE, data, "CURSOS HOTMART", "Java - Avançado", 1, "89,00", "89,00"),
            Array(8,  TIPO_EM_ANALISE, data, "CURSOS HOTMART", "Java - Pleno", 1, "89,00", "89,00"),
            Array(8,  TIPO_EM_ANALISE, data, "CURSOS HOTMART", "Java - Master(API RESTFULL)", 1, "89,00", "89,00"),
            Array(8,  TIPO_EM_ANALISE, data, "CURSOS HOTMART", "PHP - Básico - Do Zero ao Código!", 1, "89,00", "89,00"),
            Array(8,  TIPO_EM_ANALISE, data, "CURSOS HOTMART", "PHP - Intermediário", 1, "89,00", "89,00"),
            Array(8,  TIPO_EM_ANALISE, data, "CURSOS HOTMART", "PHP - Avançado", 1, "89,00", "89,00"),
            Array(8,  TIPO_EM_ANALISE, data, "CURSOS HOTMART", "Python - Básico - Do Zero ao Código!", 1, "89,00", "89,00"),
            Array(8,  TIPO_EM_ANALISE, data, "CURSOS HOTMART", "Python - Intermediário", 1, "89,00", "89,00"),
            Array(8,  TIPO_EM_ANALISE, data, "CURSOS HOTMART", "Python - Avançado", 1, "89,00", "89,00"),
            Array(8,  TIPO_EM_ANALISE, data, "CURSOS HOTMART", "Python - Django Framework", 1, "89,00", "89,00"),
            Array(8,  TIPO_EM_ANALISE, data, "CURSOS HOTMART", "Python - Django Rest API", 1, "89,00", "89,00"),           
        );
    }
}

function loadDataFromHTML(codigo, responsavel, motivo, local, data, servico, custo, quantidade, subtotal, comprovante, posicao) {
    let accordion = document.querySelector("#accordionPanelsStayOpen");

    accordion.innerHTML += `
    <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-heading-` + codigo + `">
            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapse-` + codigo + `" aria-expanded="true"
                aria-controls="panelsStayOpen-accordion-01">
                <h4>Rendendo hoje!</h4>
            </button>
        </h2>
        <div id="panelsStayOpen-collapse-` + codigo + `" class="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-heading-` + codigo + `">
            <div class="accordion-body">
                <div class="recent-sales box"
                    style="display: block;
                    width: 95%;margin-top: 10px; 
                    flex-direction: column; 
                    justify-content: center; 
                    align-items: center;">
                    <div class="title">Fonte Renda ` + codigo + `</div>
                </div>                
            </div>
        </div>
    </div>`;
}