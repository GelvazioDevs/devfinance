function getListaMotivos() {
    return new Array(
        Array(1, "Documentação Associação - Cartório"),
        Array(2, "Documentação Associação - Contabilidade"),
        Array(3, "Material Associação - Sede Associação"),
    );
}

function getListaImagemComprovante() {
    return new Array(
        // codigo, nome, caminho 
        Array(0, "Documentação Associação - Cartório", "images/comprovante_1.jpg"),
        Array(1, "Documentação Associação - Cartório", "images/comprovante_2.jpg"),
        Array(2, "Documentação Associação - Cartório", "images/comprovante_3.jpg"),
    );
}

function getListaResponsaveis() {
    return new Array(
        Array(0, "Jessica Maria Koch Moratelli", "Presidente"),
        Array(1, "Alcioni Batisti", "Tesoureiro"),
        Array(2, "Gelvazio Camargo", "Comunicação"),
        Array(3, "Vladi", "Vice-presidente"),
    );
}

function getListaDespesas(data_despesas) {
    if (data_despesas == "07/09/2023") {
        return new Array(
         // codigo, Responsavel - motivo - local -          data -         serviço/produto - custo - quantidade - comprovante - posicao
            Array(1,  0, 1, "Cartorio", data_despesas, "Regularização Associação", "16,00" , 1, 1, "center"),
            Array(2,  0, 1, "Cartorio", data_despesas, "Regularização Associação", "34,80" , 1, 2, "center"),
            Array(3,  0, 1, "Cartorio", data_despesas, "Regularização Associação", "15,90" , 1, 3, "center"),
            Array(4,  0, 1, "Cartorio", data_despesas, "Regularização Associação", "166,55", 1, 4, "center"),
            Array(5,  0, 1, "Cartorio", data_despesas, "Regularização Associação", "16,65" , 1, 5, "center"),
            Array(6,  0, 1, "Cartorio", data_despesas, "Regularização Associação", "16,65" , 1, 6, "center"),
            Array(7,  0, 1, "Cartorio", data_despesas, "Regularização Associação", "67,86" , 1, 7, "center"),
            Array(8,  0, 1, "Cartorio", data_despesas, "Regularização Associação", "165,00", 1, 8, "center"),
           // Array(9,  0, 1, "Cartorio", data_despesas, "Regularização Associação", "101,16", 1, 9, "center"),
            Array(10, 0, 1, "Cartorio", data_despesas, "Regularização Associação",  "14,90", 1, 10, "center"),
        );
    }
}

function loadDespesasInicial() {
    document.querySelector("#mes_selecionado").value = 0;

    document.querySelector("#lista-despesa-1-semestre").style.display = "flex";
    document.querySelector("#lista-despesa-2-semestre").style.display = "flex";

    loadDespesas();

    atualizaListaMesesDespesa();
}

function loadDespesas() {
    validaSessao("despesas.html");

    let body = document.querySelector(".containerTable-body");
    body.innerHTML = "";

    const data_despesas = "07/09/2023";    
    let aListaDespesas = getListaDespesas(data_despesas);
    
    // Carrega as despesas para a tabela
    loadDataToTable(aListaDespesas, 9);  
    
    // Calcula as despesas e atualiza os saldos
    calcularDespesas();
}

function loadDataToTable(aListaDespesas, mes) {
    const mes_selecionado = parseInt(document.querySelector("#mes_selecionado").value);

    let adiciona = true;
    if(mes_selecionado > 0){
        adiciona = false;
        if(mes_selecionado == mes){
            adiciona = true;
        }
    }

    if(adiciona){
        document.querySelector("#tabela-despesas-por-mes").style.display = "flex";
        aListaDespesas.forEach(function(value, key) {
            const codigo      = value[0];
            const responsavel = value[1];
            const motivo      = value[2];
            const local       = value[3];
            const data        = value[4];
            const servico     = value[5];
            const custo       = value[6];
            const quantidade  = parseInt(value[7]);
            const comprovante = value[8];
            const posicao     = value[9];
    
            let subtotal = getFloatValue(custo) * parseInt(quantidade);
            
            loadDataFromHTML(codigo, responsavel, motivo, local, data, servico, custo, quantidade, subtotal, comprovante, posicao);        
        });
    } else {
        document.querySelector("#titulo-tabela-despesas").innerHTML = "Sem despesas no mês atual....";
        document.querySelector("#tabela-despesas-por-mes").style.display = "none";
    }
}

