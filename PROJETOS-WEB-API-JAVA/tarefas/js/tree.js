function getListaTarefas() {    
    let aListaTarefas = new Array();
    callApi("GET", "tarefa", undefined, function (data) {
        const aDados = data;
        aDados.forEach(function (oDados, key) {
            aListaTarefas.push(
                Array(oDados.codigo, 
                    oDados.tipo,oDados.data_tarefa, oDados.assunto, oDados.descricao, oDados.ticket, oDados.horas,oDados.user_id
                )
            );
        });
    });
    return aListaTarefas;
}

const aListaTarefas = [];
function getListaTree(){
    aListaTarefas = getListaTarefas();

    const html_tree = getTree();

}

function getTree(codigo_pai_param = false){
    if (codigo_pai_param == false)
    codigo_pai_param = 0;

    aListaTarefas.forEach(function(value, key) {
        // codigo, Tipo - Descrição -  data - ticket - horas
        const codigo     = value[0];
        const tipo       = value[1];
        let data         = value[2];
        const assunto    = value[3];
        const descricao  = value[4];
        const ticket     = value[5];
        const horas      = value[6];
        const codigo_pai = value[7];

        let adiciona = false;
        if(codigo_pai_param){
            if(codigo_pai == codigo_pai_param){
                adiciona = true;
            }
        } else {
            adiciona = true;
        }

        if(adiciona){
            const date = new Date(data);    
            data = date.getDate() + ' de ' + getMesExtenso(date.getMonth()) + ' de ' + date.getFullYear();    
            const dataFromHTML = getDataFromHTML(codigo, tipo, assunto, descricao, data, ticket, horas);    
            let accordion = document.querySelector("#accordionPanelsStayOpen");    
            accordion.innerHTML = dataFromHTML;
        }
    });

    while ($rsTree = db_fetch_assoc($qrTree)) {
        if (trim($sHtml) == "")
            $sHtml = "<ul>";

        // Define o nome do Nivel

        // Pega o subnível
        $arSubnivel = getTreeNivel($trecodigo, $rsTree['tnicodigo'], $sNome, $arTnicodigoInvisible, $sOrderBy);
        $sSubnivel = "";
        if (trim($arSubnivel["html"]) != "")
            $sSubnivel = $arSubnivel["html"];
        // Monta o nivel
        $sHtml .= "<li $sClassLi>
                    <span class='$sClass' codnivel='" . $rsTree['tnicodigo'] . "' nomnivel='$sNome' $sStyle>" . $rsTree['tninome'] . "</span>
                    $sSubnivel
                   </li>";
    }

    if (trim($sHtml) != "")
        $sHtml .= "</ul>";

    return html;
}
