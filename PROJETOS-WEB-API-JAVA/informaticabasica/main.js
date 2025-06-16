fetch('main.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('app').innerHTML = html;
    })
    .catch(error => {
        console.error('Erro ao carregar main.html:', error);
    });