function loadDataFromHTML(codigo, responsavel, motivo, local, data, servico, custo, quantidade, subtotal, comprovante, posicao) {
    subtotal = formataNum(subtotal);
    
    const nome_responsavel = getListaResponsaveis()[responsavel][1];
    const nome_motivo = getListaMotivos()[motivo][1];
    
    const status = "status_ok";

    // modal 
    let acao_comprovante = ` <button style="marging:10px;" 
                                     type="button" 
                                     class="btn btn-primary" 
                                     data-toggle="modal" 
                                     data-target="#modalComprovante"
                                     onclick="atualizaModalComprovante('` + servico + `','` + custo + `','` + quantidade + `','` + comprovante + `')">
                                Visualizar
                            </button>`;

    alinhamento = `align="` + posicao +`"`;

    const acao = "Conferir";

    const style = 'style="padding:10px 5px;"';

    let body = document.querySelector(".containerTable-body");

    body.innerHTML += `<tr class="details">
                            <td class="` + status + `" ` + alinhamento + style + `>   ` + nome_responsavel + `</td>
                            <td class="` + status + `" ` + alinhamento + style + `>   ` + nome_motivo + `</td>
                            <td class="` + status + `" ` + alinhamento + style + `>   ` + local + `</td>
                            <td class="` + status + `" ` + alinhamento + style + `>   ` + data + `</td>
                            <td class="` + status + `" ` + alinhamento + style + `>   ` + servico + `</td>
                            <td class="` + status + `" ` + alinhamento + style + `>R$ ` + custo + `</td>
                            <td class="` + status + `" ` + alinhamento + style + `>   ` + quantidade + `</td>
                            <td class="` + status + `" ` + alinhamento + style + `>R$ ` + subtotal + `</td>
                            <td class="` + status + `" ` + alinhamento + style + `>   ` + acao_comprovante + `</td>
                            <td class="` + status + `" ` + alinhamento + style + `>   ` + acao + `</td>
                        </tr>`;
    
}

function calcularDespesas(){
    const data_despesas = "07/09/2023"; 
    let total_despesa = 0;   
    let aListaDespesas = getListaDespesas(data_despesas);
    aListaDespesas.forEach(function(value, key) {
        const custo       = value[6];
        const quantidade  = value[7];
        
        let subtotal = getFloatValue(custo) * parseInt(quantidade);

        total_despesa += subtotal;

        subtotal = formataNum(subtotal);
    });

    // Atualiza os totais
    let saldo_atual = document.querySelector("#saldo_atual_festa").value;

    saldo_atual = saldo_atual - total_despesa;

    document.querySelector("#input_saldo_atual").value = saldo_atual;
    document.querySelector("#input_total_gasto").value = total_despesa;

    document.querySelector("#saldo_atual").innerHTML =  "R$ " + formataNum(saldo_atual);
    document.querySelector("#total_gasto").innerHTML =  "R$ " + formataNum(total_despesa);
}

function getListaMeses() {
    return new Array(
        Array(1, "Janeiro"),
        Array(2, "Fevereiro"),
        Array(3, "Março"),
        Array(4, "Abril"),
        Array(5, "Maio"),
        Array(6, "Junho"),
        Array(7, "Julho"),
        Array(8, "Agosto"),
        Array(9, "Setembro"),
        Array(10, "Outubro"),
        Array(11, "Novembro"),
        Array(12, "Dezembro"),
    );
}

function atualizaListaMesesDespesa(){
    const ano = 2023;
    
    document.querySelector("#lista-despesa-1-semestre").innerHTML = "";
    document.querySelector("#lista-despesa-2-semestre").innerHTML = "";
        
    const mes_selecionado = parseInt(document.querySelector("#mes_selecionado").value);

    const aListaMeses = getListaMeses();
    aListaMeses.forEach(function(value, key) {
        const mes = parseInt(value[0]);
        const mes_descricao = value[1];
        
        let acao_voltar = "";
        let adiciona    = true;
        let mes_atual   = "";

        if(mes_selecionado > 0){ 
            adiciona = false;
            if(mes_selecionado == mes){
                adiciona = true;
            }                

            acao_voltar = `<div class="sales-details">
                                <div class="title">
                                    <div class="button">
                                        <a href="#" id="titulo_despesa" style="padding:15px;" onclick="atualizaListaMesesDespesaVoltar()">Voltar</a>
                                    </div>
                                </div>
                            </div>`;
        }


        if(adiciona){
            mes_atual = `<div class="sales-details">
                            <div class="title">
                                <div class="button">
                                    <a href="#" id="titulo_despesa" style="width:190px; padding:15px;" onclick="atualizaDespesa('` + mes + `')">${mes_descricao}/${ano}</a>
                                </div>
                            </div>
                         </div>${acao_voltar}` ;            
        }

        if(mes <= 6){
            document.querySelector("#lista-despesa-1-semestre").innerHTML += mes_atual;
        } else {
            document.querySelector("#lista-despesa-2-semestre").innerHTML += mes_atual;
        }      
    });

    if(mes_selecionado > 0){
        document.querySelector("#lista-despesa-1-semestre").style.display = "none";
        document.querySelector("#lista-despesa-2-semestre").style.display = "none";
        if(mes_selecionado <= 6){
            document.querySelector("#lista-despesa-1-semestre").style.display = "flex";
        } else {
            document.querySelector("#lista-despesa-2-semestre").style.display = "flex";
        }
    }

    loadDespesas();
}

function atualizaDespesa(mes){
    document.querySelector("#mes_selecionado").value = mes;

    atualizaListaMesesDespesa();
    
    document.querySelector("#tabela-despesas").style.display = "block";    
}

function atualizaListaMesesDespesaVoltar(mes){
    document.querySelector("#mes_selecionado").value = 0;
    document.querySelector("#tabela-despesas").style.display = "none";

    document.querySelector("#lista-despesa-1-semestre").style.display = "flex";
    document.querySelector("#lista-despesa-2-semestre").style.display = "flex";
    
    atualizaListaMesesDespesa();
}