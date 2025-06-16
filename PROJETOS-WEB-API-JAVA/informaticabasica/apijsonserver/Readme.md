# Criando uma API Falsa com JSON Server

O artigo da Rocketseat explica como utilizar o [JSON Server](https://github.com/typicode/json-server) para criar rapidamente uma API REST falsa. Essa ferramenta é muito útil para simular um backend durante o desenvolvimento de aplicações front-end, permitindo testar requisições HTTP sem precisar de um servidor real.

## Principais Pontos

- **Instalação:**  
  O JSON Server pode ser instalado globalmente usando o npm:
  ```
  npm install -g json-server
  ```

- **Criando o arquivo de dados:**  
  Basta criar um arquivo `db.json` com os dados que você deseja expor via API. Exemplo:
  ```json
  {
    "posts": [
      { "id": 1, "title": "Hello World" }
    ]
  }
  ```

- **Executando o servidor:**  
  Rode o comando abaixo para iniciar a API:
  ```
  json-server --watch db.json
  ```
  Isso disponibiliza endpoints REST completos (GET, POST, PUT, DELETE) para os dados do arquivo.

- **Vantagens:**  
  - Rápido para configurar.
  - Ideal para prototipagem e testes.
  - Não requer backend real.

Para mais detalhes, acesse o artigo completo:  
[https://www.rocketseat.com.br/blog/artigos/post/criando-uma-api-falsa-com-json-server](https://www.rocketseat.com.br/blog/artigos/post/criando-uma-api-falsa-com-json-server)