// importando a funcionalidades do express
const express = require('express'); 
const cors = require('cors');

//importando as rotas
const routes = require('./routes')

// variavel que armazena a app
const app = express();

app.use(cors());
// informando para o express que estamos utilizando JSON para o corpo das requisições
app.use(express.json());
app.use(routes);

// GET - buscar uma informação do backend
// post - criar uma informação no backend
// put - alterar uma informação no backend
// delete - deletar algo no backend



/**
 * tipos de parametros:
 * query: parametros enviados na rota apos "?" (filtros, paginação) - http://localhost:3333/users?nome=yuri&page=2
 * 
 * route: parametros utilizados para identificar recursos - '/users/:id'
 * 
 * request body: corpo da requisição, utilizado para criar ou alterar recursos
 */



// a porta
app.listen(3333);
