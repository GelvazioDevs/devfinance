const STATUS_TAREFA_EM_ANDAMENTO = "EM_ANDAMENTO";
const STATUS_TAREFA_EM_ANALISE = "EM_ANALISE";
const STATUS_TAREFA_PENDENTE_DESENVOLVIMENTO = "PENDENTE";
const STATUS_TAREFA_CONCLUIDA = "CONCUIDO";

function loadingTarefas(pagina, status = false){
    validaSessao(pagina);

    let accordion = document.querySelector("#accordionPanelsStayOpen");
    accordion.innerHTML = '';

    atualizaListaTarefas(status);
}

function atualizaListaTarefas(status = false) {    
    let aListaTarefas = new Array();
    callApi("GET", "tarefa", undefined, function (data) {
        const aDados = data;
        aDados.forEach(function (oDados, key) {
            if(status){
                if(status == oDados.tipo){
                    aListaTarefas.push(
                        Array(oDados.codigo, 
                            oDados.tipo,oDados.data_tarefa, oDados.assunto, oDados.descricao, oDados.ticket, oDados.horas,oDados.user_id
                        )
                    );    
                }
            } else {
                aListaTarefas.push(
                    Array(oDados.codigo, 
                        oDados.tipo,oDados.data_tarefa, oDados.assunto, oDados.descricao, oDados.ticket, oDados.horas,oDados.user_id
                    )
                );
            }
        });

        aListaTarefas.forEach(function(value, key) {
            // codigo, Tipo - Descrição -  data - ticket - horas
            const codigo      = value[0];
            const tipo        = value[1];
            let data          = value[2];
            const assunto     = value[3];
            const descricao   = value[4];
            const ticket      = value[5];
            const horas       = value[6];

            const date = new Date(data);

            // console.log(date.getFullYear()); // prints the year (e.g. 2021)
            // console.log(date.getMonth()); // prints the month (0-11, where 0 = January)
            // console.log(date.getDate()); // prints the day of the month (1-31)
            // console.log(date.getHours()); // prints the hour (0-23)
            // console.log(date.getMinutes()); // prints the minute (0-59)
            // console.log(date.getSeconds()); // prints the second (0-59)

            data = date.getDate() + ' de ' + getMesExtenso(date.getMonth()) + ' de ' + date.getFullYear();

            loadDataFromHTML(codigo, tipo, assunto, descricao, data, ticket, horas);
        });
    });

    return aListaTarefas;
}

function getDataFromHTML(codigo, tipo, assunto, descricao, data, ticket, horas, codigo_pai = false) {
    if(pai){
        return `
        <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-heading-` + codigo + `">
                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapse-` + codigo + `" aria-expanded="true"
                    aria-controls="panelsStayOpen-accordion-01">
                    <h4>Assunto:${assunto} - ${data} - Ticket - ${ticket}</h4>
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
                        <h4>Data:${data}</h4>
                        <h4>Ticket:${ticket}, mais detalhes <a href="https://redmine.tidas.com.br/issues/${ticket}" target="_blank">aqui</a></h4>
                        <h4>Horas:${horas}</h4>
                        <h4>Status:${tipo}</h4>
                        <div class="title">Descrição:` + descricao + `</div>
                    </div>                
                </div>
            </div>
        </div>`;
    }

    return `
        <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-heading-` + codigo + `">
                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapse-` + codigo + `" aria-expanded="true"
                    aria-controls="panelsStayOpen-accordion-01">
                    <h4>Assunto:${assunto} - ${data} - Ticket - ${ticket}</h4>
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
                        <h4>Data:${data}</h4>
                        <h4>Ticket:${ticket}, mais detalhes <a href="https://redmine.tidas.com.br/issues/${ticket}" target="_blank">aqui</a></h4>
                        <h4>Horas:${horas}</h4>
                        <h4>Status:${tipo}</h4>
                        <div class="title">Descrição:` + descricao + `</div>
                    </div>                
                </div>
            </div>
        </div>`;
}

function loadDataFromHTML(codigo, tipo, assunto, descricao, data, ticket, horas) {
    const dataFromHTML = getDataFromHTML(codigo, tipo, assunto, descricao, data, ticket, horas);

    let accordion = document.querySelector("#accordionPanelsStayOpen");
    accordion.innerHTML = dataFromHTML;    
}
