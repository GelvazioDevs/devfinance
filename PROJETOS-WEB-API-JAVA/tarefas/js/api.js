function getUrlBase(port, colunas = false, filtro = false) {
    if (port == undefined) {
        port = "auth_user";
    }

    if(colunas){
        if(filtro){
            return "https://vdcszqvvrwdqcnjvcoxt.supabase.co/rest/v1/" + port + "?" + filtro + "&select=" + colunas;
        }

        return "https://vdcszqvvrwdqcnjvcoxt.supabase.co/rest/v1/" + port + "?select=" + colunas;
    }

    return "https://vdcszqvvrwdqcnjvcoxt.supabase.co/rest/v1/" + port + "?select=*";
}

function getHeadersSupabase() {
    return new Headers({
        "apikey": getTokenSupabase(),
        "Authorization": "Bearer " + getTokenSupabase(),
    });
}

function getTokenSupabase() {
    return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkY3N6cXZ2cndkcWNuanZjb3h0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjAyNTUxNTUsImV4cCI6MTk3NTgzMTE1NX0.U-3HSFgKo9ydTnKrpQsx5ytrBcLSpGwzVn6LqNwn14E";
}

function getMyInitFetchApi(method, body) {
    let usaBody = false;
    if (method == "POST") {
        usaBody = true;
    }

    if (usaBody) {
        return {
            method: method,
            headers: getHeadersSupabase(),
            mode: 'cors',
            cache: 'default',
            body: JSON.stringify(body)
        };
    }

    return {
        method: method,
        headers: getHeadersSupabase(),
        mode: 'cors',
        cache: 'default'
    };
}

async function callApi(method, port, body = false, oCall, colunas = false, filtro = false) {

    if (body == undefined) {
        body = "";
    }

    if (method == undefined) {
        method = "GET";
    }

    if (port == undefined) {
        port = "ping";
    }

    // Define a url
    const url = getUrlBase(port, colunas, filtro);

    console.log("url gerada:" + url);

    const myInit = getMyInitFetchApi(method, body);

    const promise = await fetch(url, myInit)
        // Converting the response to a JSON object
        .then(response => response.json())
        .then(data => {
            console.log(data);

            if (oCall) {
                // Chama a function por parametros com os dados retornados...
                oCall(data);
            }

        })
        .catch(function (error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
    });
}
